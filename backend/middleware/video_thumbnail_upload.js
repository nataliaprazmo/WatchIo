const multer = require("multer");

// Set up storage for uploaded files
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, __dirname + "/../video_thumbnails/");
	},
	filename: function (req, file, cb) {
		console.log(file.originalname.slice(-4));
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
const video_thumbnail_upload = multer({ storage: storage });
module.exports = video_thumbnail_upload;
