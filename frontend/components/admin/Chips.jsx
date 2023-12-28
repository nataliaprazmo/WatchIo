import React from "react";

const Chips = ({ elements, variant }) => {
	const limitedElements = elements.slice(0, 4);
	return (
		<div className="flex flex-wrap gap-2">
			{limitedElements.map((element, index) => (
				<p
					key={index}
					className={`${
						variant === "outlined"
							? "border-primary-orange bg-transparent text-white border-[1px]"
							: "bg-white text-black hover:bg-orange-200"
					} text-xs rounded-full py-1 px-2`}
				>
					{element}
				</p>
			))}
		</div>
	);
};

export default Chips;
