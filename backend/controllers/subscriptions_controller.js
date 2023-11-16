const stripe = require("../utils/Stripe");
const { User } = require("../models/User");

const getPrices = async (currency) => {
	try {
		var prices = await stripe.prices.list({
			currency: currency,
			active: true,
		});

		if (prices.data.length <= 0) {
			var prices = await stripe.prices.list({
				currency: "usd",
				active: true,
			});
		}

		var pricesParsed = [];
		prices.data.forEach((element) => {
			pricesParsed.push({
				id: element.id,
				amount_decimal: element.unit_amount,
				currency: element.currency,
			});
		});
		return pricesParsed;
	} catch (error) {
		throw error;
	}
};

const createSession = async (userId, priceId) => {
	try {
		const user = await User.findOne({ _id: userId });
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
				success_url: "http://localhost:3000/user",
				cancel_url: "http://localhost:3000/user",
				customer: user.stripe_customer_id,
			},
			{
				apiKey: process.env.STRIPE_SECRET_KEY,
			}
		);
		return session.url;
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
