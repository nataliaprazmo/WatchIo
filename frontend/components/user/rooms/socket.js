export default function createWS(roomId, videoId) {
	console.log("ok");
	return new WebSocket(
		`ws://localhost:5000/api/rooms/${roomId}?videoId=${videoId}`
	);
}
