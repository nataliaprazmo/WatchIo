import { Chips } from "../admin";
import Image from "next/image";

const HeroSerieSlide = ({ serie, redirect }) => {
	return (
		<div className="md:grid md:grid-cols-12 lg:gap-16 gap-8 flex flex-col-reverse">
			<div className="flex flex-col lg:col-span-4 md:col-span-5">
				<div className="flex gap-4 items-center mb-3">
					<h2 className="lg:text-2xl text-xl font-semibold">
						{serie.series_title}
					</h2>
					<p className="ml-1 py-1 px-2 rounded border-2 border-white text-xs bg-opacity-20 bg-neutral-600 ">
						IMDB{" "}
						<span className="text-primary-orange ml-1">
							{serie.imdb_score}
						</span>
					</p>
				</div>
				<p className="font-medium pb-2 text-justify lg:text-base text-sm line-clamp-6 mb-4">
					{serie.description}
				</p>
				<Chips variant="outlined" elements={serie.genres} />
			</div>
			<div
				onClick={redirect}
				className="cursor-pointer flex flex-col lg:col-span-8 md:col-span-7"
			>
				<Image
					src={`data:image/jpg;base64, ${serie.picture}`}
					alt={serie.series_title}
					height={320}
					width={320}
					style={{ objectFit: "cover" }}
					className="h-full w-full bg-cover rounded"
				/>
			</div>
		</div>
	);
};
export default HeroSerieSlide;
