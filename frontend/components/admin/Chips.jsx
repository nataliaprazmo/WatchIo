import React from "react";
import { Chip } from "@mui/material";

const Chips = ({ elements, variant }) => {
	const color = variant === "outlined" ? "#fafaf5" : "#101010";
	const limitedElements = elements.slice(0, 4);
	return (
		<div className="flex flex-wrap gap-2">
			{limitedElements.map((element, index) => (
				<Chip
					key={index}
					label={element}
					variant={variant}
					className={
						variant === "outlined"
							? "border-primary-orange"
							: "bg-white hover:bg-orange-200"
					}
					sx={{
						span: { color: { color } },
						fontFamily: "montserrat",
						backgroundColor: !color,
					}}
				/>
			))}
		</div>
	);
};

export default Chips;
