const router = require("express").Router();
const jwt_auth = require("../middleware/jwt_auth");
const {
	createSession,
	getPrices,
} = require("../controllers/subscriptions_controller");

// router.get("/prices", checkAuth, async (req, res) => {
router.get("/prices", async (req, res) => {
	try {
		const result = await getPrices();
		res.status(200).send({
			message: "Prices fetched succesfully",
			data: result,
		});
	} catch (error) {
		res.status(500).send({ message: error.message });
	}
});

router.post("/session", jwt_auth, async (req, res) => {
	// router.post("/session", async (req, res) => {
	try {
		const session = await createSession(req.user._id, req.body.priceId);
		res.status(200).send({ message: "Session created", data: session });
	} catch (error) {
		res.status(500).send({ message: error.message });
	}
});

router.get("/", (req, res) => {});

router.post("/", (req, res) => {});

router.post("/renew", (req, res) => {});

router.post("/deactivate", (req, res) => {});

router.post("/join", (req, res) => {});

router.get("/share_code", (req, res) => {});

module.exports = router;
