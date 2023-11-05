"use client";

import React, { useState } from "react";
import VideoForm from "./VideoForm";
import StaffForm from "./StaffForm";
import SeriesForm from "./SeriesForm";

const Form = ({ part }) => {
	const [episode, setEpisode] = useState({
		title: "",
		desc: "",
		filename: "",
		thumbnail_filename: "",
		data_link: "",
		path: "",
	});
	const [staffDetails, setStaffDetails] = useState({
		name: "",
		surname: "",
		role: "",
	});
	const [genres, setGenres] = useState([]);
	const [series, setSeries] = useState({
		series_title: "",
		description: "",
		series_picture_filename: "",
		genre: [],
		staff: [],
		episodes: [],
	});
	const [videosCount, setVideosCount] = useState(1);
	const handleChange = ({ currentTarget: input }) => {
		const { name, value } = input;
		if (part === 0) {
			setSeries((prevSeries) => ({
				...prevSeries,
				[name]: value,
			}));
		} else if (part === 1) {
			setStaffDetails((prevStaffDetails) => ({
				...prevStaffDetails,
				[name]: value,
			}));
		} else {
			setEpisode((prevEpisode) => ({
				...prevEpisode,
				[name]: value,
			}));
		}
	};
	const handleGenresChange = (event) => {
		const {
			target: { value },
		} = event;
		setGenres(typeof value === "string" ? value.split(",") : value);
	};
	const handleAddStaff = () => {
		const newStaffMember = { ...staffDetails };
		setSeries((prevSeries) => ({
			...prevSeries,
			staff: [...prevSeries.staff, newStaffMember],
		}));
		setStaffDetails({
			name: "",
			surname: "",
			role: "",
		});
	};
	const handleAddEpisode = () => {
		const newEpisode = { ...episode };
		setSeries((prevSeries) => ({
			...prevSeries,
			episodes: [...prevSeries.episodes, newEpisode],
		}));
		setEpisode({
			title: "",
			desc: "",
			filename: "",
			thumbnail_filename: "",
			data_link: "",
			path: "",
		});
	};
	return (
		<form
			action="http://localhost:5000/api/series"
			method="POST"
			enctype="multipart/form-data"
			className="flex flex-col justify-between items-start w-full"
		>
			{part === 0 ? (
				<SeriesForm
					series={series}
					handleChange={handleChange}
					genres={genres}
					setGenres={setGenres}
					handleGenresChange={handleGenresChange}
				/>
			) : part === 1 ? (
				<StaffForm
					staffDetails={staffDetails}
					handleChange={handleChange}
					handleAddStaff={handleAddStaff}
				/>
			) : (
				<VideoForm
					episode={episode}
					videoCount={videosCount}
					handleChange={handleChange}
				/>
			)}
		</form>
	);
};

export default Form;
