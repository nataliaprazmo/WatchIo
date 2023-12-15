const stripe = require("./Stripe");
const { User } = require("../models/User");

const getStripeSubscriptionId = async (userId) => {
	try {
		const user = await User.findOne({ _id: userId });
		if (!user) {
			throw new Error("User not found");
		}
		const subscriptions = await stripe.subscriptions.list({
			customer: user.stripe_customer_id,
			status: "active",
		});
		if (subscriptions.data.length < 1) {
			return null;
		}
		return subscriptions.data[0].id;
	} catch (error) {
		throw error;
	}
};

module.exports = { getStripeSubscriptionId };
