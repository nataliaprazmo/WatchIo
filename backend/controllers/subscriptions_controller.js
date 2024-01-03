const stripe = require("../utils/Stripe");
const { User } = require("../models/User");
const { Subscription } = require("../models/Subscription");
const { getStripeSubscriptionId } = require("../utils/Stripe_utils");

const getPrices = async (currency) => {
	try {
		var prices = await stripe.prices.list({
			currency: currency,
			active: true,
		});

		if (prices.data.length <= 0) {
			var prices = await stripe.prices.list({
				currency: "usd",
				active: true,
			});
		}

		var pricesParsed = [];
		prices.data.forEach((element) => {
			pricesParsed.push({
				id: element.id,
				amount_decimal: element.unit_amount,
				currency: element.currency,
			});
		});
		return pricesParsed;
	} catch (error) {
		throw error;
	}
};

const createSession = async (userId, priceId) => {
	try {
		const user = await User.findOne({ _id: userId });
		if (!user) return false;
		const session = await stripe.checkout.sessions.create(
			{
				mode: "subscription",
				payment_method_types: ["card"],
				line_items: [
					{
						price: priceId,
						quantity: 1,
					},
				],
				success_url: "http://localhost:3000/user",
				cancel_url: "http://localhost:3000/user",
				customer: user.stripe_customer_id,
			},
			{
				apiKey: process.env.STRIPE_SECRET_KEY,
			}
		);
		return session.url;
	} catch (error) {
		throw error;
	}
};

const cancelSubscription = async (userId) => {
	try {
		const sharedResult = await Subscription.findOneAndUpdate(
			{ shared_with: userId },
			{ $pull: { shared_with: userId } },
			{ new: true }
		);
		if (sharedResult) return { message: "sharedUserCancelled" };

		const stripeId = await getStripeSubscriptionId(userId);
		const stripeSubscription = await stripe.subscriptions.update(stripeId, {
			cancel_at_period_end: true,
		});
		subscription = await Subscription.findOne({
			stripe_subscription_id: stripeId,
		});
		if (!subscription) throw new Error("No such subscription");
		subscription.end_date = stripeSubscription.current_period_end;
		subscription.status = "canceled";
		await subscription.save();
		return {
			message: "ownerCancelled",
			data: {
				end_date: subscription.end_date,
			},
		};
	} catch (error) {
		throw error;
	}
};

const getSubscriptionData = async (user_id) => {
	try {
		var subscription = await Subscription.findOne({ owner: user_id })
			.populate("owner")
			.populate("shared_with")
			.exec();
		if (subscription) {
			var users = [];
			subscription.shared_with.forEach((element) => {
				users.push(element.credentials.email);
			});
			return {
				subscriptionUserType: "owner",
				subscription: {
					owner: subscription.owner.credentials.email,
					shared_with_count: subscription.shared_with.length,
					shared_with: users,
					status: subscription.status,
					end_date: subscription.end_date,
				},
			};
		}

		subscription = await Subscription.findOne({
			shared_with: user_id,
		})
			.populate("owner")
			.populate("shared_with")
			.exec();

		if (subscription) {
			return {
				subscriptionUserType: "shared",
				subscription: {
					owner: subscription.owner.credentials.email,
					status: subscription.status,
					shared_with_count: subscription.shared_with.length,
					end_date: subscription.end_date,
				},
			};
		}

		return false;
	} catch (error) {
		throw error;
	}
};

const checkSubscription = async (userId) => {
	try {
		var subscription = await Subscription.findOne({ owner: userId });
		var subscriptionUserType = "owner";
		if (!subscription) {
			subscription = await Subscription.findOne({
				shared_with: userId,
			});
			subscriptionUserType = "shared";
		}
		let stripeSubscription;

		if (subscription) {
			try {
				stripeSubscription = await stripe.subscriptions.retrieve(
					subscription.stripe_subscription_id
				);
			} catch (error) {
				console.error(error);
				subscription = null;
			}
		}
		if (subscription) {
			if (stripeSubscription.status == "active") {
				if (stripeSubscription.cancel_at_period_end) {
					subscription.status = "cancelled";
					subscription.end_date = stripeSubscription.current_period_end;
				}
				subscription.save();
				return {
					message: "success",
					data: {
						subscription_user_type: subscriptionUserType,
						status: subscription.status,
						end_date: subscription.end_date,
					},
				};
			}

			await Subscription.deleteOne({ _id: subscription._id });
			return { message: "noSubscription" };
		}

		const stripeSubscriptionId = await getStripeSubscriptionId(userId);
		if (!stripeSubscriptionId) return { message: "noSubscription" };

		var stripeData = {};
		try {
			stripeSubscription = await stripe.subscriptions.retrieve(
				stripeSubscriptionId
			);
			stripeData.current_period_end = stripeSubscription.current_period_end;
			stripeData.status = "active";
			if (stripeData.cancel_at_period_end) stripeData.status = "canceled";
		} catch (error) {
			console.error("SERVERERROR: " + error);
			// return res.status(500).send({ message: "Server error" });
		}

		const sub = await new Subscription({
			owner: userId,
			stripe_subscription_id: stripeSubscriptionId,
			sharing_code: "",
			sharing_users_limit: 5,
			shared_with: [],
			status: stripeData.status,
			end_date: stripeData.current_period_end,
		}).save();
		subscriptionUserType = "owner";
		return {
			message: "success",
			data: {
				subscription_user_type: subscriptionUserType,
				status: sub.status,
				end_date: sub.end_date,
			},
		};
	} catch (error) {
		console.error(error);
		throw error;
	}
};

module.exports = {
	getPrices,
	createSession,
	cancelSubscription,
	getSubscriptionData,
	checkSubscription,
};
