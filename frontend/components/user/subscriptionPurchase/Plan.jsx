import React from "react";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

const Plan = ({ title, description, price, click }) => {
	return (
		<button
			name="plan"
			onClick={click}
			className="flex flex-row items-start justify-between gap-8 bg-neutral-700 hover:bg-neutral-600 transition-colors duration-500 rounded py-4 px-6"
		>
			<div className="flex flex-col items-start gap-1">
				<p className="text-base font-semibold">{title}</p>
				<p className="text-xs font-medium text-neutral-400">
					{description}
				</p>
			</div>
			<p className="text-base font-semibold text-primary-orange">
				{price}
			</p>
			<div className="h-full flex items-center">
				<ArrowForwardIosRoundedIcon
					sx={{ "&:hover": { path: { color: "#ff9900" } } }}
				/>
			</div>
		</button>
	);
};

export default Plan;
