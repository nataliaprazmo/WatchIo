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
		<div className="faqSection">
			<h2 className="faqSection__title">Najczęściej zadawane pytania</h2>
			<p className="faqSection__subtitle">
				Poniżej znajdziesz odpowiedzi na najczęściej pojawiające się do
				nas pytania. Oprócz tego zamieszczamy cenne informacje.
			</p>
			<Accordion
				expanded={expanded === "panel1"}
				onChange={handleChange("panel1")}
				className="faq__accordion"
			>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1bh-content"
					id="panel1bh-header"
					className="faq__accordion__summary"
				>
					<p>Pytanie pierwsze</p>
				</AccordionSummary>
				<AccordionDetails className="faq__accordion__details">
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
				className="faq__accordion"
			>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel2bh-content"
					id="panel2bh-header"
					className="faq__accordion__summary"
				>
					<p>Pytanie drugie</p>
				</AccordionSummary>
				<AccordionDetails className="faq__accordion__details">
					<p>Odpowiedź na pytanie drugie</p>
				</AccordionDetails>
			</Accordion>
			<Accordion
				expanded={expanded === "panel3"}
				onChange={handleChange("panel3")}
				className="faq__accordion"
			>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel3bh-content"
					id="panel3bh-header"
					className="faq__accordion__summary"
				>
					<p>Pytanie trzecie</p>
				</AccordionSummary>
				<AccordionDetails className="faq__accordion__details">
					<p>Odpowiedź na pytanie trzecie</p>
				</AccordionDetails>
			</Accordion>
			<Accordion
				expanded={expanded === "panel4"}
				onChange={handleChange("panel4")}
				className="faq__accordion"
			>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel4bh-content"
					id="panel4bh-header"
					className="faq__accordion__summary"
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
