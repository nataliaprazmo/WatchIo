"use client";
import React, { useState, useEffect } from "react";
import SiteBreadcrumbs from "../SiteBreadcrumbs";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import { Chip } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";
import BookmarkAddedRoundedIcon from "@mui/icons-material/BookmarkAddedRounded";
import LocalPlayOutlinedIcon from "@mui/icons-material/LocalPlayOutlined";
import roomId from "./roomId";

const SeriesDetails = ({ id }) => {
	const [seriesDetails, setSeriesDetails] = useState(null);
	const [episodeId, setEpisodeId] = useState(null);
	const [added, setAdded] = useState(false);
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
	const addToWatchlist = async (id) => {
		const token = localStorage.getItem("token");
		const response = await fetch(
			"http://localhost:5000/api/watchlists/" + id,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"x-access-token": token,
				},
			}
		);
		if (response.status === 200) setAdded(true);
	};
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
					<div className="mt-8 flex flex-row flex-wrap items-start justify-between">
						<div className="flex flex-row flex-wrap items-start gap-8">
							<Image
								src={`data:image/jpg;base64, ${seriesDetails.picture}`}
								alt={seriesDetails.series_title}
								width={240}
								height={400}
								style={{ objectFit: "cover" }}
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
								<div className="flex items-end justify-between">
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
									{added ? (
										<BookmarkAddedRoundedIcon
											sx={{
												fontSize: "28px",
												path: { color: "#9126d9" },
											}}
										/>
									) : (
										<BookmarkBorderRoundedIcon
											onClick={() =>
												addToWatchlist(
													seriesDetails._id
												)
											}
											sx={{
												fontSize: "28px",
												"&:hover": {
													path: { color: "#9126d9" },
												},
											}}
											className="cursor-pointer"
										/>
									)}
								</div>
							</div>
						</div>
						{/* <div className="flex flex-col w-96 bg-grey-150 rounded px-4 py-2 xl:mt-0 mt-8 md:mr-16 mr-4">
							<p className="text-xl font-semibold text-center border-b-[1px] pb-1 border-grey-100">
								Odcinki
							</p>
							{seriesDetails.episodes.map((ep, index) =>
								ep._id === episodeId ? (
									<p className="font-bold pt-2 text-base text-primary-orange">
										Odcinek {index + 1}
									</p>
								) : (
									<p className="font-medium pt-2 text-base">
										Odcinek {index + 1}
									</p>
								)
							)}
						</div> */}
					</div>

					<div className="flex flex-row items-center gap-2 mt-8">
						<p className="text-neutral-400 mr-2">Odcinki:</p>
						{seriesDetails.episodes.map((ep, index) =>
							ep._id === episodeId ? (
								<button
									key={index}
									className="text-sm bg-secondary-violet rounded py-2 px-4 font-medium uppercase hover:text-black hover:bg-[#bd7de8]"
									onClick={() => setEpisodeId(ep._id)}
								>
									Odcinek {index + 1}.
								</button>
							) : (
								<button
									key={index}
									className="text-sm border-[1px] border-secondary-violet rounded py-2 px-4 font-medium uppercase hover:border-2 hover:border-[#bd7de8]"
									onClick={() => setEpisodeId(ep._id)}
								>
									Odcinek {index + 1}.
								</button>
							)
						)}
						<Link
							key={episodeId}
							href={`/user/rooms/${roomId}?videoId=${episodeId}`}
							className="ml-2"
						>
							<LocalPlayOutlinedIcon
								sx={{
									fontSize: "28px",
									"&:hover": {
										path: { color: "#9126d9" },
									},
								}}
							/>
						</Link>
					</div>
				</>
			)}
			{episodeId && (
				<video key={episodeId} controls className="w-full mt-6 h-96">
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
