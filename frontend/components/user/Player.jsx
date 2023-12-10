import React from "react";

const Player = ({ episodeId }) => {
	const sendPlay = (e) => {
		e.preventDefault();
		console.log("started video");
		console.log(e.target.currentTime);
	};
	const sendPause = (e) => {
		e.preventDefault();
		console.log("paused video");
		console.log(e.target.currentTime);
	};
	const sendTimeUpdate = (e) => {
		e.preventDefault();
		console.log("time updated");
		console.log(e.target.currentTime);
	};
	const sendSeeked = (e) => {
		e.preventDefault();
		console.log("seeked video - clicked random time");
		console.log(e.target.currentTime);
	};
	const sendVolumeChange = (e) => {
		e.preventDefault();
		console.log("volume changed");
		console.log(e.target.volume);
	};
	const sendDoubleClick = (e) => {
		e.preventDefault();
		console.log("doubleClicked");
	};
	const sendError = (e) => {
		e.preventDefault();
		console.log("error occured");
	};
	const sendAux = (e) => {
		e.preventDefault();
		console.log("right mouse clicked");
	};
	return (
		<video
			key={episodeId}
			controls
			onPlay={sendPlay}
			onPause={sendPause}
			// onTimeUpdate={sendTimeUpdate} //wysyła każdą zmianę czasu - play, pause itd. loop nieskończony
			onSeeked={sendSeeked}
			onVolumeChange={sendVolumeChange}
			onDoubleClick={sendDoubleClick}
			onAuxClick={sendAux}
			onError={sendError}
			className="w-full mt-6 h-96"
		>
			<source
				src={`http://localhost:5000/api/videos/${episodeId}`}
				type="video/mp4"
			/>
		</video>
	);
};

export default Player;
