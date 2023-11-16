const router = require("express").Router();
const jwt_auth = require("../middleware/jwt_auth");
const {
	getWatchlist,
	addSeriesToWatchlist,
	deleteSeriesFromWatchlist,
	getCurrentUserWatchlist,
} = require("../controllers/watchlist_controller");

router.get("/:watchlistId", async (req, res) => {
	try {
		const watchlist = await getWatchlist(req.params.watchlistId);
		if (!watchlist)
			return res.status(404).send({ message: "Watchlist not found" });

		return res.status(200).send({
			message: "Watchlist data found",
			data: {
				owner: watchlist.owner.credentials.email,
				series: watchlist.series,
			},
		});
	} catch (error) {
		console.error(error);
		return res.status(500).send({ message: error.message });
	}
});

router.get("/", jwt_auth, async (req, res) => {
	try {
		const watchlist = await getCurrentUserWatchlist(req.user._id);
		if (!watchlist)
			return res.status(404).send({ message: "Watchlist not found" });

		return res.status(200).send({
			message: "Watchlist data found",
			data: {
				owner: watchlist.owner.credentials.email,
				series: watchlist.series,
			},
		});
	} catch (error) {
		console.error(error);
		return res.status(500).send({ message: error.message });
	}
});

router.post("/:seriesId", jwt_auth, async (req, res) => {
	try {
		const result = await addSeriesToWatchlist(
			req.user._id,
			req.params.seriesId
		);
		if (!result) return res.status(500);
		return res.status(result.status).send({ message: result.message });
	} catch (error) {
		console.error(error);
		return res.status(500).send({ message: error.message });
	}
});

router.delete("/:seriesId", jwt_auth, async (req, res) => {
	try {
		const result = await deleteSeriesFromWatchlist(
			req.user._id,
			req.params.seriesId
		);
		if (!result) return res.status(500);
		return res.status(result.status).send({ message: result.message });
	} catch (error) {
		console.error(error);
		return res.status(500).send({ message: error.message });
	}
});

module.exports = router;
