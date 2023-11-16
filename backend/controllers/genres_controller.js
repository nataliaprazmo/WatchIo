const { Genre } = require("../models/Genre");
const { parseGenres } = require("../utils/Genres_utils");

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

const genreCreateIfDontExists = async (genresList) => {
	try {
		const genres = await Genre.find();
		const parsedGenres = parseGenres(genres);
		genresList.forEach(async (element) => {
			if (!parsedGenres.includes(element))
				await new Genre({ name: element }).save();
		});
		return true;
	} catch (error) {
		throw error;
	}
};

module.exports = { getAllGenres, addGenre, genreCreateIfDontExists };
