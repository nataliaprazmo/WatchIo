const mongoose = require("mongoose");
const Joi = require("joi");

const watchlistSchema = new mongoose.Schema({});

const Watchlist = mongoose.model("Watchlist", watchlistSchema, "subscriptions");

const validateWatchlist = (data) => {
	const schema = Joi.object({});
	return schema.validate(data);
};
module.exports = { Watchlist, validateWatchlist };
