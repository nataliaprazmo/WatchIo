const multer = require("multer");

// Set up storage for uploaded files
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, __dirname + "/../videos/");
	},
	filename: function (req, file, cb) {
		console.log(file);
		const uniqueNum = Date.now() + "" + Math.round(Math.random() * 1e9);
		cb(null, file.originalname.slice(0, -4) + "_" + uniqueNum + ".mp4");
	},
});

// Create the multer instance
const video_upload = multer({ storage: storage });
module.exports = video_upload;
