import React from "react";
import Image from "next/image";
import { Chip } from "@mui/material";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";

const Item = ({ serie, index }) => {
	return (
		<div className="flex flex-row w-full items-center justify-start gap-4 py-4 border-b-2 border-grey-150">
			<p className="self-start">{index}.</p>
			<Image
				src="/images/poster.webp"
				alt="poster"
				width={120}
				height={200}
			/>
			<div className="flex flex-col justify-center items-start">
				<h2 className="font-semibold">{serie.title}</h2>
				<div className="flex flex-row items-center my-1">
					<StarOutlineRoundedIcon
						sx={{ fontSize: "18px", path: { color: "#ff9900" } }}
					/>
					<p className="text-sm mr-1 text-neutral-400">
						{serie.rating}
					</p>
					<p className="text-sm ml-1 text-neutral-400">IMDB</p>
					<p className="mx-6 text-sm text-neutral-400">
						{serie.year}
					</p>
					<p className="text-sm mr-6 text-neutral-400">
						{serie.episodes} odcinki
					</p>
					{serie.pg && (
						<p className="text-sm text-neutral-400">{serie.pg}</p>
					)}
				</div>
				<p className="line-clamp-2">{serie.description}</p>
				<div className="flex flex-row items-center gap-2 mt-8">
					<p className="text-neutral-400 mr-2">Gatunki:</p>
					{serie.genres.map((gatunek, index) => (
						<Chip
							key={index}
							label={gatunek}
							variant="outlined"
							sx={{ borderColor: "#9126d9" }}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Item;
