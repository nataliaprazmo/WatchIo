"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { InputAdornment, OutlinedInput } from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";

const Search = () => {
	const [results, setResults] = useState(null);
	const [toFind, setToFind] = useState("");
	const search = async (find) => {
		if (find !== "") {
			const response = await fetch(
				"http://localhost:5000/api/series/?search=" + find,
				{
					method: "GET",
				}
			);
			if (response.status === 200) {
				const res = await response.json();
				if (res.data.series.length !== 0) setResults(res.data.series);
				else setResults(null);
			}
		} else setResults(null);
	};
	useEffect(() => {
		search(toFind);
	}, [toFind, setToFind]);
	return (
		<>
			<OutlinedInput
				className="w-fit bg-grey-250 rounded-lg h-10 relative"
				sx={{
					input: {
						paddingLeft: "4px",
						color: "#fafaf5",
					},
				}}
				value={toFind}
				onChange={(e) => setToFind(e.target.value)}
				onClick={(e) => search(e.target.value)}
				onBlur={() => {
					setResults(null);
				}}
				placeholder="Szukaj po nazwie"
				startAdornment={
					<InputAdornment position="start">
						<SearchRoundedIcon />
					</InputAdornment>
				}
			/>
			{results && (
				<div
					className="bg-neutral-800 absolute w-72 h-fit top-0 right-0 rounded mt-14 mr-24 py-3 px-4 bg-opacity-75 border-[1px] border-neutral-700 backdrop-blur-md flex flex-col gap-1 max-h-[396px] overflow-y-scroll"
					style={{
						scrollbarWidth: "thin",
						scrollbarColor:
							"rgb(82 82 82 / 0.6) rgb(23 23 23 / 0.6)",
					}}
				>
					{results.map((result, index) => (
						<div
							key={index}
							className="flex items-center gap-2 hover:bg-opacity-5 rounded-sm hover:bg-white cursor-pointer text-neutral-100 hover:text-purple-500"
						>
							<Image
								src={`data:image/jpg;base64, ${result.picture}`}
								alt={result.series_title}
								width={64}
								height={92}
								style={{
									objectFit: "cover",
									width: "64px",
									height: "92px",
								}}
								className="bg-cover rounded-sm"
							/>
							<div className="flex flex-col">
								<p className="text-sm font-medium text-inherit mr-1">
									{result.series_title}
								</p>
								<div className="flex gap-1 items-center">
									<StarOutlineRoundedIcon
										sx={{
											fontSize: "12px",
											path: { color: "#ff9900" },
										}}
									/>
									<p className="text-[10px] text-neutral-400">
										{result.imdb_score
											? result.imdb_score
											: 5.0}
									</p>
									<p className="text-[10px] ml-px text-neutral-400">
										IMDB
									</p>
									<p className="text-[10px] text-neutral-400">
										{result.year_of_production}
									</p>
									{result.age_rating && (
										<p className="text-[10px] text-neutral-400">
											{result.age_rating}
										</p>
									)}
								</div>
								<p className="text-xs text-neutral-300 line-clamp-2">
									{result.description}
								</p>
							</div>
						</div>
					))}
				</div>
			)}
		</>
	);
};

export default Search;
