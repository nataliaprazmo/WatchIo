const WebSocket = require("ws");
const url = require("url");
const { parse } = require("path");
const { binary } = require("joi");

const clients = {
	rooms: {},
};

const HEARTBEAT_INTERVAL = 1000 * 5; // 5 seconds
const HEARTBEAT_VALUE = 1;

const updateWatchingCount = (sockets)=>{
	sockets.forEach(function each(client) {
		if (client.readyState === WebSocket.OPEN) {
			client.send("watching," + rooms[roomId].sockets.length),
				{
					binary: false,
				};
		}
	});
}

const sendRoomId = (ws, roomId, videoId) => {
	if (!roomId) {
		ws.on("close", () => {
			console.log("closed");
			updateWatchingCount(clients.rooms[roomId].sockets);
		});
		return;
	}
	const rooms = clients.rooms;
	if (!rooms[roomId] && videoId != undefined) {
		rooms[roomId] = { sockets: [ws], videoId: videoId };
		ws.send("videoId," + rooms[roomId].videoId),
			{
				binary: false,
			};
		updateWatchingCount(rooms[roomId].sockets)
	} else {
		rooms[roomId].sockets.push(ws);
		ws.send("videoId," + rooms[roomId].videoId),
			{
				binary: false,
			};
		updateWatchingCount(rooms[roomId].sockets)
	}

	ws.on("message", function incoming(message) {
		if (message.length === 1 && message[0] === HEARTBEAT_VALUE) {
			ws.isAlive = true;
			return;
		}
		rooms[roomId].sockets.forEach(function each(client) {
			if (client !== ws && client.readyState === WebSocket.OPEN) {
				client.send(message, { binary: false });
			}
		});
	});

	ws.on("close", () => {
		console.log("connection closed");
		ws.send("watching," + rooms[roomId].sockets.length),
			{
				binary: false,
			};
		const idr = rooms[roomId].sockets.indexOf(ws);
		if (idr >= 0) {
			rooms[roomId].sockets.splice(idr, 1);
			if (rooms[roomId].sockets.length === 0) {
				delete rooms[roomId];
			}
		}
	});
};

function ping(ws) {
	ws.send(HEARTBEAT_VALUE, { binary: true });
}

const init = (server) => {
	const wss = new WebSocket.Server({ server, server });

	wss.on("connection", function connection(ws, req) {
		ws.isAlive = true;
		console.log("connected");
		ws.send("Welcome New Client!");
		const parsedUrl = url.parse(req.url, true);
		const paths = parsedUrl.pathname.split("/").filter((p) => !!p);
		switch (paths[1]) {
			case "rooms":
				sendRoomId(ws, paths[2], parsedUrl.query?.videoId);
			default:
				break;
		}
	});

	const interval = setInterval(() => {
		wss.clients.forEach((client) => {
			if (!client.isAlive) {
				client.terminate();
				return;
			}

			client.isAlive = false;
			ping(client);
		});
	}, HEARTBEAT_INTERVAL);

	wss.on("close", () => {
		clearInterval(interval);
	});
};

module.exports = { init, clients };
