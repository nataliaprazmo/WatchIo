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
		res.status(200).send({
			message: "Data fetched successfully",
			data: userData,
		});
	} catch (error) {
		console.error(error);
		res.status(500).send({ message: error.message });
	}
});

router.delete("/", jwt_auth, async (req, res) => {
	try {
		const result = await deleteCurrentUser(req.user._id, req.body.password);
		if (!result) {
			res.status(409).send({ message: "Wrong Password" });
		}
		res.redirect("/");
	} catch (error) {
		console.error(error);
		res.status(500).send({ message: error.message });
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
			res.status(409).send({ message: "Wrong old Password" });
		}
		res.status(200).send({
			message: "Password changed succesfully",
		});
	} catch (error) {
		console.error(error);
		res.status(500).send({ message: error.message });
	}
});

router.post("/register", async (req, res) => {
	try {
		const result = await registerNewUser(req.body);
		res.status(result.statusCode).send({ message: result.message });
	} catch (error) {
		console.error(error);
		res.status(500).send({ message: "Internal Server Error" });
	}

	// try {
	// 	const { error } = validate(req.body);
	// 	if (error)
	// 		return res.status(400).send({ message: error.details[0].message });
	// 	const user = await User.findOne({ email: req.body.email });
	// 	if (user)
	// 		return res
	// 			.status(409)
	// 			.send({ message: "User with given email already Exist!" });
	// 	const salt = await bcrypt.genSalt(Number(process.env.SALT));
	// 	const hashPassword = await bcrypt.hash(req.body.password, salt);
	// 	await new User({ ...req.body, password: hashPassword }).save();
	// 	res.status(201).send({ message: "User created successfully" });
	// } catch (error) {
	// 	console.log(error);
	// 	res.status(500).send({ message: "Internal Server Error" });
	// }
});

module.exports = router;
