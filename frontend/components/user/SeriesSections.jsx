import React from "react";
import SeriesHero from "./SeriesHero";
import Section from "./Section";

const SeriesSections = () => {
	return (
		<>
			<SeriesHero />
			<Section text="Najpopularniejsze" items_count={4} />
			<Section text="Najlepiej oceniane" items_count={6} />
			<Section text="Ostatnio dodane" items_count={6} />
			<Section text="Polecane" items_count={4} />
			<Section text="Seriale" items_count={6} />
			<Section text="Filmy" items_count={6} />
		</>
	);
};

export default SeriesSections;
