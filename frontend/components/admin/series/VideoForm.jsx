import React from "react";
import Input from "./Input";
import MultilineInput from "./MultilineInput";
import FileInput from "./FileInput";
import { Button } from "@/components/buttons";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import { Divider, IconButton } from "@mui/material";

const VideoForm = ({ episode, videosCount, setVideosCount, handleChange }) => {
	const handleIncrementVideoCount = () => {
		setVideosCount((prevCount) => prevCount + 1);
	};

	const RenderVideoForm = () => {
		const forms = [];
		for (let i = 0; i < videosCount; i++) {
			forms.push(
				<div className="pb-8 flex flex-col">
					<p className="mt-10 pb-6 font-bold text-primary-orange">
						Odcinek {i + 1}
						<Divider sx={{ backgroundColor: "#ff9900" }} />
					</p>
					<div className="flex flex-wrap items-center gap-x-10 gap-y-4">
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
					</div>
					<div className="pt-8 flex flex-col gap-8">
						<FileInput
							label="Miniaturka"
							id="episode_picture"
							name="episode_picture"
						/>
						<FileInput label="Wideo" id="video" name="video" />
					</div>
				</div>
			);
		}
		return forms;
	};

	return (
		<>
			{RenderVideoForm()}
			<div className="flex gap-4 items-center pt-10 w-full justify-end">
				<p>Dodaj kolejny odcinek</p>
				<IconButton onClick={handleIncrementVideoCount}>
					<AddBoxOutlinedIcon
						className="text-6xl"
						sx={{
							"&:hover": { path: { color: "#ff9900" } },
						}}
					/>
				</IconButton>
			</div>
		</>
	);
};

export default VideoForm;
