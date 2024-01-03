const { Subscription } = require("../models/Subscription");
const { User } = require("../models/User");

const joinSubscription = async (userId, shareCode) => {
	try {
		if (!shareCode || shareCode == "") return null;
		const subscription = await Subscription.findOne({
			sharing_code: shareCode,
		});

		if (!subscription) return null;

		if (
			subscription.sharing_users_limit <= subscription.shared_with.length ||
			subscription.owner == userId ||
			subscription.shared_with.includes(userId)
		) {
			return null;
		}

		subscription.shared_with.push(userId);
		await subscription.save();
		return true;
	} catch (error) {
		throw error;
	}
};

const generateShareCode = async (userId) => {
	try {
		const subscription = await Subscription.findOne({
			owner: userId,
		});
		if (!subscription) return null;

		const shareCode = Math.round(Math.random() * 1e9);
		subscription.sharing_code = shareCode;
		await subscription.save();
		return shareCode;
	} catch (error) {
		throw error;
	}
};

const deactivateShareCode = async (userId) => {
	try {
		const subscription = await Subscription.findOne({
			owner: userId,
		});
		if (!subscription) return false;
		subscription.sharing_code = "";
		await subscription.save();
		return true;
	} catch (error) {
		throw error;
	}
};

const getSharedUsers = async (userId) => {
	try {
		const subscription = await Subscription.findOne({
			owner: userId,
		})
			.populate("shared_with")
			.exec();
		if (!subscription) return false;
		var users = [];
		subscription.shared_with.forEach((element) => {
			users.push(element.credentials.email);
		});
		return users;
	} catch (error) {
		throw error;
	}
};

const deleteSharedUser = async (userId, emailToDelete) => {
	try {
		const subscription = await Subscription.findOne({
			owner: userId,
		});
		if (!subscription) return false;

		const userToDelete = await User.findOne({
			"credentials.email": emailToDelete,
		});
		if (!userToDelete) return false;

		await Subscription.updateOne(
			{ owner: userId },
			{ $pull: { shared_with: userToDelete._id } }
		);

		return true;
	} catch (error) {
		throw error;
	}
};

module.exports = {
	joinSubscription,
	generateShareCode,
	deactivateShareCode,
	getSharedUsers,
	deleteSharedUser,
};
