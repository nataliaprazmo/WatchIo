import React from "react";
import RedirectButton from "./RedirectButton";

const Plan = ({ type, price, description, button, main }) => {
	let planClasses =
		"flex flex-col gap-5 border-2 p-6 justify-center items-center ";
	return (
		<div
			className={
				main === true
					? planClasses + " border-primary-orange shadow-3xl"
					: planClasses + " border-white"
			}
		>
			<p className="leading-[20.8px] font-medium text-[16px]">{type}</p>
			<div className="w-[220px] h-[0.5px] bg-white" />
			<h3 className="text-primary-orange font-bold text-[32px] mb-1">
				{price}/rok
			</h3>
			<div className="w-[220px] h-[1.5px] bg-white" />
			<div className="flex flex-col items-center justify-center gap-4 mb-3 text-center max-w-[220px]">
				{description.map((item, id) => {
					return <p key={id}>{item}</p>;
				})}
			</div>
			<RedirectButton to="signup" variant={button}>
				Zarejestruj się
			</RedirectButton>
		</div>
	);
};

export default Plan;
