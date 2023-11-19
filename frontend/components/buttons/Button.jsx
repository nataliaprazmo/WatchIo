import React from "react";

const Button = ({ children, variant, type, color }) => {
	let buttonClasses = ` flex justify-center lg:px-8 px-4 md:pb-2 pb-[6px] md:pt-[7px] pt-[5px] border-2 ${
		color === "secondary"
			? "border-secondary-violet"
			: "border-primary-orange"
	} rounded-lg h-fit font-medium transition duration-300 2xl:text-base xl:text-sm text-xs `;
	return (
		<button
			className={
				variant === "outlined"
					? buttonClasses +
					  " hover:bg-primary-orange hover:text-black"
					: variant === "filled"
					? buttonClasses +
					  " bg-primary-orange text-black hover:text-white hover:bg-transparent"
					: "relative text-white hover:text-primary-orange bg-transparent w-fit"
			}
			type={type}
		>
			{children}
		</button>
	);
};
export default Button;
