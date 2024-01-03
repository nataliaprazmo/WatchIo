require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const server = require("http").createServer(app);

const users = require("./routes/users");
const auth = require("./routes/auth");
const subscriptions = require("./routes/subscriptions");
const series = require("./routes/series");
const subscriptionSharing = require("./routes/subscriptionSharing");
const watchlists = require("./routes/watchlists");
const genres = require("./routes/genres");
const videos = require("./routes/videos");
const statistics = require("./routes/statistics");

const webS = require("./controllers/websockets");

webS.init(server);
app.get("/test/ws", (req, res) => {
	console.log(webS.clients);
	res.send(webS);
});
app.use(express.json());
app.use(cors());

const connection = require("./db");
connection();

app.use("/api/users", users);
app.use("/api/auth", auth);
app.use("/api/series", series);
app.use("/api/genres", genres);
app.use("/api/subsciptions/sharing", subscriptionSharing);
app.use("/api/subscriptions", subscriptions);
app.use("/api/watchlists", watchlists);
app.use("/api/videos", videos);
app.use("/api/statistics", statistics);

server.listen(process.env.PORT, () => {
	console.log(`Nasłuchiwanie na porcie ${process.env.PORT}`);
});
