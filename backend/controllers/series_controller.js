const { Series, validateSeries } = require("../models/Series");
const { Video, validateVideo } = require("../models/Video");

const getSeries = async (howMany) => {
	try {
		const result = Series.find.limit(howMany);
		return result;
	} catch (error) {
		throw error;
	}
};

const getSeriesByGenre = async (howMany, genre) => {
	try {
		const result = Series.find({ genre: genre }).limit(howMany);
		return result;
	} catch (error) {
		throw error;
	}
};

const upload_Series = async (
	series_title,
	series_genres,
	series_desc,
	series_year_of_production,
	series_staff,
	episode_titles,
	episode_desc,
	files_videos,
	files_series_thumbnail,
	files_video_thumbnail
) => {
	try {
		const series = await Series.findOne({ series_title: series_title });
		if (series) return { statusCode: 409, message: "Series already exists" };
		let videos_ids = [];
		for (let i = 0; i < files_videos.length; i++) {
			const video = new Video({
				fileName: files_videos[i].filename.slice(0, -4),
				title: episode_titles[i],
				desc: episode_desc[i],
				path: files_videos[i].path,
				thumbnail_path: files_video_thumbnail[i].path,
			});
			await video.save();
			videos_ids.push(video._id);
		}

		const newSeries = new Series({
			series_title: series_title,
			episodes: videos_ids,
			genres: series_genres,
			description: series_desc,
			year_of_production: series_year_of_production,
			series_picture_path: files_series_thumbnail.path,
			staff: series_staff,
		});
		await newSeries.save();
		return { statusCode: 200, message: "Series added successfully" };
	} catch (error) {
		throw error;
	}
};

module.exports = { getSeries, getSeriesByGenre, upload_Series };
