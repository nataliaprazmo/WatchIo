const router = require("express").Router();
const jwt_auth = require("../middleware/jwt_auth");
const { checkSubscription } = require("../middleware/subscription_check");
const {
	createSession,
	getPrices,
	cancelSubscription,
	getSubscriptionData,
} = require("../controllers/subscriptions_controller");
const { getSubscriptionId } = require("../utils/Stripe_utils");
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
		// const subId = await cancelSubscription(req.user._id);
		if (!cancelSubscription(subId)) {
			return res.status(500).send({ message: "Something gone wrong" });
		}
		return res.status(200).send({ message: "canceled" });
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
		console.log(subscription);
		if (subscription) {
			const stripeSubscription = await stripe.subscriptions.retrieve(
				subscription.stripe_subscription_id
			);
			if (stripeSubscription.status == "active")
				return res.status(200).send({
					message: "success",
					data: { subscription_user_type: subscriptionUserType },
				});

			await Subscription.deleteOne({ _id: subscription._id });
			return res.status(403).send({ message: "noSubscription" });
		}

		const stripeSubscriptionId = await getSubscriptionId(req.user._id);
		if (!stripeSubscriptionId)
			return res.status(403).send({ message: "noSubscription" });

		var stripeData = {};
		try {
			const stripeSubscription = await stripe.subscriptions.retrieve(
				stripeSubscriptionId
			);
			stripeData.current_period_end =
				stripeSubscription.current_period_end;
			stripeData.status = "active";
			if (stripeData.cancel_at_period_end) stripeData.status = "canceled";
		} catch (error) {
			console.error(error);
			return res.status(500).send({ message: "Server error" });
		}

		await new Subscription({
			owner: req.user._id,
			stripe_subscription_id: stripeSubscriptionId,
			sharing_code: "",
			sharing_users_limit: 5,
			shared_with: [],
			status: stripeData.status,
			end_date: stripeData.current_period_end,
		}).save();
		subscriptionUserType = "owner";
		return res.status(200).send({
			message: "success",
			data: { subscription_user_type: subscriptionUserType },
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
			return res.status(400).send({ message: "error" }); // change to proper status code and error mesaage later
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
