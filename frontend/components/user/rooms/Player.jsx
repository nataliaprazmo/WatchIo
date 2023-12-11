"use client";
import React, { useRef, useState } from "react";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import { ws } from "./socket";

const Player = ({ id }) => {
	const video = useRef(document.getElementById("video"));
	const [watching, setWatching] = useState(1);
	const HEARTBEAT_TIMEOUT = 1000 * 5 + 1000 * 1; // 5 + 1 second
	const HEARTBEAT_VALUE = 1;

	const sendEvent = (eventType) => (e) => {
		e.preventDefault();
		if (ws) {
			ws.send([eventType, e.target.currentTime]);
		}
	};
	const sendError = (e) => {
		e.preventDefault();
		console.log("error occured");
	};
	const sendDoubleClick = (e) => {
		e.preventDefault();
		console.log("doubleClicked");
	};
	const sendAux = (e) => {
		e.preventDefault();
		console.log("right mouse clicked");
	};

	// function closeConnection() {
	// 	if (!!ws) {
	// 		ws.close();
	// 	}
	// }

	function heartbeat() {
		if (!ws) {
			return;
		} else if (!!ws.pingTimeout) {
			clearTimeout(ws.pingTimeout);
		}

		ws.pingTimeout = setTimeout(() => {
			ws.close();

			// business logic for deciding whether or not to reconnect
		}, HEARTBEAT_TIMEOUT);

		const data = new Uint8Array(1);

		data[0] = HEARTBEAT_VALUE;

		ws.send(data);
	}

	ws.addEventListener("open", function (event) {
		console.log("Connected to WS Server");
	});
	ws.addEventListener("message", function (event) {
		console.log(typeof event.data);
		if ("string" != typeof event.data) {
			console.log(heartbeat);
			heartbeat();
			return;
		}
		let arrData = event.data.split(",");
		// console.log(arrData[1] - video.current.currentTime);

		if (arrData[0] === "play") {
			video.current.currentTime = parseFloat(arrData[1]);
			video.current.play();
		}
		if (arrData[0] === "pause") {
			video.current.pause();
		}
		if (arrData[0] === "seeked") {
			video.current.currentTime = parseFloat(arrData[1]);
			video.current.play();
		}
		if (arrData[0] === "watching") {
			setWatching(arrData[1]);
		}
	});

	return (
		<>
			<video
				key={id}
				id="video"
				controls
				onPlay={sendEvent("play")}
				onPause={sendEvent("pause")}
				onSeeked={sendEvent("seeked")}
				onDoubleClick={sendDoubleClick}
				onAuxClick={sendAux}
				onError={sendError}
				ref={video}
				className="w-full mt-6 h-96"
			>
				<source
					src={`http://localhost:5000/api/videos/${id}`}
					type="video/mp4"
				/>
			</video>
			{watching && (
				<div className="mt-3 flex items-center justify-end gap-2">
					{watching}{" "}
					<Person2OutlinedIcon
						sx={{ fontSize: "20px", path: { color: "#9126d9" } }}
					/>
				</div>
			)}
		</>
	);
};

export default Player;
