const stripe = require("./Stripe");
const { User } = require("../models/User");

const getSubscriptionId = async (userId) => {
	try {
		const user = await User.findOne({ _id: userId });
		console.log(user.stripe_customer_id);
		const subscriptions = await stripe.subscriptions.list({
			customer: user.stripe_customer_id,
			status: "active",
		});
		if (subscriptions.data.length < 1) {
			return null;
		}
		console.log(subscriptions.data[0].id);
		return subscriptions.data[0].id;
	} catch (error) {
		throw error;
	}
};

module.exports = { getSubscriptionId };
