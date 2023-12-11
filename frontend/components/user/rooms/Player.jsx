"use client";
import React, { useRef, useState } from "react";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import socket from "./socket";

const Player = ({ id }) => {
	const video = useRef(document.getElementById("video"));
	const [watching, setWatching] = useState(null);

	const sendEvent = (eventType) => (e) => {
		e.preventDefault();
		if (socket) {
			socket.send([eventType, e.target.currentTime]);
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

	socket.addEventListener("open", function (event) {
		console.log("Connected to WS Server");
	});
	socket.addEventListener("message", function (event) {
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
			if (
				arrData[1] - video.current.currentTime > 2 ||
				arrData[1] - video.current.currentTime < -2
			) {
				video.current.currentTime = parseFloat(arrData[1]);
				video.current.play();
			}
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
