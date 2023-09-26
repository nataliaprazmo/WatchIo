const mongoose = require("mongoose");
const Joi = require("joi");

const subscriptionSchema = new mongoose.Schema({
	// start_date: { type: Date, required: true },
	end_date: { type: Date, required: true },
	owner: { type: Schema.ObjectId, ref: "User", required: true },
	shared_with: { type: [Schema.ObjectId], ref: "User" },
});

const Subscription = mongoose.model(
	"Subscription",
	subscriptionSchema,
	"subscriptions"
);

const validateSubscription = (data) => {
	const schema = Joi.object({
		// start_date: Joi.date().required().label("Subscription start date"),
		end_date: Joi.date().required().label("Subscription end date"),
		owner: Joi.object().required().label("Subscription owner id"),
		shared_with: Joi.object().label("Shared with users"),
	});
	return schema.validate(data);
};
module.exports = { Subscription, validateSubscription };
