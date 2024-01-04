import React, { useEffect } from "react";
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
	useEffect(() => {
		if (areEpisodesEmpty)
			setErrors((prev) => ({
				...prev,
				videosCount: "Dodaj minimum jeden odcinek",
			}));
		else
			setErrors((prev) => ({
				...prev,
				videosCount: null,
			}));
	}, [areEpisodesEmpty]);
	const handleAddEpisode = () => {
		if (episode.title === "") {
			setErrors((prev) => ({
				...prev,
				title: "Uzupełnij dane",
			}));
			return;
		} else if (episode.desc === "") {
			setErrors((prev) => ({
				...prev,
				desc: "Uzupełnij dane",
			}));
			return;
		} else if (episode.video === null) {
			setErrors((prev) => ({
				...prev,
				video: "Uzupełnij dane",
			}));
			return;
		} else {
			setErrors((prev) => ({
				...prev,
				title: null,
			}));
		}
		setBodyData((prevData) => ({
			...prevData,
			episode_titles: [...prevData.episode_titles, episode.title],
			episode_desc: [...prevData.episode_desc, episode.desc],
		}));
		handleAddVideo();
		setEpisode({
			title: "",
			desc: "",
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
