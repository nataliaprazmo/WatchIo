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

router.post("/", video_upload.array("files"), async (req, res) => {
	try {
		const result = await upload_Series(
			req.body.series_title,
			req.body.genre,
			req.body.title,
			req.body.desc,
			req.body.datalink,
			req.files
		);
		return res.status(result.statusCode).send({ message: result.message });
	} catch (error) {
		console.error(error);
		return res.status(500).send({ message: error.message });
	}
});

module.exports = router;
