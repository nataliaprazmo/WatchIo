const router = require("express").Router();
const fs = require("fs");
const { Video, validate } = require("../models/Video");
const { getVideoDetails } = require("../controllers/videos_controller");
router.get("/:id", async (req, res) => {
	try {
		const vid = await Video.findOne({ _id: req.params.id });
		if (!vid) {
			return res.status(404).send({ message: "Video not found" });
		}
		const filePath = vid.path;
		if (!filePath) {
			return res.status(404).send("file not found");
		}

		const stat = fs.statSync(filePath);
		const fileSize = stat.size;
		const range = req.headers.range;

		if (range) {
			const parts = range.replace(/bytes=/, "").split("-");
			const start = parseInt(parts[0], 10);
			const CHUNK_SIZE = 10 ** 6; // 1MB
			const end = Math.min(start + CHUNK_SIZE, fileSize - 1);
			const chunksize = end - start + 1;
			const file = fs.createReadStream(filePath, { start, end });
			const head = {
				"Content-range": `bytes ${start}-${end}/${fileSize}`,
				"Accept-Ranges": "bytes",
				"Content-Length": chunksize,
				"Content-Type": "video/mp4",
			};
			res.writeHead(206, head);
			file.pipe(res);
		} else {
			const head = {
				"Content-Length": fileSize,
				"Content-Type": "video/mp4",
			};
			res.writeHead(200, head);
			fs.createReadStream(filePath).pipe(res);
		}
	} catch (err) {
		console.error(err);
		return res.status(500).send({ message: "Internal Server Error" });
	}
});

router.get("/:id/details", async (req, res) => {
	try {
		const result = await getVideoDetails(req.params.id);
		if (result.message == "success")
			return res.status(200).send({
				message: "success",
				data: {
					video_data: result.data.video_data,
					series_data: result.data.series_data,
				},
			});
		if (result.message == "notFound")
			return res.status(404).send({ message: "Data not found" });
		return res.status(500).send({ message: "Internal Server Error2" });
	} catch (err) {
		console.error(err);
		return res.status(500).send({ message: "Internal Server Error" });
	}
});

module.exports = router;
