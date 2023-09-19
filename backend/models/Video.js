const mongoose = require("mongoose");
const Joi = require("joi");

const videoSchema = new mongoose.Schema({
	fileName: { type: String, required: true },
	title: { type: String, required: true },
	data_link: { type: String },
	desc: { type: String },
	staff: [
		{
			name: { type: String, required: true },
			surname: { type: String, required: true },
			role: { type: String },
		},
	],
	path: { type: String, required: true },
});

const Video = mongoose.model("Video", videoSchema, "videos");

const validate = (data) => {
	const schema = Joi.object({
		fileName: Joi.string().required().label("Filename"),
		title: Joi.string().required().label("Title"),
		desc: Joi.string().label("Description"),
		data_link: Joi.string().label("Data_link"),
		path: Joi.string().required().label("Path"),
		staff: Joi.object().label("Staff"),
	});
	return schema.validate(data);
};
module.exports = { Video, validate };
