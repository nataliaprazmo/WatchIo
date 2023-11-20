import React from "react";
import { SwiperSlide } from "swiper/react";

export default function LoadingFilms() {
	const emptyBlocks = [];
	for (let i = 0; i < 10; i++) {
		emptyBlocks.push(
			<div className="bg-secondary-violet h-80 w-full rounded 3xl:my-18 2xl:my-16 lg:my-12 md:my-10 my-8"></div>
		);
	}
	return emptyBlocks.map((block, index) => (
		<SwiperSlide key={index}>{block}</SwiperSlide>
	));
}
