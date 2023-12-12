import React from "react";
import { SwiperSlide } from "swiper/react";
import Skeleton from "@mui/material/Skeleton";

export default function LoadingFilms() {
	const howMany = Array.from({ length: 6 });
	return (
		<div className="flex">
			{howMany.map((_, index) => (
				<SwiperSlide key={index}>
					<div className="h-80 w-full rounded 3xl:my-18 2xl:my-16 lg:my-12 md:my-10 my-8">
						<Skeleton
							variant="rounded"
							width={300}
							height={320}
							className="bg-grey-200"
						/>
					</div>
				</SwiperSlide>
			))}
		</div>
	);
}
