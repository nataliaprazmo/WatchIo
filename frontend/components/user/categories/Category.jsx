import React, { Suspense } from "react";
import Section from "./Section";
import Serie from "./Serie";

const Category = ({ getFunction, count, text }) => {
	const Series = React.lazy(async () => {
		let series = await getFunction();
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
			<h1 className="text-xl font-semibold mb-4">{text}</h1>
			<Suspense fallback={<Section items_count={count} />}>
				<Series />
			</Suspense>
		</div>
	);
};

export default Category;
