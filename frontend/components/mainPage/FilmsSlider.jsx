"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { slides } from "@/data";
SwiperCore.use([Navigation, FreeMode, Autoplay]);

const FilmsSlider = () => {
	return (
		<div>
			<Swiper
				modules={[Navigation, FreeMode, Autoplay]}
				spaceBetween={32}
				centeredSlides={true}
				navigation={true}
				loop={true}
				autoplay={{ delay: 1500, disableOnInteraction: false }}
				breakpoints={{
					1600: {
						width: 1600,
						slidesPerView: 5,
					},
					640: {
						width: 640,
						slidesPerView: 3,
					},
					400: {
						width: 400,
						slidesPerView: 1,
					},
				}}
			>
				{slides.map((slide, id) => (
					<SwiperSlide key={id}>
						<div className="bg-secondary-violet h-80 w-full rounded 3xl:my-18 2xl:my-16 lg:my-12 md:my-10 my-8">
							{slide}
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default FilmsSlider;
