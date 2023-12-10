import React from "react";
import SeriesHero from "../SeriesHero";
import { getByOneEpisode } from "./categories";
import { getByEpisodeCount } from "./categories";
import { getByQuery } from "./categories";
import Category from "./Category";

const SeriesSections = () => {
	return (
		<>
			<SeriesHero />
			<Category
				getFunction={() => getByQuery(4, "sortedBy=year_of_production")}
				count={4}
				text="Najnowsze"
			/>
			<Category
				getFunction={() => getByQuery(4, "sortedBy=imdb_score")}
				count={4}
				text="Najlepiej oceniane"
			/>
			<Category getFunction={getByOneEpisode} count={6} text="Filmy" />
			<Category
				getFunction={() => getByEpisodeCount(1)}
				count={6}
				text="Seriale"
			/>
		</>
	);
};

export default SeriesSections;
