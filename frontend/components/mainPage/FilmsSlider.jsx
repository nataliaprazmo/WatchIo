"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import LoadingFilms from "./loading";

const FilmsSlider = () => {
	const getFilms = async () => {
		try {
			const response = await fetch("http://localhost:5000/api/series", {
				method: "GET",
			});
			if (response.status === 200) {
				const res = await response.json();
				return res.data.series;
			} else return [];
		} catch (error) {
			console.log(error);
			return [];
		}
	};
	const [series, setSeries] = useState(null);

	useEffect(() => {
		getFilms().then((data) => {
			setSeries(data);
		});
	}, []);

	const Films = dynamic(() => import("./Films"), {
		ssr: false,
		loading: () => <LoadingFilms />,
	});

	return <div>{series && <Films series={series} />}</div>;
};

export default FilmsSlider;
