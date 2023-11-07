const router = require("express").Router();
const { login } = require("../controllers/auth_controller");

router.post("/", async (req, res) => {
	try {
		const result = await login(req.body.email, req.body.password);
		const data = result?.role
			? {
					message: result.message,
					role: result.role,
					data: { token: result.data },
			  }
			: { message: result.message };
		return res.status(result.statusCode).send(data);
	} catch (error) {
		console.error(error);
		return res.status(500).send({ message: "Internal Server Error" });
	}
});

module.exports = router;
