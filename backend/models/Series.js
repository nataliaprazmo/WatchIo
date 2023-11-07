const mongoose = require("mongoose");
const Joi = require("joi");

const seriesSchema = new mongoose.Schema({
	series_title: { type: String, required: true },
	series_picture_file_name: { type: String },
	description: { type: String },
	staff: [
		{
			name: { type: String },
			surname: { type: String },
			role: { type: String },
		},
	],

	episodes: [
		{
			ep: { type: [mongoose.Schema.Types.ObjectId], ref: "Video" },
		},
	],
	genre: [{ type: String }],
});

const Series = mongoose.model("Series", seriesSchema, "series");

const validateSeries = (data) => {
	const schema = Joi.object({});
	// return schema.validate(data);
	return true;
};

module.exports = { Series, validateSeries };
