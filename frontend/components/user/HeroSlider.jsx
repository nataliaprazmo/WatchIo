"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import HeroSerieLoader from "./loading";

const HeroSlider = () => {
	const router = useRouter();
	const redirect = (id) => router.push(`/user/series/${id}`);
	const getFilms = async () => {
		const response = await fetch("http://localhost:5000/api/series", {
			method: "GET",
		});
		if (response.status === 200) {
			const res = await response.json();
			let series = res.data.series;
			return series.slice(0, 5);
		} else return [];
	};
	const [series, setSeries] = useState(null);
	useEffect(() => {
		getFilms().then((data) => {
			setSeries(data);
		});
	}, []);
	const HeroSeries = dynamic(() => import("./HeroSeries"), {
		ssr: false,
		loading: () => <HeroSerieLoader />,
	});
	return (
		<div className="h-72 min-[1007px]:mb-48">
			<HeroSeries series={series} redirect={redirect} />
		</div>
	);
};

export default HeroSlider;
