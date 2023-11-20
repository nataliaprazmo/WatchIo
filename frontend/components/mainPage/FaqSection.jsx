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
			<h2 className="2xl:text-32 text-2xl font-bold text-center mb-2">
				Najczęściej zadawane pytania
			</h2>
			<p className="text-base leading-7 font-medium mb-6 text-center">
				Poniżej znajdziesz cenne informacje oraz odpowiedzi na
				najczęściej pojawiające się do nas pytania.
			</p>
			{questions.map((question, id) => (
				<Accordion
					key={id}
					expanded={expanded === `${question.panel}`}
					onChange={handleChange(`${question.panel}`)}
					sx={{
						backgroundColor: "rgb(26 26 26)",
						marginBottom: "8px",
					}}
				>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls={`${question.panel}bh-content`}
						id={`${question.panel}bh-header`}
						sx={{
							backgroundColor: "rgb(51 51 51)",
							borderRadius: "8px",
							marginBottom: "4px",
						}}
					>
						<p>{question.title}</p>
					</AccordionSummary>
					<AccordionDetails sx={{ backgroundColor: "rgb(26 26 26)" }}>
						<p>{question.answer}</p>
					</AccordionDetails>
				</Accordion>
			))}
		</div>
	);
};

export default FaqSection;
