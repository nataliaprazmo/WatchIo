import React from "react";
import Image from "next/image";
import { Chip } from "@mui/material";

const FilmSlide = ({ serie }) => {
	return (
		<div className="h-80 w-full rounded 3xl:my-18 2xl:my-16 lg:my-12 md:my-10 my-8">
			<Image
				src={`data:image/jpg;base64, ${serie.picture}`}
				alt={serie.series_title}
				height={320}
				width={320}
				style={{ objectFit: "cover" }}
				className="h-80 w-full bg-cover rounded"
			/>
			<div className="absolute left-0 top-0 w-[280px] rounded h-80 bg-black bg-opacity-30 3xl:my-18 2xl:my-16 lg:my-12 md:my-10 my-8" />
			<div className="absolute left-0 top-0 w-[280px] rounded h-80 bg-gradient-to-t from-black to-transparent opacity-75 flex flex-col items-start justify-end 3xl:my-18 2xl:my-16 lg:my-12 md:my-10 my-8" />
			<div className="absolute left-0 bottom-0 w-[280px] rounded h-80 px-2 py-4 flex flex-col items-start justify-end 3xl:my-18 2xl:my-16 lg:my-12 md:my-10 my-8">
				<div className="flex items-center flex-wrap">
					<h3 className="text-xl font-semibold">
						{serie.series_title}
					</h3>
					<p className="ml-1 py-1 px-2 rounded border-2 border-white text-xs bg-opacity-20 bg-neutral-600 font-medium">
						IMDB{" "}
						<span className="text-primary-orange ml-1">
							{serie.imdb_score}
						</span>
					</p>
				</div>
				<p className="line-clamp-2 text-sm">{serie.description}</p>
				<div className="flex flex-wrap gap-2 pt-2">
					{serie.genres.map((element, index) => (
						<Chip
							key={index}
							label={element}
							sx={{
								span: {
									color: "#101010",
									fontSize: "12px",
								},
								fontFamily: "montserrat",
								backgroundColor: "#fafaf5",
							}}
							size="small"
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default FilmSlide;
