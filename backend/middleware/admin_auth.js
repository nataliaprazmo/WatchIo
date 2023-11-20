const { User } = require("../models/User");
const admin_auth = async (req, res, next) => {
	const user = await User.findById(req.user._id);
	console.log(user);
	if (!user) return res.status(401).send({ message: "Unauthorized!" });
	if (user.is_admin != true)
		return res.status(401).send({ message: "Unauthorized!" });
	return next();
};

module.exports = admin_auth;
