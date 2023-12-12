"use client";
import React, { useEffect, useState } from "react";
import SiteBreadcrumbs from "@/components/SiteBreadcrumbs";
import ChooseGenre from "./ChooseGenre";

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
			<SiteBreadcrumbs
				links={[
					{ to: "/user", label: "Strona główna" },
					{ to: "/user/explore", label: "Eksploruj" },
				]}
			/>
			{genres && <ChooseGenre genres={genres} />}
		</div>
	);
};

export default Explore;
