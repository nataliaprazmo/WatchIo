import React from "react";
import Link from "next/link";

const RedirectButton = ({ to, children, variant }) => {
	let buttonClasses =
		"flex justify-center px-[32px] pb-[8px] pt-[6px] border-2 border-primary-orange rounded-[8px] h-fit font-medium transition duration-300 2xl:text-[16px] xl:text-[14px] text-[12px]";

	return (
		<Link
			href={to}
			className={
				variant === "outlined"
					? buttonClasses +
					  " hover:bg-primary-orange hover:text-black"
					: variant === "filled"
					? buttonClasses +
					  " bg-primary-orange text-black hover:text-white hover:bg-grey-default"
					: "relative text-white hover:text-primary-orange active:text-primary-orange active:font-bold  bg-transparent"
			}
		>
			{children}
		</Link>
	);
};
export default RedirectButton;
