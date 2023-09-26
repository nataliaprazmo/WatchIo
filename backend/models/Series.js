const mongoose = require("mongoose");
const Joi = require("joi");

const seriesSchema = new mongoose.Schema({
	series_name: { type: String, required: true },
	episodes: [
		{
			ep: { type: [mongoose.Schema.ObjectId], ref: "Video" },
		},
	],
	genre: [{ type: String }],
});

const Series = mongoose.model("Series", seriesSchema, "series");

const validateSeries = (data) => {
	const schema = Joi.object({});
	return schema.validate(data);
};

module.exports = { Series, validateSeries };
