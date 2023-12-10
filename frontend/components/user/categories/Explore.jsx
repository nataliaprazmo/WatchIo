"use client";

import React, { useEffect, useState } from "react";
import { Chip } from "@mui/material";
import SiteBreadcrumbs from "@/components/SiteBreadcrumbs";
import { getByGenre } from "./categories";
import Serie from "./Serie";

const Explore = () => {
	const [genres, setGenres] = useState(null);
	const [activeId, setActiveId] = useState(0);
	const [genreFilter, setGenreFilter] = useState(null);
	const [series, setSeries] = useState(null);
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
					setGenreFilter(res.data.genres[0]);
					setSeries(getByGenre(res.data.genres[0]));
				}
			} catch (error) {
				console.log(error);
			}
		};
		getGenres();
	}, []);
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
							onClick={() => setActiveId(id)}
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
			{series && series.length !== 0 ? (
				<div className="flex flex-wrap gap-8">
					{series.map((serie, id) => (
						<Serie key={id} serie={serie} />
					))}
				</div>
			) : (
				<p className="mt-8">Nie znaleziono serii</p>
			)}
		</div>
	);
};

export default Explore;
