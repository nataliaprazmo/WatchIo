const WebSocket = require("ws");

const init = (server) => {
	const wss = new WebSocket.Server({ server, server });

	wss.on("connection", function connection(ws) {
		console.log("connected");
		ws.send("Welcome New Client!");

		ws.on("message", function incoming(message) {
			console.log("received: %s", message);
			wss.clients.forEach(function each(client) {
				if (client !== ws && client.readyState === WebSocket.OPEN) {
					client.send(message, { binary: false });
				}
			});
		});
	});
};

module.exports = { init };
