const router = require("express").Router();
require("dotenv").config();
const jwt_auth = require("../middleware/jwt_auth");
const {
	getCurrentUserData,
	deleteCurrentUser,
	changeCurrentUserPassword,
	registerNewUser,
} = require("../controllers/users_controller");

router.get("/", jwt_auth, async (req, res) => {
	try {
		const userData = await getCurrentUserData(req.user._id);
		return res.status(200).send({
			message: "Data fetched successfully",
			data: { userData: userData },
		});
	} catch (error) {
		console.error(error);
		return res.status(500).send({ message: error.message });
	}
});

router.delete("/", jwt_auth, async (req, res) => {
	try {
		const result = await deleteCurrentUser(req.user._id, req.body.password);
		if (!result) {
			return res.status(409).send({ message: "Wrong Password" });
		}
		return res.redirect("/");
	} catch (error) {
		console.error(error);
		return res.status(500).send({ message: error.message });
	}
});

router.post("/password", jwt_auth, async (req, res) => {
	try {
		const result = await changeCurrentUserPassword(
			req.user._id,
			req.body.oldPassword,
			req.body.newPassword
		);
		if (!result) {
			return res.status(409).send({ message: "Wrong old Password" });
		}
		return res.status(200).send({
			message: "Password changed succesfully",
		});
	} catch (error) {
		console.error(error);
		return res.status(500).send({ message: error.message });
	}
});

router.post("/register", async (req, res) => {
	try {
		const result = await registerNewUser(req.body);
		return res.status(result.statusCode).send({ message: result.message });
	} catch (error) {
		console.error(error);
		return res.status(500).send({ message: "Internal Server Error" });
	}
});

module.exports = router;
