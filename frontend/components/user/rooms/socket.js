const roomId = Date.now() + "" + Math.round(Math.random() * 1e9);
console.log(roomId);
const ws = new WebSocket("ws://localhost:5000/api/rooms/" + 1);
export default ws;
