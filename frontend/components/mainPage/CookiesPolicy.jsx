"use client";
import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { cookiesDetails } from "@/data";

const CookiesPolicy = () => {
	const [expanded, setExpanded] = useState(false);

	const handleChange = (p) => (event, isExpanded) => {
		setExpanded(isExpanded ? p : false);
	};
	return (
		<div id="cookies" className="py-16 text-justify">
			<h1 className="font-semibold text-primary-orange text-[24px] mb-1">
				Polityka plików cookie dla Watch.io
			</h1>
			<p>
				To jest Polityka plików cookie dla Watch.io, dostępna pod
				adresem watch.io.
			</p>
			<p className="font-medium text-[20px] mt-4 mb-1">
				Co to są pliki cookie
			</p>
			<p>{cookiesDetails.definition}</p>
			<p className="font-medium text-[20px] mt-4 mb-1">
				Jak wykorzystujemy pliki cookie
			</p>
			<p>{cookiesDetails.use}</p>
			<p className="font-medium text-[20px] mt-4 mb-1">
				Wyłączanie plików cookie
			</p>
			<p>{cookiesDetails.turnOff}</p>
			<p className="font-medium text-[20px] mt-4 mb-3">
				Pliki cookie, które ustawiamy
			</p>
			{cookiesDetails.cookies.map((cookie, id) => (
				<Accordion
					key={id}
					expanded={expanded === `panel${id}`}
					onChange={handleChange(`panel${id}`)}
					className="bg-grey-default mb-2"
				>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls={`panel${id}bh-content`}
						id={`panel${id}bh-header`}
						className="bg-grey-200 rounded-[8px] mb-1"
					>
						<p>{cookie.title}</p>
					</AccordionSummary>
					<AccordionDetails className="bg-grey-default">
						<p>{cookie.description}</p>
					</AccordionDetails>
				</Accordion>
			))}
			<p className="font-medium text-[20px] mt-4 mb-1">
				Pliki cookie osób trzecich
			</p>
			<p>{cookiesDetails.thirdParty}</p>
			<p>{cookiesDetails.add}</p>
			<p className="font-medium text-[20px] mt-4 mb-1">
				Więcej informacji
			</p>
			<p>{cookiesDetails.moreInfo.description}</p>

			<p>{cookiesDetails.moreInfo.readMore}</p>
			<p>{cookiesDetails.moreInfo.contact.title}</p>
			<ul>
				<li>{cookiesDetails.moreInfo.contact.info}</li>
			</ul>
		</div>
	);
};

export default CookiesPolicy;
