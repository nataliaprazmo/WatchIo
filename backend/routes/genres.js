const router = require("express").Router();
const {
	getAllGenres,
	addGenre,
	genreCreateIfDontExists_testMultiple,
} = require("../controllers/genres_controller");

router.get("/", async (req, res) => {
	try {
		const genres = await getAllGenres();
		return res.status(200).send({
			message: "Genres fetched successfully",
			data: { genres: genres },
		});
	} catch (error) {
		console.error(error);
		return res.status(500).send({ message: "Internal Server Error" });
	}
});

router.post("/", async (req, res) => {
	try {
		const result = await addGenre(req.body.genre);
		if (!result)
			return res.status(400).send({ message: "Genre already exsits" });
		return res.status(200).send({ message: "Genre added successfully" });
	} catch (error) {
		console.error(error);
		return res.status(500).send({ message: "Internal Server Error" });
	}
});

router.post("/testmultiple", async (req, res) => {
	try {
		const result = await genreCreateIfDontExists_testMultiple(
			req.body.genre
		);
		if (!result)
			return res.status(400).send({ message: "Genre already exsits" });
		return res.status(200).send({ message: "Genre added successfully" });
	} catch (error) {
		console.error(error);
		return res.status(500).send({ message: "Internal Server Error" });
	}
});

module.exports = router;
