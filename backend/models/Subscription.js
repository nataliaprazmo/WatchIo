const mongoose = require("mongoose");
const Joi = require("joi");

const subscriptionSchema = new mongoose.Schema({
	owner: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	stripe_subscription_id: { type: String, required: true },
	end_date: { type: Number },
	status: { type: String },
	sharing_code: { type: String },
	sharing_users_limit: { type: Number },
	shared_with: { type: [mongoose.Schema.Types.ObjectId], ref: "User" },
});

const Subscription = mongoose.model(
	"Subscription",
	subscriptionSchema,
	"subscriptions"
);

const validateSubscription = (data) => {
	const schema = Joi.object({
		owner: Joi.object().required().label("Subscription owner id"),
		shared_with: Joi.object().label("Shared with users"),
		sharing_code: Joi.object().label("Sharing code"),
		stripe_subscription_id: Joi.object()
			.required()
			.label("Stripe subscription id"),
	});
	return schema.validate(data);
};
module.exports = { Subscription, validateSubscription };
