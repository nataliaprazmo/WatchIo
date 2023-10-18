const router = require("express").Router();
const stripe = require("../utils/Stripe");
const { User } = require("../models/User");
const jwt_auth = require("../middleware/jwt_auth");

// router.get("/prices", checkAuth, async (req, res) => {
router.get("/prices", async (req, res) => {
	const prices = await stripe.prices.list({
		apiKey: process.env.STRIPE_SECRET_KEY,
	});

	return res.json(prices);
});

router.post("/session", jwt_auth, async (req, res) => {
	// router.post("/session", async (req, res) => {
	const user = await User.findOne({ _id: req.user._id });
	console.log(user);
	const session = await stripe.checkout.sessions.create(
		{
			mode: "subscription",
			payment_method_types: ["card"],
			line_items: [
				{
					price: req.body.priceId,
					quantity: 1,
				},
			],
			success_url: "http://localhost:3000/",
			cancel_url: "http://localhost:3000/",
			customer: user.stripeCustomerId,
		},
		{
			apiKey: process.env.STRIPE_SECRET_KEY,
		}
	);
	return res.json(session);
});

router.get("/", (req, res) => {
	try {
	} catch (error) {}
});

router.post("/", (req, res) => {});

router.post("/renew", (req, res) => {});

router.post("/deactivate", (req, res) => {});

router.post("/join", (req, res) => {});

router.get("/share_code", (req, res) => {});

module.exports = router;
