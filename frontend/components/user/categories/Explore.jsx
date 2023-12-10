"use client";

import React, { useEffect, useState } from "react";
import { Chip } from "@mui/material";

const Explore = () => {
	const [genres, setGenres] = useState(null);
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
				}
			} catch (error) {
				console.log(error);
			}
		};
		getGenres();
	}, []);
	return (
		<div className="pt-24 pb-18 pl-24 pr-8">
			{genres && (
				<div className="flex gap-3">
					{genres.map((genre, id) => (
						<Chip
							key={id}
							label={genre}
							variant="outlined"
							sx={{
								borderColor: "#9126d9",
								"&:hover": { backgroundColor: "#9126d9" },
								cursor: "pointer",
							}}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default Explore;
