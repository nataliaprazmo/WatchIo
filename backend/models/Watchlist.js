const mongoose = require("mongoose");
const Joi = require("joi");

const watchlistSchema = new mongoose.Schema({
	owner: { type: mongoose.Schema.Types.ObjectId,require:true, ref: "User" },
	series: [{ type: mongoose.Schema.Types.ObjectId, ref: "Series" }],
});

const Watchlist = mongoose.model("Watchlist", watchlistSchema, "watchlists");

const validateWatchlist = (data) => {
	const schema = Joi.object({});
	return schema.validate(data);
};
module.exports = { Watchlist, validateWatchlist };
