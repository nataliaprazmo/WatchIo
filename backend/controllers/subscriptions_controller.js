const stripe = require("../utils/Stripe");
const { User } = require("../models/User");

const getPrices = async () => {
	try {
		const prices = await stripe.prices.list({
			apiKey: process.env.STRIPE_SECRET_KEY,
		});
		return prices;
	} catch (error) {
		throw error;
	}
};

const createSession = async (userId, priceId) => {
	try {
		const user = await User.findOne({ _id: userId });
		console.log(user);
		const session = await stripe.checkout.sessions.create(
			{
				mode: "subscription",
				payment_method_types: ["card"],
				line_items: [
					{
						price: priceId,
						quantity: 1,
					},
				],
				success_url: "http://localhost:3000/",
				cancel_url: "http://localhost:3000/",
				customer: user.stripe_customer_id,
			},
			{
				apiKey: process.env.STRIPE_SECRET_KEY,
			}
		);
		console.log(session);
		return session;
	} catch (error) {
		throw error;
	}
};

const cancelSubscription = async (subscriptionId) => {
	try {
		const sub = await stripe.subscriptions.update(subscriptionId, {
			cancel_at_period_end: true,
		});
		return true;
	} catch (error) {
		throw error;
	}
};

module.exports = {
	getPrices,
	createSession,
	cancelSubscription,
};
