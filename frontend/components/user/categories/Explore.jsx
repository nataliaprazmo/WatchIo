"use client";

import React, { useEffect, useState } from "react";
import { Chip } from "@mui/material";
import SiteBreadcrumbs from "@/components/SiteBreadcrumbs";
import Link from "next/link";
import Image from "next/image";

const Explore = () => {
	const [genres, setGenres] = useState(null);
	const [activeId, setActiveId] = useState(0);
	const [series, setSeries] = useState(null);
	const getByGenre = async (genre) => {
		try {
			const response = await fetch(
				"http://localhost:5000/api/series?genres=" + genre,
				{
					method: "GET",
				}
			);
			if (response.status === 200) {
				const res = await response.json();
				setSeries(res.data.series);
			} else setSeries([]);
		} catch (error) {
			console.log(error);
			setSeries([]);
		}
	};
	useEffect(() => {
		const getGenres = async () => {
			try {
				const response = await fetch(
					"http://localhost:5000/api/genres",
					{ method: "GET" }
				);
				if (response.status === 200) {
					const res = await response.json();
					setGenres(res.data.genres);
					const gen = res.data.genres[0];
					setSeries(getByGenre(gen));
				}
			} catch (error) {
				console.log(error);
			}
		};
		getGenres();
	}, []);
	const onGenreClick = (genre, id) => {
		setActiveId(id);
		getByGenre(genre);
	};
	return (
		<div className="pt-24 pb-18 pl-24 pr-8">
			<SiteBreadcrumbs
				links={[
					{ to: "/user", label: "Strona główna" },
					{ to: "/user/explore", label: "Eksploruj" },
				]}
			/>
			{genres && (
				<div className="flex gap-3 mt-8">
					{genres.map((genre, id) => (
						<Chip
							key={id}
							onClick={() => onGenreClick(genre, id)}
							label={genre}
							variant="outlined"
							sx={{
								backgroundColor:
									activeId === id ? "#9126d9" : "transparent",
								borderColor: "#9126d9",
								"&:hover": { backgroundColor: "#9126d9" },
								cursor: "pointer",
							}}
						/>
					))}
				</div>
			)}
			{series != null && series.length !== 0 ? (
				<div className="flex flex-wrap gap-8 mt-12 mb-18">
					{series.map((serie, id) => (
						<>
							<Link
								href={`/user/series/${serie._id}`}
								className="relative"
							>
								<Image
									src={`data:image/jpg;base64, ${serie.picture}`}
									alt={serie.series_title}
									height={320}
									width={320}
									style={{ objectFit: "cover" }}
									className="w-72 h-80 rounded"
								/>
								<div className="absolute left-0 bottom-0 w-full rounded h-full bg-black hover:bg-opacity-0 bg-opacity-30 transition-all duration-300">
									<div className="absolute left-0 top-0 w-full rounded h-full bg-gradient-to-t from-black to-transparent opacity-75 flex flex-col items-start justify-end" />
									<div className="absolute left-0 bottom-0 w-full rounded h-full lg:px-2 px-1 py-4 flex flex-col items-start justify-end ">
										<div className="flex items-center flex-wrap">
											<p className="text-base lg:text-xl font-semibold mr-2">
												{serie.series_title}
											</p>
											<p className=" py-px px-1 rounded border-2 border-white text-xs bg-opacity-20 bg-neutral-600 font-medium">
												IMDB{" "}
												<span className="text-primary-orange ml-1">
													{serie.imdb_score}
												</span>
											</p>
										</div>
									</div>
								</div>
							</Link>
						</>
					))}
				</div>
			) : (
				<p className="mt-8">Nie znaleziono serii</p>
			)}
		</div>
	);
};

export default Explore;
