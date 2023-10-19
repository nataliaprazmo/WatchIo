import React from "react";
import Link from "next/link";

const Question = ({ question, link, text }) => {
	return (
		<p className="mt-4 font-medium text-[16px] mb-18">
			{question}
			<Link href={link} className="text-primary-orange pl-1">
				{text}
			</Link>
		</p>
	);
};

export default Question;
