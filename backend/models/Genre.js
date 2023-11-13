const mongoose = require("mongoose");
const Joi = require("joi");

const genreSchema = new mongoose.Schema({
	name: { type: String, require: true },
});

const Genre = mongoose.model("genres", genreSchema, "genres");

const validateGenre = (data) => {
	const schema = Joi.object({
		// name: Joi.string().required().label("Name"),
	});
	return schema.validate(data);
};
module.exports = { Genre, validateGenre };
