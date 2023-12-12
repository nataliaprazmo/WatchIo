const stripe = require("../utils/Stripe");
const { Series } = require("../models/Series");
const { Genre } = require("../models/Genre");
const { User } = require("../models/User");
const { Watchlist } = require("../models/Watchlist");

const getAllStatistics = async () => {
	try {
		const moviesCount = await Series.countDocuments({
			episodes: { $size: 1 },
		});
		const usersCount = await User.estimatedDocumentCount();
		const seriesCount = await Series.countDocuments({
			$nor: [
				{ episodes: { $exists: false } },
				{ episodes: { $size: 0 } },
				{ episodes: { $size: 1 } },
			],
		});
		const genresCount = await Genre.estimatedDocumentCount();
		const watchlistsCount = await Watchlist.estimatedDocumentCount();
		return {
			moviesCount: moviesCount,
			usersCount: usersCount,
			seriesCount: seriesCount,
			genresCount: genresCount,
			watchlistsCount: watchlistsCount,
		};
	} catch (error) {
		throw error;
	}
};

module.exports = { getAllStatistics };
