"use client";

import React from "react";
import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

const Analytics = () => {
	const data = {
		labels: ["Przygodowy", "Animacja", "Horror"],
		datasets: [
			{
				label: "Gatunki",
				data: [300, 50, 100],
				backgroundColor: ["#ff6600", "#ffcc00", "#ff3300"],
				hoverOffset: 2,
				borderWidth: 0,
				shadowOffset: 10,
			},
		],
	};
	const chartOptions = {
		cutout: "90%",
		plugins: {
			legend: {
				display: true,
				position: "right",
				labels: {
					color: "#aaa",
				},
			},
		},
	};

	return (
		<div className="relative w-full h-[300px]">
			<Doughnut data={data} options={chartOptions} />
			<div className="absolute w-[170px] h-[170px] shadow-3xl shadow-orange-400 text-orange-100 top-[65px] left-0 rounded-full flex justify-center items-center font-medium ">
				Kategorie
			</div>
		</div>
	);
};

export default Analytics;
