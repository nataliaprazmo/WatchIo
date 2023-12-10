import React, { Suspense } from "react";
import { getBestRated } from "./categories";
import Section from "./Section";
import Serie from "./Serie";

const BestRated = () => {
	const Series = React.lazy(async () => {
		let series = await getBestRated();
		if (series === null) return <></>;
		else
			return {
				default: () => (
					<div className="w-full flex justify-between items-center gap-8">
						{series.map((serie, index) => (
							<Serie key={index} serie={serie} />
						))}
					</div>
				),
			};
	});
	return (
		<div className="my-8">
			<h1 className="text-xl font-semibold mb-4">Najlepiej oceniane</h1>
			<Suspense fallback={<Section items_count={4} />}>
				<Series />
			</Suspense>
		</div>
	);
};

export default BestRated;
