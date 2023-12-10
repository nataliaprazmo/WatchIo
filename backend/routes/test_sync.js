const router = require("express").Router();
const fs = require("fs");
const { Video, validate } = require("../models/Video");

router.get("/:id", async (req, res) => {
	try {
		// const vid = await Video.findOne({ fileName: req.params.filename });
		const vid = await Video.findOne({ _id: req.params.id });
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
			const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;

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

module.exports = router;
