import React from "react";
import Skeleton from "@mui/material/Skeleton";

const Section = ({ items_count }) => {
	const items = Array.from({ length: items_count });
	return (
		<div className="w-full flex justify-between items-center gap-8">
			{items.map((_, index) => (
				<Skeleton
					key={index}
					variant="rounded"
					width={320}
					height={320}
					sx={{ bgcolor: "rgb(38 38 38)" }}
				/>
			))}
		</div>
	);
};

export default Section;
