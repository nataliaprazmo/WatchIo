import React from "react";
import LinkButton from "../buttons/LinkButton";

const Plan = ({ type, price, description }) => {
	return (
		<div className="flex flex-col gap-5 border-2 p-6 justify-center items-center border-white hover:border-primary-orange hover:shadow-3xl transition duration-500">
			<p className="leading-5 font-medium text-base">{type}</p>
			<div className="w-[220px] h-[0.5px] bg-white" />
			<h3 className="text-primary-orange font-bold text-32 mb-1">
				{price}
			</h3>
			<div className="w-[220px] h-[1.5px] bg-white" />
			<div className="flex flex-col items-center justify-center gap-4 mb-3 text-center max-w-[220px]">
				{description.map((item, id) => {
					return <p key={id}>{item}</p>;
				})}
			</div>
			<LinkButton to="/signup" variant="outlined">
				Wybierz
			</LinkButton>
		</div>
	);
};

export default Plan;
