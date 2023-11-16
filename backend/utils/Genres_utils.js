const parseGenres = (genres) => {
	genresParsed = [];
	genres.forEach((element) => {
		genresParsed.push(element.name);
	});
	return genresParsed;
};

module.exports = { parseGenres };
