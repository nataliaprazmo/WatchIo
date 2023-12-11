require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const users = require("./routes/users");
const auth = require("./routes/auth");
const jwt_auth = require("./middleware/jwt_auth");
const subscriptions = require("./routes/subscriptions");
const series = require("./routes/series");
const subscriptionSharing = require("./routes/subscriptionSharing");
const watchlists = require("./routes/watchlists");
const genres = require("./routes/genres");
const videos = require("./routes/videos");
const tests = require("./routes/test_sync");
// const WebSocket = require("ws");

const server = require("http").createServer(app);
// const wss = new WebSocket.Server({ server, server });

// wss.on("connection", function connection(ws) {
// 	console.log("A new client Connected!");
// 	ws.send("Welcome New Client!");

// 	ws.on("message", function incoming(message) {
// 		console.log("received: %s", message);

// 		wss.clients.forEach(function each(client) {
// 			if (client !== ws && client.readyState === WebSocket.OPEN) {
// 				client.send("BLAY");
// 			}
// 		});
// 	});
// });

const webS = require("./controllers/WEBSOCKETS");
webS.init(server);
app.get("/test/ws", (req, res) => {
	console.log(webS.clients);
	// console.log(JSON.stringify(webS.clients));
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
app.use("/tests", tests);

server.listen(process.env.PORT, () => {
	console.log(`Nasłuchiwanie na porcie ${process.env.PORT}`);
});
