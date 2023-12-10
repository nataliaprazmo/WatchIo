import React from "react";
import SeriesHero from "./SeriesHero";
import Section from "./categories/Section";
import BestRated from "./categories/BestRated";

const SeriesSections = () => {
	return (
		<>
			<SeriesHero />
			<BestRated />
			<Section items_count={4} />
			<Section items_count={6} />
			<Section items_count={6} />
			<Section items_count={4} />
			<Section items_count={6} />
			<Section items_count={6} />
		</>
	);
};

export default SeriesSections;
