const { Series, validateSeries } = require("../models/Series");
const { Video, validateVideo } = require("../models/Video");

const getSeries = async (howMany) => {
	try {
		console.log(howMany);
		const result = Series.find.limit(howMany);
		return result;
	} catch (error) {
		throw error;
	}
};

const getSeriesByGenre = async (howMany, genre) => {
	try {
		console.log(howMany);
		const result = Series.find({ genre: genre }).limit(howMany);
		return result;
	} catch (error) {
		throw error;
	}
};

const upload_Series = async (
	series_name,
	genre,
	titles,
	descs,
	datalinks,
	files
) => {
	try {
		const series = await Series.findOne({ series_title: series_name });
		if (series)
			return { statusCode: 409, message: "Series already exists" };
		let videos_ids = [];
		console.log(files);
		for (let i = 0; i < files.length; i++) {
			const video = new Video({
				fileName: files[i].filename.slice(0, -4),
				title: titles[i],
				desc: descs[i],
				path: files[i].path,
				data_link: datalinks[i],
			});
			await video.save();
			videos_ids.push(video._id);
		}
		const newSeries = new Series({
			series_title: series_name,
			episodes: videos_ids,
			genre: genre,
		});
		await newSeries.save();
		return { statusCode: 200, message: "Series added successfully" };
	} catch (error) {
		throw error;
	}
};

module.exports = { getSeries, getSeriesByGenre, upload_Series };
