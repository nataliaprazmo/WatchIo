"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { slides } from "@/components/data";
SwiperCore.use([Navigation, FreeMode]);

const FilmsSlider = () => {
	return (
		<div>
			<Swiper
				modules={[Navigation, FreeMode]}
				spaceBetween={32}
				centeredSlides={true}
				navigation={true}
				loop={true}
				breakpoints={{
					1600: {
						width: 1600,
						slidesPerView: 7,
					},
					640: {
						width: 640,
						slidesPerView: 5,
					},
					400: {
						width: 400,
						slidesPerView: 3,
					},
				}}
			>
				{slides.map((slide, id) => (
					<SwiperSlide key={id}>
						<div className="bg-primary-orange h-[360px] w-fit my-18">
							{slide}
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default FilmsSlider;
