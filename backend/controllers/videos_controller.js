const { Video, validate } = require("../models/Video");
const { Series } = require("../models/Series");

const getVideoDetails = async (videoId) => {
	try {
		const series = await Series.findOne({ episodes: videoId }).select(
			"-series_picture_path -series_picture_path"
		);
		const video = await Video.findOne({ _id: videoId }).select(
			//"-fileName -thumbnail_path -path"
			"-fileName -path"
		);
		if (!series || !video) return { message: "notFound" };
		return {
			message: "success",
			data: {
				video_data: video,
				series_data: series,
			},
		};
	} catch (err) {
		throw err;
	}
};

module.exports = {
	getVideoDetails,
};
