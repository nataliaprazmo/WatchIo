import React, { Suspense } from "react";
import Image from "next/image";
import { getBestRated } from "./categories";
import Section from "./Section";

const BestRated = () => {
	const Series = React.lazy(async () => {
		let series = await getBestRated();
		await new Promise((resolve) => setTimeout(resolve, 3000));
		if (series === null) return <></>;
		else
			return {
				default: () => (
					<div className="w-full flex justify-between items-center gap-8">
						{series.map((serie, index) => (
							<Image
								key={index}
								src={`data:image/jpg;base64, ${serie.picture}`}
								alt={serie.series_title}
								height={320}
								width={320}
								style={{ objectFit: "cover" }}
								className="h-80 w-full bg-cover rounded"
							/>
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
