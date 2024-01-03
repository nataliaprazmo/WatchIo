const multer = require("multer");

// Set up storage for uploaded files
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		if (file.fieldname == "videos") cb(null, __dirname + "/../videos/");
		if (file.fieldname == "series_thumbnail")
			cb(null, __dirname + "/../series_thumbnails/");
		// if (file.fieldname == "video_thumbnails")
		// 	cb(null, __dirname + "/../video_thumbnails/");
	},
	filename: function (req, file, cb) {
		const uniqueNum = Date.now() + "" + Math.round(Math.random() * 1e9);
		cb(
			null,
			file.originalname.slice(0, -4) +
				"_" +
				uniqueNum +
				file.originalname.slice(-4)
		);
	},
});

// Create the multer instance
const video_upload = multer({ storage: storage });
module.exports = video_upload;
