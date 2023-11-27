const { Genre } = require("../models/Genre");

const parseGenres = (genres) => {
	genresParsed = [];
	genres.forEach((element) => {
		genresParsed.push(element.name);
	});
	return genresParsed;
};

const genreCreateIfDontExists = async (genresList) => {
	try {
		const genres = await Genre.find();
		const parsedGenres = parseGenres(genres);
		genresList.forEach((element) => {
			if (!parsedGenres.includes(element))
				new Genre({ name: element }).save();
		});
		return true;
	} catch (error) {
		throw error;
	}
};

module.exports = { parseGenres, genreCreateIfDontExists };
