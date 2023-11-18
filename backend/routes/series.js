const router = require("express").Router();
const jwt_auth = require("../middleware/jwt_auth");
const video_upload = require("../middleware/video_upload");
const {
	getSeries,
	getSeriesByGenre,
	upload_Series,
} = require("../controllers/series_controller");

// router.use(jwt_auth);

router.get("/", (req, res) => {
	try {
		const result = getSeries(req.query.howMany);
		return res.status(200).send({
			message: "Data fetched succesfully",
			data: { series: result },
		});
	} catch (error) {
		console.error(error);
		return res.status(500).send({ message: error.message });
	}
});

router.get("/", (req, res) => {
	try {
		const result = getSeriesByGenre(req.query.howMany, req.query.genre);
		return res.status(200).send({
			message: "Data fetched successfully",
			data: { series: result },
		});
	} catch (error) {
		console.error(error);
		return res.status(500).send({ message: error.message });
	}
});

router.post(
	"/",
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
				// req.body.series_genres,
				req.body.series_desc,
				req.body.series_year_of_production,
				JSON.parse(req.body.series_staff),
				// req.body.series_staff,
				req.body.episode_titles,
				req.body.episode_desc,
				req.files.videos,
				req.files.series_thumbnail,
				req.files.video_thumbnails
			);
			return res.status(result.statusCode).send({ message: result.message });
		} catch (error) {
			console.error(error);
			return res.status(500).send({ message: error.message });
		}
	}
);

module.exports = router;
