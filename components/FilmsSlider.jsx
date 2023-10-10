"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
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
				<SwiperSlide>
					<div className="film-slide">Slide 1</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="film-slide">Slide 2</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="film-slide">Slide 3</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="film-slide">Slide 4</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="film-slide">Slide 5</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="film-slide">Slide 6</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="film-slide">Slide 7</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="film-slide">Slide 8</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default FilmsSlider;
