import React from "react";
import Image from "next/image";

const Serie = ({ serie }) => {
	return (
		<div className="w-full h-80 rounded-xl relative">
			<Image
				src={`data:image/jpg;base64, ${serie.picture}`}
				alt={serie.series_title}
				height={320}
				width={320}
				style={{ objectFit: "cover" }}
				className="h-80 w-full bg-cover rounded"
			/>
			<div className="absolute left-0 top-0 w-full rounded h-80 bg-black bg-opacity-30 " />
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
			</div>
		</div>
	);
};

export default Serie;
