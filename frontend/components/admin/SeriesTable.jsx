"use client";

import React from "react";
import { Chips } from ".";
import Image from "next/image";
import FilmTable from "./filmTable/FilmTable";
import SiteBreadcrumbs from "../SiteBreadcrumbs";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import NavMenu from "./NavMenu";
import Analytics from "./Analytics";

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
		<div className="pt-24 pb-18 pl-[115px] pr-13">
			<NavMenu />
			<SiteBreadcrumbs links={[{ to: "/admin", label: "Serie" }]} />
			<Analytics />
			<FilmTable />
			<Fab
				aria-label="add"
				className="fixed bottom-8 right-6 bg-primary-orange hover:bg-primary-orange transition-all duration-700 shadow-2xl shadow-primary-orange"
				sx={{ "&:hover": { height: "60px", width: "60px" } }}
			>
				<AddIcon
					sx={{
						path: { color: "#1a1a1a" },
					}}
				/>
			</Fab>
		</div>
	);
};

export default SeriesTable;
