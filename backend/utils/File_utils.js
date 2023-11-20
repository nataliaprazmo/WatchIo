const fs = require("fs");
const fsPromises = require("fs/promises");
const deleteFile = (path) => {
	if (path)
		fs.stat(path, (error, stat) => {
			if (error == null) {
				fs.unlink(path, (error) => {
					if (error) console.error(error);
				});
			} else {
				console.error(error);
			}
		});
};

const getImgToBase64 = async (path) => {
	try {
		if (!fs.existsSync(path)) return false;
		const file = await fsPromises.readFile(path);
		const imgBase64 = file.toString("base64");
		return imgBase64;
	} catch (error) {
		console.error(error);
		return false;
	}
};

module.exports = { deleteFile, getImgToBase64 };
