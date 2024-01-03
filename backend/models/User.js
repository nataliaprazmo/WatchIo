const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");
const stripe = require("../utils/Stripe");

const userSchema = new mongoose.Schema({
	credentials: {
		email: { type: String, required: true },
		// login: { type: String, required: true },
		password: { type: String, required: true },
	},

	user_data: {
		first_name: { type: String, required: true },
		last_name: { type: String, required: true },
		phone_number: { type: Number, required: true },
	},

	stripe_customer_id: { type: String, required: true },
	is_admin: { type: Boolean, required: true },
});

userSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
		expiresIn: "7d",
	});
	return token;
};

const User = mongoose.model("User", userSchema, "users");

const validate = (data) => {
	const schema = Joi.object({
		credentials: {
			email: Joi.string().email().required().label("Email"),
			//login: Joi.string().required().label("Login"),
			password: passwordComplexity().required().label("Password"),
		},

		user_data: {
			first_name: Joi.string().required().label("First Name"),
			last_name: Joi.string().required().label("Last Name"),
			phone_number: Joi.number().required().label("Phone Number"),
		},
		// is_admin: Joi.boolean().required().label("Is admin"),
		// stripe_customer_id: Joi.string().required().label("Stripe customer id"),
	});
	return schema.validate(data);
};
module.exports = { User, validate };
