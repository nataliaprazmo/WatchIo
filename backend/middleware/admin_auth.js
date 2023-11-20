const { User } = require("../models/User");
const admin_auth = (req, res, next) => {
	const user = User.findById(req.user._id);
	if (!user) return res.status(401).send({ message: "Unauthorized!" });
	if (user.is_admin != true)
		return res.status(401).send({ message: "Unauthorized!" });
	return next();
};

module.exports = admin_auth;
