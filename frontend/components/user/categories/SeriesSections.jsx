import React from "react";
import Category from "./Category";

const SeriesSections = () => {
	const getByQuery = async (howMany, query) => {
		const response = await fetch(
			"http://localhost:5000/api/series?" + query + "&howMany=" + howMany,
			{
				method: "GET",
			}
		);
		if (response.status === 200) {
			const res = await response.json();
			return res.data.series;
		} else return [];
	};
	return (
		<>
			<Category
				text="Najnowsze produkcje"
				getFunction={() => getByQuery(4, "sortedBy=year_of_production")}
				count={4}
			/>
			<Category
				text="Najlepiej oceniane"
				getFunction={() => getByQuery(6, "sortedBy=imdb_score")}
				count={6}
			/>
			<Category
				text="Filmy"
				getFunction={() => getByQuery(6, "getByOneEpisode=1")}
				count={6}
			/>
			<Category
				text="Seriale"
				getFunction={() => getByQuery(6, "getByEpisodeCount=1")}
				count={6}
			/>
		</>
	);
};

export default SeriesSections;
