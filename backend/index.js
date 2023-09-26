require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const users = require("./routes/users");
const auth = require("./routes/auth");
const jwt_auth = require("./middleware/jwt_auth");
const subscriptions = require("./routes/subscriptions");
const series = require("./routes/series");

app.use(express.json());
app.use(cors());

const connection = require("./db");
connection();

app.use("/api/users", users);
app.use("/api/auth", auth);
app.use("/api/series", series);
app.use("/api/subscriptions", jwt_auth);
app.use("/api/subscriptions", subscriptions);

app.listen(process.env.PORT, () => {
	console.log(`Nasłuchiwanie na porcie ${process.env.PORT}`);
});
