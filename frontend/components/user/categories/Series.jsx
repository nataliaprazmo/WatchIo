import React from "react";
import Serie from "./Serie";

const Series = ({ series }) => {
	return (
		<div className="w-full flex justify-between items-center gap-8">
			{series.map((serie, index) => (
				<Serie key={index} serie={serie} />
			))}
		</div>
	);
};

export default Series;
