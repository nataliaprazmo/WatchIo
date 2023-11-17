"use client";
import { createContext, useState, useContext } from "react";

const SeriesContext = createContext();

export function useSeries() {
	return useContext(SeriesContext);
}

export function SeriesProvider({ children }) {
	const [bodyData, setBodyData] = useState({
		series_title: "",
		series_desc: "",
		series_year_of_production: 2000,
		series_genres: [],
		series_staff: [],
		episode_titles: [],
		episode_desc: [],
	});
	const handleGenresChange = (event) => {
		const {
			target: { value },
		} = event;
		const genres = typeof value === "string" ? value.split(",") : value;
		setBodyData((prevBody) => ({
			...prevBody,
			series_genres: genres,
		}));
	};
	const handleAddGenre = (newGenre) => {
		setBodyData((prevBody) => ({
			...prevBody,
			series_genres: [...prevBody.series_genres, newGenre],
		}));
	};
	const [staffDetails, setStaffDetails] = useState({
		name: "",
		surname: "",
		role: "aktor",
	});
	const handleAddStaff = () => {
		if (staffDetails.name === "" || staffDetails.surname === "") return;
		const newStaffMember = { ...staffDetails };
		setBodyData((prevBody) => ({
			...prevBody,
			series_staff: [...prevBody.series_staff, newStaffMember],
		}));
		setStaffDetails({
			name: "",
			surname: "",
			role: "",
		});
	};
	const [episode, setEpisode] = useState({
		title: "",
		desc: "",
		thumb: null,
		video: null,
	});
	const [series_thumbnail, setSeries_thumbnail] = useState(null);
	const [video_thumbnails, setVideo_thumbnails] = useState([]);
	const [videos, setVideos] = useState([]);
	const handleAddVideoThumbnail = () => {
		console.log("adding video thumb");
		setVideo_thumbnails((prev) => [...prev, episode.thumb]);
	};
	const handleAddVideo = () => {
		console.log("adding video");
		setVideos((prev) => [...prev, episode.video]);
	};
	const [videosCount, setVideosCount] = useState(1);

	const handleAddSeries = () => {
		setBodyData({
			series_title: "",
			series_desc: "",
			series_year_of_production: 2000,
			series_genres: [],
			series_staff: [],
			episode_titles: [],
			episode_desc: [],
		});
		setSeries_thumbnail(null);
		setVideo_thumbnails([]);
		setVideos([]);
		setVideosCount(1);
	};

	return (
		<SeriesContext.Provider
			value={{
				bodyData,
				setBodyData,
				handleGenresChange,
				handleAddGenre,
				staffDetails,
				setStaffDetails,
				handleAddStaff,
				episode,
				setEpisode,
				series_thumbnail,
				setSeries_thumbnail,
				video_thumbnails,
				setVideo_thumbnails,
				videos,
				setVideos,
				handleAddVideoThumbnail,
				handleAddVideo,
				videosCount,
				setVideosCount,
				handleAddSeries,
			}}
		>
			{children}
		</SeriesContext.Provider>
	);
}
