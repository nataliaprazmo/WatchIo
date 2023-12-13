"use client";

import React, { useState, useEffect } from "react";
import SiteBreadcrumbs from "@/components/SiteBreadcrumbs";
import Image from "next/image";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import { Chip } from "@mui/material";

const serie = ({ id }) => {
	const [serie, setSerie] = useState(null);
	const getSerie = async () => {
		try {
			const response = await fetch(
				"http://localhost:5000/api/series/" + id,
				{
					method: "GET",
				}
			);
			if (response.status === 200) {
				const res = await response.json();
				setSerie(res.data.seriesDetails);
			}
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		getSerie();
	}, []);
	useEffect(() => {
		console.log(serie);
	}, [setSerie, serie]);
	return (
		<div className="pt-24 pb-18 pl-[115px] pr-13">
			<SiteBreadcrumbs
				links={[
					{ to: "/admin", label: "Serie" },
					{
						to: `/admin/series/${id}`,
						label: "Szczegóły",
					},
				]}
			/>
			{serie ? (
				<div className="mt-8 flex flex-row flex-wrap items-start gap-8">
					<Image
						src={`data:image/jpg;base64, ${serie.picture}`}
						alt={serie.series_title}
						width={240}
						height={400}
						style={{ objectFit: "cover" }}
						className="bg-cover rounded"
					/>
					<div className="flex flex-col w-96">
						<h1 className="font-semibold sm:text-32 text-2xl">
							{serie.series_title}
						</h1>
						<div className="flex flex-row items-center my-1">
							<StarOutlineRoundedIcon
								sx={{
									fontSize: "18px",
									path: { color: "#ff9900" },
								}}
							/>
							<p className="text-sm mr-1 text-neutral-400">
								{serie.imdb_score ? serie.imdb_score : 5.0}
							</p>
							<p className="text-sm ml-1 text-neutral-400">
								IMDB
							</p>
							<p className="mx-6 text-sm text-neutral-400">
								{serie.year_of_production}
							</p>
							<p className="text-sm mr-6 text-neutral-400">
								liczba odcinków: {serie.episodes.length}
							</p>
							{serie.age_rating && (
								<p className="text-sm text-neutral-400">
									{serie.age_rating}
								</p>
							)}
						</div>
						<p className="line-clamp-6 text-justify sm:text-base text-sm">
							{serie.description}
						</p>
						<div className="flex flex-row items-center gap-2 mt-8">
							<p className="text-neutral-400 mr-2">Gatunki:</p>
							{serie.genres.map((gatunek, index) => (
								<Chip
									key={index}
									label={gatunek}
									variant="outlined"
									sx={{
										borderColor: "#9126d9",
									}}
								/>
							))}
						</div>
					</div>
				</div>
			) : (
				<p className="mt-8">Nie odnaleziono serii o danym id.</p>
			)}
		</div>
	);
};

export default serie;
