const router = require("express").Router();
const jwt_auth = require("../middleware/jwt_auth");
const { checkSubscription } = require("../middleware/subscription_check");
const {
	createSession,
	getPrices,
	cancelSubscription,
} = require("../controllers/subscriptions_controller");
const { getSubscriptionId } = require("../utils/Stripe_utils");

// router.get("/prices", checkAuth, async (req, res) => {
router.get("/prices", jwt_auth, checkSubscription, async (req, res) => {
	try {
		const result = await getPrices();
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
			.send({ message: "Session created", data: session });
	} catch (error) {
		console.error(error);
		return res.status(500).send({ message: error.message });
	}
});

router.post("/cancel", jwt_auth, (req, res) => {
	try {
		const subId = getSubscriptionId(req.user._id);
		if (!cancelSubscription(subId)) {
			return res.status(500).send({ message: "Something gone wrong" });
		}
	} catch (error) {
		console.error(error);
		return res.status(500).send({ message: error.message });
	}
});

module.exports = router;
