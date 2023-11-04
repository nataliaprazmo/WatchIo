const stripe = require("../utils/Stripe");
const { User } = require("../models/User");
const { Subscription } = require("../models/Subscription");

const getPrices = async () => {
	try {
		const prices = await stripe.prices.list({
			apiKey: process.env.STRIPE_SECRET_KEY,
		});
		return prices;
	} catch (error) {
		throw error;
	}
};

const createSession = async (userId, priceId) => {
	try {
		const user = await User.findOne({ _id: userId });
		console.log(user);
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
				success_url: "http://localhost:3000/",
				cancel_url: "http://localhost:3000/",
				customer: user.stripe_customer_id,
			},
			{
				apiKey: process.env.STRIPE_SECRET_KEY,
			}
		);
		console.log(session);
		return session;
	} catch (error) {
		throw error;
	}
};

const cancelSubscription = async (subscriptionId) => {
	try {
		const sub = await stripe.subscriptions.update(subscriptionId, {
			cancel_at_period_end: true,
		});
		return true;
	} catch (error) {
		throw error;
	}
};

const joinSubscription = async (userId, shareCode) => {
	try {
		console.log(shareCode);
		const subscription = await Subscription.findOne({
			sharing_code: shareCode,
		});
		console.log(subscription);
		if (!subscription) return null;

		if (
			subscription.sharing_users_limit <=
				subscription.shared_with.length ||
			subscription.owner == userId ||
			subscription.shared_with.includes(userId)
		) {
			return null;
		}

		subscription.shared_with.push(userId);
		await subscription.save();
		return true;
	} catch (error) {
		throw error;
	}
};

const generateShareCode = async (userId) => {
	try {
		const subscription = await Subscription.findOne({
			owner: userId,
		});
		console.log(subscription);
		if (!subscription) return null;

		const shareCode = Math.round(Math.random() * 1e9);
		subscription.sharing_code = shareCode;
		await subscription.save();
		console.log(shareCode);
		return shareCode;
	} catch (error) {
		throw error;
	}
};

const deactivateShareCode = async (userId) => {
	try {
		const subscription = await Subscription.findOne({
			owner: userId,
		});
		if (!subscription) return null;
		subscription.sharing_code = "";
		await subscription.save();
		return true;
	} catch (error) {
		throw error;
	}
};

const getSharedUsers = async (userId) => {
	try {
		const subscription = await Subscription.findOne({
			owner: userId,
		})
			.populate("shared_with")
			.exec();
		if (!subscription) return null;
		var users = [];
		subscription.shared_with.forEach((element) => {
			users.push(element.credentials.email);
		});
		console.log(users);
		return users;
	} catch (error) {
		throw error;
	}
};

const deleteSharedUser = async (userId, emailToDelete) => {
	try {
		const subscription = await Subscription.findOne({
			owner: userId,
		});
		if (!subscription) return null;

		const userToDelete = await User.findOne({
			"credentials.email": emailToDelete,
		});
		if (!userToDelete) return null;

		await Subscription.updateOne(
			{ owner: userId },
			{ $pull: { shared_with: userToDelete._id } }
		);

		return true;
	} catch (error) {
		throw error;
	}
};

module.exports = {
	getPrices,
	createSession,
	cancelSubscription,
	joinSubscription,
	generateShareCode,
	deactivateShareCode,
	getSharedUsers,
	deleteSharedUser,
};
