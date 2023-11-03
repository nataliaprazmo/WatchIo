import React from "react";
import { privacyPolicy } from "@/data";

const PrivacyPolicy = () => {
	return (
		<div id="privacy" className="pt-16 text-justify">
			<h1 className="font-semibold text-primary-orange text-2xl mb-1">
				{privacyPolicy.title}
			</h1>
			<p>{privacyPolicy.description}</p>
			<h1 className="font-medium text-xl mt-4 mb-1">
				{privacyPolicy.subtitle}
			</h1>
			<ul className="list-disc pl-4">
				{privacyPolicy.definitions.map((definition, id) => (
					<li key={id}>{definition}</li>
				))}
			</ul>
			<h1 className="font-medium text-xl mt-4 mb-1">
				{privacyPolicy.insTitle}
			</h1>
			<p>{privacyPolicy.inspector}</p>
		</div>
	);
};

export default PrivacyPolicy;
