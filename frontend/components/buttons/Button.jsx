import React from "react";

const Button = ({ children, variant, type }) => {
	let buttonClasses =
		" flex justify-center lg:px-8 px-4 md:pb-2 pb-[6px] md:pt-[7px] pt-[5px] border-2 border-primary-orange rounded-[8px] h-fit font-medium transition duration-300 2xl:text-[16px] xl:text-[14px] text-[12px] ";
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
