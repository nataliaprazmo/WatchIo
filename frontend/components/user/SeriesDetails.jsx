"use client";
import React, { useState, useEffect } from "react";
import SiteBreadcrumbs from "../SiteBreadcrumbs";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import { Chip, Button } from "@mui/material";
import Image from "next/image";

const SeriesDetails = ({ id }) => {
	const [seriesDetails, setSeriesDetails] = useState(null);
	const [episodeId, setEpisodeId] = useState(null);
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
					if (res.data.seriesDetails.episodes[0])
						setEpisodeId(res.data.seriesDetails.episodes[0]._id);
				}
			} catch (error) {
				console.log(error);
			}
		};
		getSeriesDetails();
	}, []);
	return (
		<div className="pt-24 pb-18 pl-24 pr-8">
			<SiteBreadcrumbs
				links={[
					{ to: "/user", label: "Strona główna" },
					{ to: `/user/series/${id}`, label: "Szczegóły serii" },
				]}
			/>
			{seriesDetails && (
				<>
					<div className="mt-8 flex flex-row flex-wrap items-start gap-8">
						<Image
							src={`data:image/jpg;base64, ${seriesDetails.picture}`}
							alt={seriesDetails.series_title}
							width={240}
							height={400}
							style={{ objectFit: "cover" }}
							className="bg-cover rounded"
						/>
						<div className="flex flex-col w-96">
							<h1 className="font-semibold text-32">
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
							<p className="line-clamp-4">
								{seriesDetails.description}
							</p>
							<div className="flex flex-row items-center gap-2 mt-8">
								<p className="text-neutral-400 mr-2">
									Gatunki:
								</p>
								{seriesDetails.genres.map((gatunek, index) => (
									<Chip
										key={index}
										label={gatunek}
										variant="outlined"
										sx={{ borderColor: "#9126d9" }}
									/>
								))}
							</div>
						</div>
					</div>
					<div className="flex flex-row items-center gap-2 mt-8">
						<p className="text-neutral-400 mr-2">Odcinki:</p>
						{seriesDetails.episodes.map((ep, index) =>
							ep._id === episodeId ? (
								<Button
									key={index}
									variant="contained"
									sx={{
										backgroundColor: "#9126d9",
										"&:hover": {
											backgroundColor: "#b267e4",
										},
									}}
									onClick={() => setEpisodeId(ep._id)}
								>
									Odcinek {index + 1}.
								</Button>
							) : (
								<Button
									key={index}
									variant="outlined"
									sx={{
										borderColor: "#9126d9",
										"&:hover": {
											borderColor: "#b267e4",
										},
										color: "#fafaf5",
									}}
									onClick={() => setEpisodeId(ep._id)}
								>
									Odcinek {index + 1}.
								</Button>
							)
						)}
					</div>
				</>
			)}
			{episodeId && (
				<video key={episodeId} controls className="mt-6 h-96">
					<source
						src={`http://localhost:5000/api/videos/${episodeId}`}
						type="video/mp4"
					/>
				</video>
			)}
		</div>
	);
};

export default SeriesDetails;
