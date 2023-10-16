"use client";

import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { questions } from "@/data";

const FaqSection = () => {
	const [expanded, setExpanded] = React.useState(false);

	const handleChange = (p) => (event, isExpanded) => {
		setExpanded(isExpanded ? p : false);
	};
	return (
		<div id="faq" className="py-8 xl:px-32 md:px-20 xs:px-10 px-6">
			<h2 className="2xl:text-[32px] text-[24px] font-bold text-center mb-2">
				Najczęściej zadawane pytania
			</h2>
			<p className="text-[16px] leading-[28px] font-medium mb-6 text-center">
				Poniżej znajdziesz odpowiedzi na najczęściej pojawiające się do
				nas pytania. Oprócz tego zamieszczamy cenne informacje.
			</p>
			{questions.map((question, id) => (
				<Accordion
					key={id}
					expanded={expanded === `${question.panel}`}
					onChange={handleChange(`${question.panel}`)}
					className="bg-grey-default mb-2"
				>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls={`${question.panel}bh-content`}
						id={`${question.panel}bh-header`}
						className="bg-grey-200 rounded-[8px] mb-1"
					>
						<p>{question.title}</p>
					</AccordionSummary>
					<AccordionDetails className="bg-grey-default">
						<p>{question.answer}</p>
					</AccordionDetails>
				</Accordion>
			))}
		</div>
	);
};

export default FaqSection;
