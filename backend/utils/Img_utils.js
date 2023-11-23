const fsPromises = require("fs/promises");
const fs = require("fs");

const getImgToBase64 = async (path) => {
	try {
		if (!fs.existsSync(path)) return false;
		const file = await fsPromises.readFile(path);
		const imgBase64 = file.toString("base64");
		return imgBase64;
	} catch (error) {
		console.error(error);
		return false;
	}
};

const addImgsToSeries = async (series) => {
	try {
		for (let i = 0; i < series.length; i++) {
			series[i].picture = await getImgToBase64(
				series[i].series_picture_path
			);
			delete series[i].series_picture_path;
		}
		return series;
	} catch (error) {
		console.error(error);
		throw error;
	}
};

const addImgsToEpisodes = async (episodes) => {
	try {
		for (let j = 0; j < episodes.length; j++) {
			episodes[j].thumbnail = await getImgToBase64(
				episodes[j].thumbnail_path
			);
			delete episodes[j].thumbnail_path;
		}
		return episodes;
	} catch (error) {
		console.error(error);
		throw error;
	}
};

module.exports = {
	addImgsToSeries,
	getImgToBase64,
	addImgsToEpisodes,
};
