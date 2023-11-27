import React from "react";
import { Chips } from "../admin";
import Skeleton from "@mui/material/Skeleton";
import SerieHero from "./SerieHero";

const SeriesHero = () => {
	return (
		<div className="md:grid md:grid-cols-12 lg:gap-16 gap-8 flex flex-col-reverse">
			<div className="flex flex-col xl:col-span-3 lg:col-span-4 md:col-span-5">
				<div className="flex gap-4 items-center mb-3">
					<h2 className="lg:text-2xl text-xl font-semibold">
						Buzz Astral
					</h2>
					<p className="ml-1 py-1 px-2 rounded border-2 border-white text-xs bg-opacity-20 bg-neutral-600 ">
						IMDB{" "}
						<span className="text-primary-orange ml-1">6.0</span>
					</p>
				</div>
				<p className="font-medium pb-4 text-justify lg:text-base text-sm line-clamp-6 mb-4">
					Animowany film przygodowy science-fiction przedstawiający
					początki Buzza Astrala, bohatera, który zainspirował
					powstanie sławnej figurki. "Buzz Astral" śledzi losy
					legendarnego strażnika kosmosu, który wraz z komandor i
					załogą trafia na wrogą planetę odległą 4,2 mln lat
					świetlnych od Ziemi. Buzz próbuje odnaleźć drogę powrotną w
					przestrzeni i czasie, a towarzyszy mu grupa ambitnych
					rekrutów oraz uroczy robot-kot Kotex. Sytuację komplikuje
					przybycie Zurga, który zagraża powodzeniu misji. Nie są
					znane jego zamiary, lecz towarzyszy mu armia bezlitosnych
					robotów.
				</p>
				<Chips
					variant="outlined"
					elements={["Animacja", "Familijny", "Przygodowy"]}
				/>
			</div>
			{/* <div className="xl:col-span-9 lg:col-span-8 md:col-span-7 rounded-lg lg:h-96 md:h-72 h-64">
				<Skeleton
					animation="wave"
					variant="rounded"
					sx={{ bgcolor: "rgb(59 7 100)", height: "100%" }}
				/>
			</div> */}
			<SerieHero />
		</div>
	);
};

export default SeriesHero;
