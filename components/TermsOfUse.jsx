import React from "react";
import { termsOfUse } from "./data";

const TermsOfUse = () => {
	return (
		<div id="terms" className="pt-16 text-justify">
			<h1 className="font-semibold text-primary-orange text-[24px] mb-1">
				{termsOfUse.title}
			</h1>
			<p>{termsOfUse.subtitle}</p>
			<h1 className="font-medium text-[20px] mt-4 mb-1">
				{termsOfUse.licence.title}
			</h1>
			<p>{termsOfUse.licence.text}</p>
			<h1 className="font-medium text-[20px] mt-4 mb-1">
				{termsOfUse.doNot.title}
			</h1>
			<ul className="list-disc pl-4">
				{termsOfUse.doNot.points.map((point, id) => (
					<li key={id}>{point}</li>
				))}
			</ul>
		</div>
	);
};

export default TermsOfUse;
