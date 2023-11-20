const fs = require("fs");
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

module.exports = { deleteFile };
