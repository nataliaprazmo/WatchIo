"use client";

import { createContext, useContext } from "react";

const SeriesContext = createContext();

export function useSeries() {
	return useContext(SeriesContext);
}

export function SeriesProvider({ children }) {
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
	// const Serie = () => {};
	// const AllSeries = React.lazy(async () => {
	// 	const series = await getFilms();
	// 	await new Promise((resolve) => setTimeout(resolve, 3000));
	// 	if (series === null) return <></>;
	// 	else return { default: () => <></> };
	// });
	// function SeriesLoader() {
	// 	const howMany = Array.from({ length: 4 });
	// 	return (
	// 		<div className="flex">
	// 			{howMany.map((_, index) => (
	// 				<Skeleton
	// 					key={index}
	// 					variant="rounded"
	// 					width={320}
	// 					height={320}
	// 					sx={{ bgcolor: "rgb(59 7 100)" }}
	// 				/>
	// 			))}
	// 		</div>
	// 	);
	// }
	// const Series = () => {
	// 	return (
	// 		<Suspense fallback={<SeriesLoader />}>
	// 			<AllSeries />
	// 		</Suspense>
	// 	);
	// };
	return (
		<SeriesContext.Provider value={{ getFilms }}>
			{children}
		</SeriesContext.Provider>
	);
}
