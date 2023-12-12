import React from "react";
import Image from "next/image";
import { Chip } from "@mui/material";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";

const Item = ({ serie, index, deleteFromWatchlist, redirect, guest }) => {
	return (
		<div className="flex flex-row w-full items-center justify-start gap-4 py-4 border-b-2 border-grey-150">
			<p className="self-start">{index}.</p>
			{!guest && (
				<Image
					src={`data:image/jpg;base64, ${serie.picture}`}
					alt={serie.series_title}
					width={120}
					height={200}
					style={{ objectFit: "cover" }}
					className="bg-cover rounded"
				/>
			)}
			<div className="flex flex-col justify-center items-start">
				<h2
					onClick={redirect}
					className="font-semibold cursor-pointer hover:text-secondary-violet"
				>
					{serie.series_title}
				</h2>
				<div className="flex flex-row items-center my-1">
					<StarOutlineRoundedIcon
						sx={{ fontSize: "18px", path: { color: "#ff9900" } }}
					/>
					<p className="text-sm mr-1 text-neutral-400">
						{serie.imdb_score ? serie.imdb_score : 5.0}
					</p>
					<p className="text-sm ml-1 text-neutral-400">IMDB</p>
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
				<p className="line-clamp-2">{serie.description}</p>
				<div className="w-full flex items-end justify-between">
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
					{!guest && (
						<DeleteOutlineRoundedIcon
							onClick={deleteFromWatchlist}
							sx={{ "&:hover": { path: { color: "#ff9900" } } }}
							className="mb-1 mr-2 cursor-pointer"
						/>
					)}
				</div>
			</div>
		</div>
	);
};

export default Item;
