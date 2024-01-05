"use client";
import React, { useState, useEffect } from "react";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import { Chip } from "@mui/material";
import Image from "next/image";

const SerieDetails = ({ id, epId, setCurrentVideoId }) => {
	const [seriesDetails, setSeriesDetails] = useState(null);
	useEffect(() => {
		const getSeriesDetails = async () => {
			try {
				const response = await fetch(
					"http://localhost:5000/api/series/" + id,
					{
						method: "GET",
					}
				);
				if (response.status === 200) {
					const res = await response.json();
					setSeriesDetails(res.data.seriesDetails);
				}
			} catch (error) {
				console.log(error);
			}
		};
		getSeriesDetails();
	}, []);
	return (
		<>
			{seriesDetails && (
				<>
					<div className="mt-12 flex flex-row flex-wrap items-start justify-between">
						<div className="flex flex-row flex-wrap items-start gap-8">
							<Image
								src={`data:image/jpg;base64, ${seriesDetails.picture}`}
								alt={seriesDetails.series_title}
								width={240}
								height={400}
								style={{
									objectFit: "cover",
									width: "240px",
									height: "400px",
								}}
								className="bg-cover rounded"
							/>
							<div className="flex flex-col w-96">
								<h1 className="font-semibold sm:text-32 text-2xl">
									{seriesDetails.series_title}
								</h1>
								<div className="flex flex-row items-center my-1">
									<StarOutlineRoundedIcon
										sx={{
											fontSize: "18px",
											path: { color: "#ff9900" },
										}}
									/>
									<p className="text-sm mr-1 text-neutral-400">
										{seriesDetails.imdb_score
											? seriesDetails.imdb_score
											: 5.0}
									</p>
									<p className="text-sm ml-1 text-neutral-400">
										IMDB
									</p>
									<p className="mx-6 text-sm text-neutral-400">
										{seriesDetails.year_of_production}
									</p>
									<p className="text-sm mr-6 text-neutral-400">
										liczba odcinków:{" "}
										{seriesDetails.episodes.length}
									</p>
									{seriesDetails.age_rating && (
										<p className="text-sm text-neutral-400">
											{seriesDetails.age_rating}
										</p>
									)}
								</div>
								<p className="line-clamp-6 text-justify sm:text-base text-sm">
									{seriesDetails.description}
								</p>
								<div className="flex flex-row items-center gap-2 mt-8">
									<p className="text-neutral-400 mr-2">
										Gatunki:
									</p>
									{seriesDetails.genres.map(
										(gatunek, index) => (
											<Chip
												key={index}
												label={gatunek}
												variant="outlined"
												sx={{
													borderColor: "#9126d9",
												}}
											/>
										)
									)}
								</div>
								<div className="flex flex-row items-center gap-2 mt-8">
									<p className="text-neutral-400 mr-2">
										Obsada:
									</p>
									{seriesDetails.staff.map((person, index) =>
										person.role === "aktor" ? (
											<Chip
												key={index}
												label={`${person.name} ${person.surname}`}
												variant="outlined"
												sx={{
													borderColor: "#9126d9",
												}}
											/>
										) : null
									)}
								</div>
							</div>
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default SerieDetails;
