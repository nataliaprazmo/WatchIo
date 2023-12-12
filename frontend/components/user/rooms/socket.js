export default function createWS(roomId, videoId) {
	return new WebSocket(
		`ws://localhost:5000/api/rooms/${roomId}?videoId=${videoId}`
	);
}
