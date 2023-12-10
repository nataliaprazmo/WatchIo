const WebSocket = require("ws");

const clients = {
	rooms: {},
};

const HEARTBEAT_INTERVAL = 1000 * 5; // 5 seconds
const HEARTBEAT_VALUE = 1;

const sendRoomId = (ws, roomId) => {
	if (!roomId) {
		ws.on("close", () => {
			console.log("closed");
		});
		return;
	}
	const rooms = clients.rooms;
	if (!rooms[roomId]) {
		rooms[roomId] = [ws];
	} else {
		rooms[roomId].push(ws);
	}

	ws.on("message", function incoming(message) {
		if (message.length === 1 && message[0] === HEARTBEAT_VALUE) {
			ws.isAlive = true;
			return;
		}

		console.log("received: %s", message);
		rooms[roomId].forEach(function each(client) {
			if (client !== ws && client.readyState === WebSocket.OPEN) {
				client.send(message, { binary: false });
			}
		});
	});

	ws.on("close", () => {
		console.log("connection closed");
		const idr = rooms[roomId].indexOf(ws);
		if (idr >= 0) {
			rooms[roomId].splice(idr, 1);
			if (rooms[roomId].length === 0) {
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
		const idr = req.url.indexOf("?");
		const uri = idr >= 0 ? req.url.slice(0, idr) : req.url;
		const paths = uri.split("/").filter((p) => !!p);
		switch (paths[0]) {
			case "rooms":
				sendRoomId(ws, paths[1]);
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
