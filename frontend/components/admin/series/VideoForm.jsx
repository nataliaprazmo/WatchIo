import React from "react";
import Input from "./Input";
import MultilineInput from "./MultilineInput";
import FileInput from "./FileInput";

const VideoForm = ({ episode, videoCount, handleChange }) => {
	return (
		<div className="pt-2 pb-8 flex flex-wrap items-center gap-10">
			<Input
				id="title"
				name="title"
				label="Nazwa odcinka"
				type="text"
				value={episode.title}
				handleChange={handleChange}
			/>
			<MultilineInput
				id="desc"
				name="desc"
				label="Opis odcinka"
				type="text"
				value={episode.desc}
				handleChange={handleChange}
			/>
			<FileInput
				label="Miniaturka"
				id="episode_picture"
				name="episode_picture"
			/>
			<FileInput label="Wideo" id="video" name="video" />
		</div>
	);
};

export default VideoForm;
