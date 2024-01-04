"use client";
import { createContext, useState, useContext, useEffect } from "react";

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
	const [errors, setErrors] = useState({
		series_title: null,
		series_year_of_production: null,
		series_desc: null,
		series_thumbnail: null,
		genre: null,
		name: null,
		surname: null,
		series_staff: null,
		title: null,
		desc: null,
		thumb: null,
		video: null,
		videosCount: null,
	});
	useEffect(() => {
		console.log(errors);
	}, [errors, setErrors]);
	const [addStatus, setAddStatus] = useState("Nie udało się dodać serii");

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
		if (staffDetails.name === "" || staffDetails.surname === "") {
			return;
		}
		const newStaffMember = { ...staffDetails };
		setBodyData((prevBody) => ({
			...prevBody,
			series_staff: [...prevBody.series_staff, newStaffMember],
		}));
		setStaffDetails({
			name: "",
			surname: "",
			role: "aktor",
		});
		setErrors((prev) => ({
			...prev,
			series_staff: null,
		}));
	};
	const [episode, setEpisode] = useState({
		title: "",
		desc: "",
		video: null,
	});
	const [series_thumbnail, setSeries_thumbnail] = useState(null);
	const [videos, setVideos] = useState([]);
	const handleAddVideo = () => {
		setVideos((prev) => [...prev, episode.video]);
	};
	const [videosCount, setVideosCount] = useState(1);
	const handleAddSeries = async (e) => {
		e.preventDefault();
		const token = localStorage.getItem("token");
		if (token) {
			try {
				const formData = new FormData();
				Object.entries(bodyData).forEach(([key, value]) => {
					if (Array.isArray(value)) {
						formData.append(key, JSON.stringify(value));
					} else {
						formData.append(key, value);
					}
				});
				videos.forEach((video, index) => {
					formData.append("videos", video);
				});
				formData.append("series_thumbnail", series_thumbnail);
				const response = await fetch(
					"http://localhost:5000/api/series/",
					{
						method: "POST",
						headers: { "x-access-token": token },
						body: formData,
					}
				);
				if (response.status == 200) {
					setAddStatus("Udało się dodać serię");
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
					setVideos([]);
					setVideosCount(1);
				} else {
					setAddStatus("Nie udało się dodać serii");
				}
			} catch (error) {
				if (
					error.response &&
					error.response.status >= 400 &&
					error.response.status <= 500
				) {
					setAddStatus("Nie udało się dodać serii");
					console.error(error);
				}
			}
		}
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
				videos,
				setVideos,
				handleAddVideo,
				videosCount,
				setVideosCount,
				handleAddSeries,
				errors,
				setErrors,
				addStatus,
				setAddStatus,
			}}
		>
			{children}
		</SeriesContext.Provider>
	);
}
