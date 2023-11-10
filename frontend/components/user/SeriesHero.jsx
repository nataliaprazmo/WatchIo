import { Chip } from "@mui/material";
import React from "react";
import { Chips } from "../admin";

const SeriesHero = () => {
	return (
		<div className="md:grid md:grid-cols-12 lg:gap-16 gap-8 flex flex-col-reverse">
			<div className="flex flex-col xl:col-span-3 lg:col-span-4 md:col-span-5">
				<div className="flex gap-6 items-center mb-3">
					<h2 className="lg:text-2xl text-xl font-semibold">
						Buzz Astral
					</h2>
					<Chip
						label={
							<p className="flex gap-2 font-semibold">
								IMDB <p className="text-primary-orange ">6.0</p>
							</p>
						}
						variant="outlined"
						className="lg:px-2 px-1 bg-grey-200 border-white rounded"
						sx={{
							span: { color: "#fafaf5" },
						}}
					/>
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
			<div className="xl:col-span-9 lg:col-span-8 md:col-span-7 rounded-lg bg-purple-950 lg:h-96 md:h-72 h-64"></div>
		</div>
	);
};

export default SeriesHero;
