const {
	Subscription,
	validateSubscription,
} = require("../models/Subscription");

const getSubscritpionData = async (subscriptionId) => {
	try {
		const result = await Subscription.findOne({ _id: subscriptionId });
		return result;
	} catch (error) {
		throw error;
	}
};

const createSubscription = async (paid, days, userId) => {
	try {
		if (paid != true) {
			return { statusCode: 403, message: "Subscription wasn't paid" };
		}
		const result = await Subscription.findOne({ owner: userId });
		if (result) {
			if (Date.now < result.end_date)
				return {
					statusCode: 400,
					message: "You already have an active subscription",
				};
			return {
				statusCode: 400,
				message: "Bad request",
			};
		}
		// await new Subscription({
		//     "end_date
		// })
	} catch (error) {
		throw error;
	}
};

module.exports = {};
