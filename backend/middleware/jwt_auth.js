const jwt = require("jsonwebtoken");
function tokenVerification(req, res, next) {
	//pobranie tokenu z nagłówka:
	let token = req.headers["x-access-token"];
	if (!token) {
		return res.status(403).send({ message: "No token provided!" });
	}
	//jeśli przesłano token - weryfikacja jego poprawności:
	jwt.verify(token, process.env.JWTPRIVATEKEY, (err, decodeduser) => {
		if (err) {
			console.error("Unauthorized!");
			console.error(err);
			return res.status(401).send({ message: "Unauthorized!" });
		}
		console.log("Token poprawny, użytkownik: " + decodeduser.toString());
		req.user = decodeduser;
		console.log(req.user);
		next();
	});
}
module.exports = tokenVerification;
