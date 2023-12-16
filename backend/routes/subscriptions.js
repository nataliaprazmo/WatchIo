const router = require("express").Router();
const jwt_auth = require("../middleware/jwt_auth");
const { checkSubscription } = require("../middleware/subscription_check");
const {
	createSession,
	getPrices,
	cancelSubscription,
	getSubscriptionData,
} = require("../controllers/subscriptions_controller");
const { getStripeSubscriptionId } = require("../utils/Stripe_utils");
const { Subscription } = require("../models/Subscription");
const stripe = require("../utils/Stripe");

// router.get("/prices", checkAuth, async (req, res) => {
router.get("/prices", async (req, res) => {
	try {
		const result = await getPrices(req.query.currency);
		return res.status(200).send({
			message: "Prices fetched succesfully",
			data: { prices: result },
		});
	} catch (error) {
		console.error(error);
		return res.status(500).send({ message: error.message });
	}
});

router.post("/session", jwt_auth, async (req, res) => {
	try {
		const session = await createSession(req.user._id, req.body.priceId);
		return res
			.status(200)
			.send({ message: "Session created", data: { url: session } });
	} catch (error) {
		console.error(error);
		return res.status(500).send({ message: error.message });
	}
});

router.post("/cancel", jwt_auth, async (req, res) => {
	try {
		const result = await cancelSubscription(req.user._id);
		if (!result) res.status(500).send({ message: "Something gone wrong" });
		if (result.message == "sharedUserCancelled")
			return res.status(200).send({ message: "sharedUserCancelled" });
		if (result.message == "ownerCancelled")
			return res
				.status(200)
				.send({
					message: "ownerCancelled",
					data: { end_date: result.data.end_date },
				});
	} catch (error) {
		console.error(error);
		return res.status(500).send({ message: error.message });
	}
});

router.get("/subscriptionCheck", jwt_auth, async (req, res) => {
	try {
		var subscription = await Subscription.findOne({ owner: req.user._id });
		var subscriptionUserType = "owner";
		if (!subscription) {
			subscription = await Subscription.findOne({
				shared_with: req.user._id,
			});
			subscriptionUserType = "shared";
		}
		let stripeSubscription;

		console.log(subscription);
		if (subscription) {
			try {
				stripeSubscription = await stripe.subscriptions.retrieve(
					subscription.stripe_subscription_id
				);
			} catch (error) {
				console.error(error);
				subscription = null;
				console.log(subscription);
			}
		}
		console.log(subscription);
		if (subscription) {
			// const stripeSubscription = await stripe.subscriptions.retrieve(
			// 	subscription.stripe_subscription_id
			// );
			if (stripeSubscription.status == "active") {
				if (stripeSubscription.cancel_at_period_end) {
					subscription.status = "cancelled";
					subscription.end_date =
						stripeSubscription.current_period_end;
				}
				subscription.save();
				console.log("________-----------________");
				console.log(subscription);
				return res.status(200).send({
					message: "success",
					data: {
						subscription_user_type: subscriptionUserType,
						status: subscription.status,
						end_date: subscription.end_date,
						status: subscription.status,
					},
				});
			}

			await Subscription.deleteOne({ _id: subscription._id });
			return res.status(403).send({ message: "noSubscription" });
		}

		const stripeSubscriptionId = await getStripeSubscriptionId(
			req.user._id
		);
		if (!stripeSubscriptionId)
			return res.status(403).send({ message: "noSubscription" });

		var stripeData = {};
		try {
			stripeSubscription = await stripe.subscriptions.retrieve(
				stripeSubscriptionId
			);
			stripeData.current_period_end =
				stripeSubscription.current_period_end;
			stripeData.status = "active";
			if (stripeData.cancel_at_period_end) stripeData.status = "canceled";
		} catch (error) {
			console.error("SERVERERROR: " + error);
			// return res.status(500).send({ message: "Server error" });
		}

		const sub = await new Subscription({
			owner: req.user._id,
			stripe_subscription_id: stripeSubscriptionId,
			sharing_code: "",
			sharing_users_limit: 5,
			shared_with: [],
			status: stripeData.status,
			end_date: stripeData.current_period_end,
		}).save();
		console.log(sub);
		subscriptionUserType = "owner";
		return res.status(200).send({
			message: "success",
			data: {
				subscription_user_type: subscriptionUserType,
				status: sub.status,
				end_date: sub.end_date,
			},
		});
	} catch (error) {
		console.error(error);
		return res.status(500).send({ message: error.message });
	}
});

router.get("/", jwt_auth, async (req, res) => {
	try {
		const subscriptionData = await getSubscriptionData(req.user._id);
		if (!subscriptionData)
			return res.status(404).send({ message: "Subscription not found" }); // change to proper status code and error mesaage later
		return res.status(200).send({
			message: "retrieved",
			data: { subscription: subscriptionData },
		});
	} catch (error) {
		console.error(error);
		return res.status(500).send({ message: "Server error" });
	}
});

module.exports = router;
