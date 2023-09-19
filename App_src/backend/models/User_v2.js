const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
	credentials: {
		login: { type: String, required: true },
		password: { type: String, required: true },
	},

	userData: {
		first_name: { type: String, required: true },
		last_ame: { type: String, required: true },
		email: { type: String, required: true },
		phoneNumber: { type: Number, required: true },
	},
	is_admin: { type: Boolean, required: true },
});

userSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
		expiresIn: "7d",
	});
	return token;
};

const User_v2 = mongoose.model("User_v2", userSchema, "users_v2");

const validate = (data) => {
	const schema = Joi.object({
		credentials: {
			login: Joi.string().required.label("Login"),
			password: passwordComplexity().required().label("Password"),
		},

		userData: {
			first_name: Joi.string().required().label("First Name"),
			last_name: Joi.string().required().label("Last Name"),
			email: Joi.string().email().required().label("Email"),
			phone_number: Joi.number().required().label("Phone Number"),
			is_admin: Joi.boolean().required().label("Is admin"),
		},
	});
	return schema.validate(data);
};
module.exports = { User_v2, validate };
