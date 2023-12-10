import React from "react";
import SeriesHero from "../SeriesHero";
import { getBestRated } from "./categories";
import { getNewest } from "./categories";
import { getByOneEpisode } from "./categories";
import { getByEpisodeCount } from "./categories";
import Category from "./Category";

const SeriesSections = () => {
	return (
		<>
			<SeriesHero />
			<Category getFunction={getNewest} count={4} text="Najnowsze" />
			<Category
				getFunction={getBestRated}
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
