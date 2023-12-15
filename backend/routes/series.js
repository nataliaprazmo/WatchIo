const router = require("express").Router();
const jwt_auth = require("../middleware/jwt_auth");
const admin_auth = require("../middleware/admin_auth");
const video_upload = require("../middleware/video_upload");
const {
	getSeries,
	getSeriesDetails,
	getSeriesByGenre,
	upload_Series,
	deleteSeries,
	getByEpisodeCount,
	getByOneEpisode,
	getSeriesSortedBy,
	search,
	getByStaff,
} = require("../controllers/series_controller");

// router.use(jwt_auth);

router.get("/", async (req, res) => {
	try {
		let result;
		console.log(req.query);
		if (req.query?.genres) {
			result = await getSeriesByGenre(req.query.genres);
		} else if (req.query?.search) {
			result = await search(req.query.search);
		} else if (req.query?.howMany && req.query?.sortedBy) {
			result = await getSeriesSortedBy(
				req.query.sortedBy,
				req.query.howMany
			);
		} else if (req.query?.howMany && req.query?.getByOneEpisode) {
			result = await getByOneEpisode(req.query.howMany);
		} else if (req.query?.howMany && req.query?.getByEpisodeCount) {
			result = await getByEpisodeCount(req.query.howMany);
		} else if (req.query?.name && req.query?.surname && req.query?.role) {
			result = await getByStaff(
				req.query.name,
				req.query.surname,
				req.query.role
			);
		} else result = await getSeries();
		return res.status(200).send({
			message: "Data fetched succesfully",
			data: { series: result },
		});
	} catch (error) {
		console.error(error);
		return res.status(500).send({ message: error.message });
	}
});

router.get("/:id", async (req, res) => {
	try {
		const result = await getSeriesDetails(req.params.id);
		// console.log(result);
		return res.status(200).send({
			message: "Data fetched succesfully",
			data: { seriesDetails: result },
		});
	} catch (error) {
		console.error(error);
		return res.status(500).send({ message: error.message });
	}
});

// router.get("/", async (req, res) => {
// 	try {
// 		const result = await getSeriesByGenre(
// 			req.query.howMany,
// 			req.query.genre
// 		);
// 		return res.status(200).send({
// 			message: "Data fetched successfully",
// 			data: { series: result },
// 		});
// 	} catch (error) {
// 		console.error(error);
// 		return res.status(500).send({ message: error.message });
// 	}
// });

router.delete("/:id", jwt_auth, admin_auth, async (req, res) => {
	try {
		const result = await deleteSeries(req.params.id);
		if (!result) return res.status(404).send({ message: "Not found" });
		return res.status(200).send({
			message: "success",
		});
	} catch (error) {
		console.error(error);
		return res.status(500).send({ message: error.message });
	}
});

router.post(
	"/",
	jwt_auth,
	admin_auth,
	video_upload.fields([
		{ name: "videos" },
		{ name: "series_thumbnail" },
		{ name: "video_thumbnails" },
	]),
	async (req, res) => {
		try {
			console.log(req.body);
			const result = await upload_Series(
				req.body.series_title,
				JSON.parse(req.body.series_genres),
				req.body.series_desc,
				req.body.series_year_of_production,
				JSON.parse(req.body.series_staff),
				JSON.parse(req.body.episode_titles),
				JSON.parse(req.body.episode_desc),
				req.files.videos,
				req.files.series_thumbnail,
				req.files.video_thumbnails
			);
			return res
				.status(result.statusCode)
				.send({ message: result.message });
		} catch (error) {
			console.error(error);
			return res.status(500).send({ message: error.message });
		}
	}
);

module.exports = router;
