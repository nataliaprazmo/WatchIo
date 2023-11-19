import React from "react";
import Skeleton from "@mui/material/Skeleton";

const Section = ({ text, items_count }) => {
	const items = Array.from({ length: items_count });
	return (
		<div className="lg:mt-18 md:mt-16 mt-12 flex flex-col gap-6 w-full">
			<h1 className="lg:text-xl text-base font-semibold">{text}</h1>
			<div className="w-full flex justify-between items-center gap-8">
				{items.map((_, index) =>
					// <div
					// 	key={index}
					// 	className="h-80 w-80 bg-purple-950 rounded-[4px]"
					// ></div>
					items_count === 4 ? (
						<Skeleton
							key={index}
							variant="rounded"
							width={320}
							height={320}
							sx={{ bgcolor: "rgb(59 7 100)" }}
						/>
					) : (
						<Skeleton
							key={index}
							animation="wave"
							variant="rounded"
							width={320}
							height={320}
							sx={{ bgcolor: "rgb(59 7 100)" }}
						/>
					)
				)}
			</div>
		</div>
	);
};

export default Section;
