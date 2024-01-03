const bcrypt = require("bcrypt");
const { User } = require("../models/User");
const Joi = require("joi");

const login = async (email, password) => {
	try {
		const { error } = validate({ email, password });

		if (error) {
			return { statusCode: 400, message: "Invalid Email or Password" };
		}

		const user = await User.findOne({
			"credentials.email": email,
		});

		if (!user) return { statusCode: 401, message: "Invalid Email or Password" };

		const validPassword = await bcrypt.compare(
			password,
			user.credentials.password
		);

		if (!validPassword)
			return { statusCode: 401, message: "Invalid Email or Password" };

		const token = user.generateAuthToken();
		const role = user.is_admin === true ? "admin" : "user";

		return {
			statusCode: 200,
			data: token,
			role: role,
			message: "logged in successfully",
		};
	} catch (error) {
		throw error;
	}
};

const validate = (data) => {
	const schema = Joi.object({
		email: Joi.string().email().required().label("Email"),
		password: Joi.string().required().label("Password"),
	});
	return schema.validate(data);
};

module.exports = { login };
