import React from "react";
import Plan from "./Plan";
import { plans } from "@/data";

const Plans = () => {
	return (
		<div className="flex sm:flex-row flex-col gap-8 items-center justify-center mt-8">
			{plans.map((plan, id) => (
				<Plan
					key={id}
					type={plan.type}
					price={plan.price}
					description={plan.description}
				/>
			))}
		</div>
	);
};

export default Plans;
