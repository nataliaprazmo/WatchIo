import React from "react";

const OfferSteps = ({ steps }) => {
	return (
		<ul className="list-decimal pl-6">
			{steps.map((step, id) => (
				<li key={id}>{step}</li>
			))}
		</ul>
	);
};

export default OfferSteps;
