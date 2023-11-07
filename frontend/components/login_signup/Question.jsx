import React from "react";
import Link from "next/link";

const Question = ({ question, link, text }) => {
	return (
		<p className="mt-6 font-medium text-base mb-18">
			{question}
			<Link href={link} className="text-primary-orange pl-1">
				{text}
			</Link>
		</p>
	);
};

export default Question;
