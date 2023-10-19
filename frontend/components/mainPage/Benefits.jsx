import React from "react";
import Benefit from "./Benefit";
import { benefits } from "@/data";

const Benefits = () => {
	return (
		<div className="flex flex-col items-center justify-between">
			{benefits.map((benefit, id) => (
				<Benefit
					key={id}
					side={benefit.side}
					imageSrc={benefit.imageSrc}
					name={benefit.name}
					title={benefit.title}
					description={benefit.description}
					more={benefit.more}
				/>
			))}
		</div>
	);
};

export default Benefits;
