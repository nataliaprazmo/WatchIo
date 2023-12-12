const router = require("express").Router();
const { getAllStatistics } = require("../controllers/statistics_controller");

router.get("/", async (req, res) => {
	try {
		const statistics = await getAllStatistics();
		if (!statistics) {
			return res.status(404).send({ message: "Statistics not found" });
		}
		return res.status(200).send({
			message: "Statistic fetched successfully",
			data: { statistics },
		});
	} catch (error) {
		console.error(error);
		return res.status(500).send({ message: "Internal Server Error" });
	}
});

module.exports = router;
