"use client";

import React, { useState, useEffect } from "react";
import LocalMoviesOutlinedIcon from "@mui/icons-material/LocalMoviesOutlined";
import MovieCreationOutlinedIcon from "@mui/icons-material/MovieCreationOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import FormatListBulletedRoundedIcon from "@mui/icons-material/FormatListBulletedRounded";

const Analytics = () => {
	const [stats, setStats] = useState(null);
	const getStats = async () => {
		const response = await fetch("http://localhost:5000/api/statistics", {
			method: "GET",
		});
		if (response.status === 200) {
			const res = await response.json();
			setStats(res.data.statistics);
		}
	};
	useEffect(() => {
		getStats();
	}, []);
	const Column = ({ icon, number, name, addClass }) => {
		return (
			<div className={`flex flex-col items-center ${addClass}`}>
				{icon}
				<p className="font-semibold">{number}</p>
				<p className="text-neutral-400">{name}</p>
			</div>
		);
	};
	return (
		<div className="w-full flex justify-between items-center my-12 px-4">
			{stats && (
				<>
					{stats.moviesCount && (
						<Column
							icon={
								<LocalMoviesOutlinedIcon
									className="text-6xl"
									sx={{ path: { color: "#9126d9" } }}
								/>
							}
							number={stats.moviesCount}
							name="filmy"
						/>
					)}
					{stats.usersCount && (
						<Column
							icon={
								<Person2OutlinedIcon
									className="text-7xl"
									sx={{ path: { color: "#9126d9" } }}
								/>
							}
							number={stats.usersCount}
							name="użytkownicy"
						/>
					)}
					{stats.genresCount && (
						<Column
							icon={
								<AutoAwesomeOutlinedIcon
									className="text-6xl"
									sx={{ path: { color: "#9126d9" } }}
								/>
							}
							number={stats.genresCount}
							name="gatunki"
							addClass="md:flex hidden"
						/>
					)}
					{stats.watchlistsCount && (
						<Column
							icon={
								<FormatListBulletedRoundedIcon
									className="text-6xl"
									sx={{ path: { color: "#9126d9" } }}
								/>
							}
							number={stats.watchlistsCount}
							name="listy do oglądania"
							addClass="lg:flex hidden"
						/>
					)}
					{stats.seriesCount && (
						<Column
							icon={
								<MovieCreationOutlinedIcon
									className="text-6xl"
									sx={{ path: { color: "#9126d9" } }}
								/>
							}
							number={stats.seriesCount}
							name="seriale"
						/>
					)}
				</>
			)}
		</div>
	);
};

export default Analytics;
