const router = require("express").Router();
const jwt_auth = require("../middleware/jwt_auth");
const {
	createSession,
	getPrices,
	cancelSubscription,
	getSubscriptionData,
	checkSubscription,
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
		if (!session) return res.status(401).send({ message: "Unauthorized" });
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
			return res.status(200).send({
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
		const result = await checkSubscription(req.user._id);
		if (result.message == "noSubscription")
			return res.status(403).send({ message: "noSubscription" });
		if (result.message == "success")
			return res.status(200).send({
				message: "success",
				data: {
					subscription_user_type: result.data.subscriptionUserType,
					status: result.data.status,
					end_date: result.data.end_date,
				},
			});
		return res.status(500).send({ message: "Server error" });
	} catch (error) {
		console.error(error);
		return res.status(500).send({ message: error.message });
	}
});

router.get("/", jwt_auth, async (req, res) => {
	try {
		const subscriptionData = await getSubscriptionData(req.user._id);
		if (!subscriptionData)
			return res.status(404).send({ message: "Subscription not found" });
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
