"use client";
import React, { useState } from "react";
import { Chip } from "@mui/material";
import SeriesByGenre from "./SeriesByGenre";

const ChooseGenre = ({ genres }) => {
	const [activeId, setActiveId] = useState(0);
	const [genre, setGenre] = useState(genres[0]);
	const onGenreClick = (genre, id) => {
		setGenre(genre);
		setActiveId(id);
	};
	return (
		<>
			{genres && (
				<div className="flex gap-3 flex-wrap mt-8">
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
			{genre && <SeriesByGenre key={genre} genre={genre} />}
		</>
	);
};

export default ChooseGenre;
