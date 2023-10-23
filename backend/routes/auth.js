const router = require("express").Router();
const bcrypt = require("bcrypt");
const { User } = require("../models/User");
const Joi = require("joi");

router.post("/login", async (req, res) => {
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });
		const user = await User.findOne({
			"credentials.email": req.body.email,
		});
		if (!user)
			return res
				.status(401)
				.send({ message: "Invalid Email or Password" });
		const validPassword = await bcrypt.compare(
			req.body.password,
			user.credentials.password
		);
		if (!validPassword) {
			return res
				.status(401)
				.send({ message: "Invalid Email or Password" });
		}
		const token = user.generateAuthToken();
		const role = user.is_admin === true ? "admin" : "user";
		res.status(200).send({
			data: token,
			role: role,
			message: "logged in successfully",
		});
	} catch (error) {
		console.error(error);
		res.status(500).send({ message: "Internal Server Error" });
	}
});

const validate = (data) => {
	const schema = Joi.object({
		email: Joi.string().email().required().label("Email"),
		password: Joi.string().required().label("Password"),
	});
	return schema.validate(data);
};

module.exports = router;
