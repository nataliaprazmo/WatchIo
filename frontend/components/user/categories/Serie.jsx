import React from "react";
import Image from "next/image";
import Link from "next/link";

const Serie = ({ serie }) => {
	return (
		<Link
			href={`/user/series/${serie._id}`}
			className="w-full h-80 rounded-xl relative"
		>
			<Image
				src={`data:image/jpg;base64, ${serie.picture}`}
				alt={serie.series_title}
				height={320}
				width={320}
				style={{ objectFit: "cover", width: "320px", height: "320px" }}
				className="h-80 w-full bg-cover rounded"
			/>
			<div className="absolute left-0 bottom-0 w-full rounded h-full bg-black hover:bg-opacity-0 bg-opacity-30 transition-all duration-300">
				<div className="absolute left-0 top-0 w-full rounded h-full bg-gradient-to-t from-black to-transparent opacity-75 flex flex-col items-start justify-end" />
				<div className="absolute left-0 bottom-0 w-full rounded h-full lg:px-2 px-1 py-4 flex flex-col items-start justify-end ">
					<div className="flex items-center flex-wrap">
						<p className="text-base lg:text-xl font-semibold mr-2">
							{serie.series_title}
						</p>
						<p className=" py-px px-1 rounded border-2 border-white text-xs bg-opacity-20 bg-neutral-600 font-medium">
							IMDB{" "}
							<span className="text-primary-orange ml-1">
								{serie.imdb_score}
							</span>
						</p>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default Serie;
