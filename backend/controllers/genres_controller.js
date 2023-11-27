const { Genre } = require("../models/Genre");
const {
	parseGenres,
	genreCreateIfDontExists,
} = require("../utils/Genres_utils");

const genreCreateIfDontExists_utils = genreCreateIfDontExists;

const getAllGenres = async () => {
	try {
		const genres = await Genre.find();
		return parseGenres(genres);
	} catch (error) {
		throw error;
	}
};

const addGenre = async (newGenre) => {
	try {
		const genre = await Genre.find({ name: newGenre });
		if (!genre) return false;
		await new Genre({ name: newGenre }).save();
		return true;
	} catch (error) {
		throw error;
	}
};

const genreCreateIfDontExists_testMultiple = async (genresList) => {
	try {
		const result = await genreCreateIfDontExists_utils(genresList);
		if (!result) return false;
		return true;
	} catch (error) {
		throw error;
	}
};

module.exports = {
	getAllGenres,
	addGenre,
	genreCreateIfDontExists_testMultiple,
};
