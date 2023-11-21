const { Series, validateSeries } = require("../models/Series");
const { Video, validateVideo } = require("../models/Video");
const { Subscription } = require("../models/Subscription");
const { deleteFile, getImgToBase64 } = require("../utils/File_utils");

const getSeries = async (howMany) => {
	try {
		var series = await Series.find().populate("episodes").lean().exec();
		for (let i = 0; i < series.length; i++) {
			series[i].picture = await getImgToBase64(
				series[i].series_picture_path
			);
			delete series[i].series_picture_path;
			for (let j = 0; j < series[i].episodes.length; j++) {
				series[i].episodes[j].thumbnail = await getImgToBase64(
					series[i].episodes[j].thumbnail_path
				);
				delete series[i].episodes[j].thumbnail_path;
			}
		}
		return series;
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
		if (series)
			return { statusCode: 409, message: "Series already exists" };
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
		console.log(files_series_thumbnail);
		const newSeries = new Series({
			series_title: series_title,
			episodes: videos_ids,
			genres: series_genres,
			description: series_desc,
			year_of_production: series_year_of_production,
			series_picture_path: files_series_thumbnail[0].path,
			staff: series_staff,
			age_rating: "pg-13",
			imdb_score: 5.0,
		});
		await newSeries.save();
		return { statusCode: 200, message: "Series added successfully" };
	} catch (error) {
		throw error;
	}
};

const deleteSeries = async (id) => {
	try {
		const series = await Series.findOne({ _id: id })
			.populate("episodes")
			.exec();
		if (!series) return false;
		try {
			series.episodes.forEach(async (element) => {
				deleteFile(element.path);
				deleteFile(element.thumbnail_path);
				await element.deleteOne();
			});
			deleteFile(series.series_picture_path);
		} catch (error) {
			console.error(error);
		}

		await series.deleteOne();
		return true;
	} catch (error) {
		throw error;
	}
};

module.exports = { getSeries, getSeriesByGenre, upload_Series, deleteSeries };
