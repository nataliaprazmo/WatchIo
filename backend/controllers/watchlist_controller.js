const { Watchlist } = require("../models/Watchlist");
const { Series } = require("../models/Series");
const { getImgToBase64 } = require("../utils/File_utils");

const getWatchlist = async (watchlistId) => {
	try {
		const watchlist = await Watchlist.findOne({ _id: watchlistId })
			.populate("owner")
			.populate("series")
			.lean()
			.exec();
		if (!watchlist) return false;
		for (let i = 0; i < watchlist.series.length; i++) {
			watchlist.series[i].picture = await getImgToBase64(
				watchlist.series[i].series_picture_path
			);
			delete watchlist.series[i].series_picture_path;
		}
		return watchlist;
	} catch (error) {
		throw error;
	}
};

const getCurrentUserWatchlist = async (userId) => {
	try {
		var watchlist = await Watchlist.findOne({ owner: userId })
			.populate("owner")
			.populate("series")
			.lean()
			.exec();
		if (!watchlist) return false;

		for (let i = 0; i < watchlist.series.length; i++) {
			watchlist.series[i].picture = await getImgToBase64(
				watchlist.series[i].series_picture_path
			);
			delete watchlist.series[i].series_picture_path;
		}

		return watchlist;
	} catch (error) {
		throw error;
	}
};

const addSeriesToWatchlist = async (userId, seriesId) => {
	try {
		const watchlist = await Watchlist.findOne({ owner: userId });
		const series = await Series.findOne({ _id: seriesId });
		if (!series) return { status: 404, message: "Series not found" };
		if (!watchlist) return { status: 404, message: "Watchlist not found" };
		if (watchlist.series.includes(seriesId))
			return { status: 403, message: "Series already on the list" };
		watchlist.series.push(seriesId);
		await watchlist.save();
		return { status: 200, message: "Series added" };
	} catch (error) {
		throw error;
	}
};

const deleteSeriesFromWatchlist = async (userId, seriesId) => {
	try {
		const watchlist = await Watchlist.findOne({ owner: userId });
		if (!watchlist) return { status: 404, message: "Watchlist not found" };
		if (!watchlist.series.includes(seriesId))
			return { status: 403, message: "Series not on the list" };

		await Watchlist.updateOne(
			{ owner: userId },
			{ $pull: { series: seriesId } }
		);
		return { status: 200, message: "Series deleted from the list" };
	} catch (error) {
		throw error;
	}
};

module.exports = {
	getWatchlist,
	getCurrentUserWatchlist,
	addSeriesToWatchlist,
	deleteSeriesFromWatchlist,
};
