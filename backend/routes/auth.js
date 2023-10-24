const router = require("express").Router();
const { login } = require("../controllers/auth_controller");

router.post("/login", async (req, res) => {
	try {
		const result = await login(req.body.email, req.body.password);
		const data = result?.role
			? { message: result.message, role: result.role }
			: { message: result.message };
		return res.status(result.statusCode).send(data);
	} catch (error) {
		console.error(error);
		res.status(500).send({ message: "Internal Server Error" });
	}
});

module.exports = router;
