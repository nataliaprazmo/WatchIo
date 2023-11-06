"use client";

import React from "react";
import { Chips } from "@/components/admin";
import NavMenu from "@/components/NavMenu";
import { Chip } from "@mui/material";
import SiteBreadcrumbs from "@/components/SiteBreadcrumbs";

const SeriesDetails = ({ id }) => {
	return (
		<div>
			<NavMenu />
			<div className="sm:mt-16 mt-14 w-full sm:h-96 h-80 bg-[url('/images/poster.webp')] bg-cover bg-center flex justify-end">
				<div className="absolute top-0 left-0 sm:mt-16 mt-14 w-full sm:h-96 h-80 bg-gradient-to-t from-black to-transparent" />
				<div className="flex items-center gap-4 absolute right-8 top-[430px]">
					<Chips
						variant="outlined"
						elements={["1h 40m", "2022", "PG"]}
					/>
				</div>
			</div>
			<div className="absolute top-80 left-24 flex justify-between pb-18 pr-12">
				<div className="flex flex-col w-[60%]">
					<SiteBreadcrumbs
						links={[
							{ to: "/admin", label: "Serie" },
							{ to: `/admin/series/${id}`, label: "Szczegóły" },
						]}
					/>
					<div className="flex gap-6 items-center">
						<h2 className="text-[32px] font-semibold">
							Buzz Astral
						</h2>
						<Chip
							label={
								<p className="flex gap-2 font-semibold">
									IMDB{" "}
									<p className="text-primary-orange ">6.0</p>
								</p>
							}
							variant="outlined"
							className="px-2 bg-grey-200 border-white rounded"
							sx={{
								span: { color: "#fafaf5" },
							}}
						/>
					</div>
					<p className="font-medium pb-4 text-justify">
						Animowany film przygodowy science-fiction
						przedstawiający początki Buzza Astrala, bohatera, który
						zainspirował powstanie sławnej figurki. "Buzz Astral"
						śledzi losy legendarnego strażnika kosmosu, który wraz z
						komandor i załogą trafia na wrogą planetę odległą 4,2
						mln lat świetlnych od Ziemi. Buzz próbuje odnaleźć drogę
						powrotną w przestrzeni i czasie, a towarzyszy mu grupa
						ambitnych rekrutów oraz uroczy robot-kot Kotex. Sytuację
						komplikuje przybycie Zurga, który zagraża powodzeniu
						misji. Nie są znane jego zamiary, lecz towarzyszy mu
						armia bezlitosnych robotów.
					</p>
					<Chips
						variant="outlined"
						elements={["Animacja", "Familijny", "Przygodowy"]}
					/>
					<span className="pb-4" />
					<table className="lg:w-[45%] md:w-[75%] w-full text-sm mb-4 ">
						<tr>
							<td className="text-gray-400">Dystrybucja</td>
							<td>Disney</td>
						</tr>
						<tr>
							<td className="text-gray-400">Studio</td>
							<td>Walt Disney Pictures</td>
						</tr>
						<tr>
							<td className="text-gray-400">Tytuł oryginalny</td>
							<td>Lightyear</td>
						</tr>
					</table>
				</div>
			</div>
		</div>
	);
};

export default SeriesDetails;
