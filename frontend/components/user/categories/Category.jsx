"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Section from "./Section";

const Category = ({ getFunction, count, text }) => {
	const [series, setSeries] = useState(null);
	useEffect(() => {
		getFunction().then((data) => {
			setSeries(data);
		});
	}, []);
	const Series = dynamic(() => import("./Series"), {
		ssr: false,
		loading: () => <Section items_count={count} />,
	});
	return (
		<div className="my-8">
			<h1 className="text-xl font-semibold mb-4">{text}</h1>
			{series && <Series series={series} />}
		</div>
	);
};

export default Category;
