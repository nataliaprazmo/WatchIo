import React from "react";
import Input from "./Input";
import MultilineInput from "./MultilineInput";
import { Chip, Divider } from "@mui/material";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
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
		handleAddVideoThumbnail,
		handleAddVideo,
	} = useSeries();
	const handleChange = ({ currentTarget: input }) => {
		const { name, value } = input;
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
		handleAddVideoThumbnail();
		handleAddVideo();
		setEpisode({
			title: "",
			desc: "",
			thumb: null,
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
				<div className="flex flex-wrap items-center gap-4 mt-8">
					<FileUploader
						fileType="img"
						file={episode.thumb}
						setFile={(file) =>
							setEpisode((ep) => ({ ...ep, thumb: file }))
						}
						label="Miniaturka odcinka"
					/>
					<FileUploader
						fileType="video"
						file={episode.video}
						setFile={(file) =>
							setEpisode((ep) => ({ ...ep, video: file }))
						}
						label="Wideo odcinka"
					/>
				</div>
			</div>
			<button
				onClick={handleAddEpisode}
				className="flex justify-center w-48 mt-2 md:pb-2 pb-[6px] md:pt-[7px] pt-[5px] border-2 border-secondary-violet rounded-lg h-fit font-medium transition duration-300 2xl:text-base xl:text-sm text-xs hover:bg-transparent bg-secondary-violet text-black hover:text-white"
			>
				Dodaj odcinek
			</button>
		</div>
	);
};

export default VideoForm;
