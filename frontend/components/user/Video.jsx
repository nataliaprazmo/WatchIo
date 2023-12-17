"use client";

import React, { useRef, useState } from "react";
import PlayCircleOutlineRoundedIcon from "@mui/icons-material/PlayCircleOutlineRounded";
import VolumeMuteRoundedIcon from "@mui/icons-material/VolumeMuteRounded";
import VolumeDownRoundedIcon from "@mui/icons-material/VolumeDownRounded";
import VolumeUpRoundedIcon from "@mui/icons-material/VolumeUpRounded";
import VolumeOffRoundedIcon from "@mui/icons-material/VolumeOffRounded";
import Replay10RoundedIcon from "@mui/icons-material/Replay10Rounded";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import PauseRoundedIcon from "@mui/icons-material/PauseRounded";
import Forward10RoundedIcon from "@mui/icons-material/Forward10Rounded";
import LocalPlayOutlinedIcon from "@mui/icons-material/LocalPlayOutlined";
import FullscreenRoundedIcon from "@mui/icons-material/FullscreenRounded";
import FullscreenExitRoundedIcon from "@mui/icons-material/FullscreenExitRounded";

const Video = ({ episodeId }) => {
	const video = useRef(document.getElementById("video"));
	const controls = useRef(document.getElementById("video-controls"));
	const timeoutId = useRef(null);
	const timeProgress = useRef(document.getElementById("progress"));
	const time = useRef(null);
	const [paused, setPaused] = useState(true);
	const showControls = () => {
		controls.current.style.opacity = "1";
	};
	const hideControls = () => {
		controls.current.style.opacity = "0";
	};
	const handleMouseMove = () => {
		if (controls.current.style.opacity !== "1") {
			clearTimeout(timeoutId.current);
			showControls();
			timeoutId.current = setTimeout(hideControls, 3000);
		}
	};
	const play = () => {
		if (video.current.paused) video.current.play();
		else video.current.pause();
		if (controls.current.style.opacity !== "1") {
			clearTimeout(timeoutId.current);
			showControls();
			timeoutId.current = setTimeout(hideControls, 3000);
		}
	};
	const updateWidth = () => {
		timeProgress.current.style.width = `${
			(video.current.currentTime / video.current.duration) * 100
		}%`;
	};
	const formatTime = (time) => {
		const date = new Date(time * 1000); // Convert seconds to milliseconds
		const hours = date.getUTCHours();
		const minutes = date.getUTCMinutes();
		const seconds = date.getUTCSeconds();
		if (hours > 0) {
			return `${hours}:${minutes.toString().padStart(2, "0")}`;
		} else {
			return `${minutes}:${seconds.toString().padStart(2, "0")}`;
		}
	};
	const setTime = () => {
		time.current.innerText = `${formatTime(
			video.current.currentTime
		)}/${formatTime(video.current.duration)}`;
	};
	if (video.current !== null) {
		video.current.addEventListener("timeupdate", function () {
			updateWidth();
			setTime();
		});
	}
	return (
		<div
			className="relative w-full mt-6 h-96"
			onMouseMove={handleMouseMove}
		>
			<video
				id="video"
				ref={video}
				onPause={() => setPaused(true)}
				onPlay={() => setPaused(false)}
				className="w-full h-full relative"
			>
				<source
					src={`http://localhost:5000/api/videos/${episodeId}`}
					type="video/mp4"
				/>
			</video>
			{video.current && (
				<div
					id="video-controls"
					ref={controls}
					onBlur={hideControls}
					onClick={play}
					className="video-controls absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-between items-center bg-neutral-950 bg-opacity-0 hover:bg-opacity-20 transition-all duration-300"
				>
					<div className="h-10 opacity-0" />
					<div className="h-16 w-16 rounded-full bg-neutral-900 bg-opacity-40 flex items-center justify-center">
						{paused ? (
							<PlayArrowRoundedIcon
								sx={{ fontSize: "64px" }}
								className="opacity-80"
							/>
						) : (
							<PauseRoundedIcon
								sx={{ fontSize: "56px" }}
								className="opacity-80"
							/>
						)}
					</div>
					<div className="bg-opacity-40 bg-neutral-950 backdrop-blur-sm w-full h-fit px-4 py-2">
						<div className="w-full h-1 bg-neutral-600 rounded-lg mb-1.5">
							<div
								className="h-full bg-opacity-75 bg-purple-400 rounded-lg"
								id="progress"
								ref={timeProgress}
							/>
						</div>
						<div className="flex items-center justify-between opacity-80">
							<div className="flex items-center gap-3">
								<PlayCircleOutlineRoundedIcon
									sx={{ fontSize: "36px" }}
								/>
								<p ref={time} className="text-neutral-400 ">
									0:00/0:00
								</p>
							</div>
							<div className="flex items-center gap-2">
								<Replay10RoundedIcon
									sx={{ fontSize: "30px" }}
								/>
								<PlayArrowRoundedIcon
									sx={{ fontSize: "32px" }}
								/>
								<Forward10RoundedIcon
									sx={{ fontSize: "30px" }}
								/>
							</div>
							<div className="flex items-center gap-3">
								<LocalPlayOutlinedIcon
									sx={{ fontSize: "28px" }}
									className="mr-1"
								/>
								<VolumeUpRoundedIcon
									sx={{ fontSize: "30px" }}
								/>
								<FullscreenRoundedIcon
									sx={{ fontSize: "30px" }}
								/>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Video;
