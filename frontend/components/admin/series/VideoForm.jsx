import React from "react";
import Input from "./Input";
import MultilineInput from "./MultilineInput";
import { Button, Chip, Divider } from "@mui/material";
import { useSeries } from "./SeriesContext";
import FileUploader from "./FileUploader";

const VideoForm = () => {
	const {
		videosCount,
		bodyData,
		episode,
		setEpisode,
		setVideosCount,
		setBodyData,
		// handleAddVideoThumbnail,
		handleAddVideo,
		errors,
		setErrors,
	} = useSeries();
	const handleChange = ({ currentTarget: input }) => {
		const { name, value } = input;
		if (!value || value === "") {
			setErrors((prev) => ({
				...prev,
				[name]: "Uzupełnij pole",
			}));
		} else {
			setErrors((prev) => ({
				...prev,
				[name]: null,
			}));
		}
		setEpisode((ep) => ({ ...ep, [name]: value }));
	};
	const areEpisodesEmpty =
		bodyData.episode_titles && bodyData.episode_titles.length === 0;
	const handleAddEpisode = () => {
		if (
			episode.title === "" ||
			episode.desc === "" ||
			episode.thumb === null ||
			episode.video === null
		)
			return;
		setBodyData((prevData) => ({
			...prevData,
			episode_titles: [...prevData.episode_titles, episode.title],
			episode_desc: [...prevData.episode_desc, episode.desc],
		}));
		// handleAddVideoThumbnail();
		handleAddVideo();
		setEpisode({
			title: "",
			desc: "",
			// thumb: null,
			video: null,
		});
		setVideosCount((count) => count + 1);
	};
	return (
		<div>
			<div className="py-4">
				{areEpisodesEmpty ? (
					<p>Dodaj odcinek poniżej:</p>
				) : (
					<>
						<p className="pb-4">Dodane odcinki:</p>
						<div className="flex flex-wrap w-full gap-4">
							{bodyData.episode_titles.map((title, index) => {
								return (
									<Chip
										key={index}
										label={`${index + 1}. ${title}`}
										variant="outlined"
										sx={{ borderColor: "#9126d9" }}
									/>
								);
							})}
						</div>
					</>
				)}
			</div>
			<div className="pb-8 flex flex-col">
				<div className="mb-6">
					<p className="mt-10 font-bold text-primary-orange">
						Odcinek {videosCount}
					</p>
					<Divider sx={{ backgroundColor: "#ff9900" }} />
				</div>
				<div className="flex flex-wrap items-center gap-x-10 gap-y-4">
					<Input
						id="title"
						name="title"
						label="Nazwa odcinka"
						type="text"
						value={episode.title}
						handleChange={handleChange}
						error={errors.title}
					/>
					<MultilineInput
						id="desc"
						name="desc"
						label="Opis odcinka"
						type="text"
						value={episode.desc}
						handleChange={handleChange}
						error={errors.desc}
					/>
				</div>
				<div className="flex flex-wrap items-center gap-4 mt-8">
					{/* <FileUploader
						fileType="img"
						file={episode.thumb}
						setFile={(file) =>
							setEpisode((ep) => ({ ...ep, thumb: file }))
						}
						label="Miniaturka odcinka"
						errorName="thumb"
						error={errors.thumb}
					/> */}
					<FileUploader
						fileType="video"
						file={episode.video}
						setFile={(file) =>
							setEpisode((ep) => ({ ...ep, video: file }))
						}
						label="Wideo odcinka"
						errorName="video"
						error={errors.video}
					/>
				</div>
			</div>
			<Button
				onClick={handleAddEpisode}
				sx={{
					backgroundColor: "#9126d9",
					color: "#1a1a1a",
					fontWeight: "600",
					"&:hover": {
						backgroundColor: "#9126d9",
						color: "#fafaf5",
					},
				}}
				className="flex justify-center w-full mt-2 md:pb-2 pb-[6px] md:pt-[7px] pt-[5px] border-2 border-secondary-violet rounded-lg h-fit transition duration-300 2xl:text-base xl:text-sm text-xs hover:bg-transparent bg-secondary-violet text-black hover:text-white"
			>
				Dodaj odcinek
			</Button>
		</div>
	);
};

export default VideoForm;
