const router = require("express").Router();
const jwt_auth = require("../middleware/jwt_auth");
const {
	getSharedUsers,
	joinSubscription,
	generateShareCode,
	deactivateShareCode,
	deleteSharedUser,
} = require("../controllers/subscriptionSharing_controller");

router.use(jwt_auth);

router.post("/join", jwt_auth, async (req, res) => {
	try {
		const result = await joinSubscription(req.user._id, req.body.shareCode);
		if (!result)
			return res
				.status(403)
				.send({ message: "You can't perform this action" });
		return res.status(200).send({ message: "Joined successfully" });
	} catch (error) {
		console.error(error);
		return res.status(500).send({ message: error.message });
	}
});

router.get("/code", jwt_auth, async (req, res) => {
	try {
		const shareCode = await generateShareCode(req.user._id);
		if (!shareCode)
			return res
				.status(403)
				.send({ message: "You can't perform this action" });
		return res.status(200).send({
			data: { shareCode: shareCode },
			message: "Code generated",
		});
	} catch (error) {
		console.error(error);
		return res.status(500).send({ message: error.message });
	}
});

router.post("/deactivate", jwt_auth, async (req, res) => {
	try {
		const result = await deactivateShareCode(req.user._id);
		if (!result)
			return res
				.status(403)
				.send({ message: "You can't perform this action" });
		return res.status(200).send({ message: "Code deactivated" });
	} catch (error) {
		console.error(error);
		return res.status(500).send({ message: error.message });
	}
});

router.get("/shared", jwt_auth, async (req, res) => {
	try {
		const sharedUsers = await getSharedUsers(req.user._id);
		if (!sharedUsers)
			return res
				.status(403)
				.send({ message: "You can't perform this action" });
		return res.status(200).send({ data: { shared_with: sharedUsers } });
	} catch (error) {
		console.error(error);
		return res.status(500).send({ message: error.message });
	}
});

router.delete("/shared", jwt_auth, async (req, res) => {
	try {
		const sharedUsers = await deleteSharedUser(
			req.user._id,
			req.body.userToDelete
		);
		if (!sharedUsers)
			return res
				.status(403)
				.send({ message: "You can't perform this action" });
		return res.status(200).send({ data: { shared_with: sharedUsers } });
	} catch (error) {
		console.error(error);
		return res.status(500).send({ message: error.message });
	}
});

module.exports = router;
