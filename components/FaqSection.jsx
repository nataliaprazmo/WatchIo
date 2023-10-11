"use client";

import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FaqSection = () => {
	const [expanded, setExpanded] = React.useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};
	return (
		<div className="py-8 xl:px-32 md:px-20 xs:px-10 px-6">
			<h2 className="2xl:text-[32px] text-[24px] font-bold text-center mb-2">
				Najczęściej zadawane pytania
			</h2>
			<p className="text-[16px] leading-[28px] font-medium mb-6 text-center">
				Poniżej znajdziesz odpowiedzi na najczęściej pojawiające się do
				nas pytania. Oprócz tego zamieszczamy cenne informacje.
			</p>
			<Accordion
				expanded={expanded === "panel1"}
				onChange={handleChange("panel1")}
				className="bg-grey-default mb-2"
			>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1bh-content"
					id="panel1bh-header"
					className="bg-grey-200 rounded-[8px] mb-1"
				>
					<p>Pytanie pierwsze</p>
				</AccordionSummary>
				<AccordionDetails className="bg-grey-default">
					<p>
						Dzięki oferowanym przez nas salach, pokojach, jak zwał
						tak zwał, możesz podzielić się linkiem do wspólnego
						oglądania nie tylko z subskrybentami. Dodatkowo masz
						możliwość dołączenia do publicznych pokoi. Aby stworzyć
						pokój i cieszyć się bliskością oglądania, wystarczy
						dołączyć do nas!{" "}
					</p>
				</AccordionDetails>
			</Accordion>
			<Accordion
				expanded={expanded === "panel2"}
				onChange={handleChange("panel2")}
				className="bg-grey-default mb-2"
			>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel2bh-content"
					id="panel2bh-header"
					className="bg-grey-200 rounded-[8px] mb-1"
				>
					<p>Pytanie drugie</p>
				</AccordionSummary>
				<AccordionDetails className="bg-grey-default">
					<p>Odpowiedź na pytanie drugie</p>
				</AccordionDetails>
			</Accordion>
			<Accordion
				expanded={expanded === "panel3"}
				onChange={handleChange("panel3")}
				className="bg-grey-default mb-2"
			>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel3bh-content"
					id="panel3bh-header"
					className="bg-grey-200 rounded-[8px] mb-1"
				>
					<p>Pytanie trzecie</p>
				</AccordionSummary>
				<AccordionDetails className="bg-grey-default">
					<p>Odpowiedź na pytanie trzecie</p>
				</AccordionDetails>
			</Accordion>
			<Accordion
				expanded={expanded === "panel4"}
				onChange={handleChange("panel4")}
				className="bg-grey-default mb-2"
			>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel4bh-content"
					id="panel4bh-header"
					className="bg-grey-200 rounded-[8px] mb-1"
				>
					<p>Pytanie czwarte</p>
				</AccordionSummary>
				<AccordionDetails className="faq__accordion__details">
					<p>Odpowiedź na pytanie czwarte</p>
				</AccordionDetails>
			</Accordion>
		</div>
	);
};

export default FaqSection;
