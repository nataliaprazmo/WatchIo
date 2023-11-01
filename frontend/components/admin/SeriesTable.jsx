"use client";

import React from "react";
import { Chips } from ".";
import Image from "next/image";
import FilmTable from "./filmTable/FilmTable";
import SiteBreadcrumbs from "../SiteBreadcrumbs";

const series = [
	{
		series_name: "Nazwa serii",
		episodes: 3, //z bazy policzone
		genre: ["rodzinny", "komedia", "przygodowy"],
		video: {
			title: "Tytuł odcinka/filmu",
			desc: "opis",
			actors: ["Morgan Freeman", "Keanu Reeves", "Meryl Streep"], //z bazy wybrane po roli
			director: ["Director Director"],
		},
	},
];

const SeriesTable = () => {
	const cat = ["rodzinny", "komedia", "przygodowy"];
	const act = ["Morgan Freeman", "Keanu Reeves", "Meryl Streep"];

	const [selected, setSelected] = React.useState([]);
	return (
		<div className="py-18 px-[50px]">
			<SiteBreadcrumbs
				links={[{ to: "/admin", label: "Panel administratora" }]}
			/>
			{/* <Chips elements={cat} />
			<Image src="/images/poster.webp" width={100} height={200} />
			<h1 className="font-semibold text-[24px]">Nazwa serii</h1>
			<p className="text-justify">
				Animowany film przygodowy science-fiction przedstawiający
				początki Buzza Astrala, bohatera, który zainspirował powstanie
				sławnej figurki. "Buzz Astral" śledzi losy legendarnego
				strażnika kosmosu, który wraz z komandor i załogą trafia na
				wrogą planetę odległą 4,2 mln lat świetlnych od Ziemi. Buzz
				próbuje odnaleźć drogę powrotną w przestrzeni i czasie, a
				towarzyszy mu grupa ambitnych rekrutów oraz uroczy robot-kot
				Kotex. Sytuację komplikuje przybycie Zurga, który zagraża
				powodzeniu misji. Nie są znane jego zamiary, lecz towarzyszy mu
				armia bezlitosnych robotów.
			</p>
			<Chips elements={act} variant="outlined" />
			<p>Director</p>
			<br />*/}
			<FilmTable />
		</div>
	);
};

export default SeriesTable;
