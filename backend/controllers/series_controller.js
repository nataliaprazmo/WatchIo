const { Series, validateSeries } = require("../models/Series");
const { Video, validateVideo } = require("../models/Video");
const { Subscription } = require("../models/Subscription");
const { deleteFile } = require("../utils/File_utils");
const { addImgsToSeries, addImgsToEpisodes } = require("../utils/Img_utils");
const { genreCreateIfDontExists } = require("../utils/Genres_utils");

const getSeries = async () => {
	try {
		var series = await Series.find().lean().exec();
		await addImgsToSeries(series);
		return series;
	} catch (error) {
		throw error;
	}
};

const getSeriesDetails = async (seriesId) => {
	try {
		// console.log(seriesId);
		var series = await Series.findById(seriesId)
			.populate("episodes")
			.lean()
			.exec();
		if (!series) return false;
		// console.log(series);
		console.log(series);
		await addImgsToSeries([series]);
		// console.log(series.episodes.length);
		await addImgsToEpisodes(series.episodes);
		// console.log(series);
		return series;
	} catch (error) {
		throw error;
	}
};

const getSeriesByGenre = async (genre) => {
	try {
		const result = await Series.find({ genres: { $in: [genre] } })
			.lean()
			.exec();
		await addImgsToSeries(result);
		return result;
	} catch (error) {
		throw error;
	}
};

const getSeriesSortedBy = async (sortedBy, howMany) => {
	try {
		const result = await Series.find()
			.sort({ [sortedBy]: -1 })
			.limit(howMany)
			.lean()
			.exec();
		await addImgsToSeries(result);
		return result;
	} catch (error) {
		throw error;
	}
};

const getByOneEpisode = async (howMany) => {
	try {
		const result = await Series.find({ "episodes.length": 1 })
			.limit(howMany)
			.lean()
			.exec();
		await addImgsToSeries(result);
		return result;
	} catch (error) {
		throw error;
	}
};

const getByEpisodeCount = async (howMany) => {
	try {
		const result = await Series.find({
			"episodes.length": { $gt: 1 },
		})
			.limit(howMany)
			.lean()
			.exec();
		await addImgsToSeries(result);
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
		console.log(episode_titles);
		console.log(episode_desc);
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
		console.log();
		const URL =
			"http://www.omdbapi.com/?t=" +
			series_title.replace(" ", "+") +
			"&y=" +
			series_year_of_production +
			"&apikey=" +
			process.env.OMDB_API_KEY;
		console.log(URL);

		var apiData = {};
		try {
			const omdbRes = await fetch(URL);
			const omdbData = await omdbRes.json();
			if (omdbData.Response == "False") throw "No data";
			apiData.Rated = omdbData.Rated;
			apiData.imdbRating = omdbData.imdbRating;
		} catch (error) {
			console.error(error);
			apiData.Rated = null;
			apiData.imdbRating = null;
		}

		const newSeries = new Series({
			series_title: series_title,
			episodes: videos_ids,
			genres: series_genres,
			description: series_desc,
			year_of_production: series_year_of_production,
			series_picture_path: files_series_thumbnail[0].path,
			staff: series_staff,
			age_rating: apiData.Rated,
			imdb_score: apiData.imdbRating,
		});
		await newSeries.save();
		await genreCreateIfDontExists(series_genres);
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

module.exports = {
	getSeries,
	getSeriesByGenre,
	upload_Series,
	deleteSeries,
	getSeriesDetails,
	getByEpisodeCount,
	getByOneEpisode,
	getSeriesSortedBy,
};
