const { User, validate } = require("../models/User");
const bcrypt = require("bcrypt");
const stripe = require("../utils/Stripe");

const getCurrentUserData = async (userId) => {
	try {
		console.log(userId);
		const user = await User.findOne({ _id: userId });
		const user_data = user.user_data;
		return user_data;
	} catch (error) {
		throw error;
	}
};

const deleteCurrentUser = async (userId, password) => {
	try {
		const user = await User.findOne({ _id: userId });
		console.log(userId);
		console.log(password);
		console.log(user);
		const isValid = await bcrypt.compare(
			password,
			user.credentials.password
		);
		if (!isValid) {
			return false;
		}
		await User.deleteOne({ _id: userId });
		return true;
	} catch (error) {
		throw error;
	}
};

const changeCurrentUserPassword = async (userId, oldPassword, newPassword) => {
	try {
		const user = await User.findOne({ _id: userId });
		const salt = await bcrypt.genSalt(Number(process.env.SALT));

		const isValid = await bcrypt.compare(
			oldPassword,
			user.credentials.password
		);

		if (!isValid) {
			return false;
		}

		const hashNewPassword = await bcrypt.hash(newPassword, salt);
		user.password = hashNewPassword;
		await user.save();
		return true;
	} catch (error) {
		throw error;
	}
};

const registerNewUser = async (userData) => {
	try {
		console.log(userData);
		if (userData?.is_admin != true) {
			userData.is_admin = false;
		}
		const { error } = validate(userData);
		if (error)
			return { statusCode: 400, message: error.details[0].message };
		const user = await User.findOne({
			"credentials.email": userData.credentials.email,
		});
		console.log("-----------------------");
		console.log(user);
		if (user)
			return {
				statusCode: 409,
				message: "User with given email already Exist!",
			};

		const salt = await bcrypt.genSalt(Number(process.env.SALT));
		const hashPassword = await bcrypt.hash(
			userData.credentials.password,
			salt
		);
		const stripeCustomerId = await stripe.customers.create(
			{
				email: userData.credentials.email,
			},
			{
				apiKey: process.env.STRIPE_SECRET_KEY,
			}
		);
		console.log(stripeCustomerId);

		await new User({
			...userData,
			"credentials.password": hashPassword,
			stripe_customer_id: stripeCustomerId.id,
		}).save();
		return { statusCode: 201, message: "User created successfully" };
	} catch (error) {
		throw error;
	}
};

module.exports = {
	getCurrentUserData,
	deleteCurrentUser,
	changeCurrentUserPassword,
	registerNewUser,
};
