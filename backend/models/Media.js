const mongoose = require("mongoose");
const Joi = require("joi");

const mediaSchema = new mongoose.Schema({
	series_name: { type: String, required: true },
	episodes: [
		{
			ep: { type: [Schema.ObjectId], ref: "Video_v2" },
		},
	],
	genre: [{ name: { type: String } }],
});

const Media = mongoose.model("Media", mediaSchema, "media");

const validateMedia = (data) => {
	const schema = Joi.object({});
	return schema.validate(data);
};
module.exports = { Media, validateMedia };
