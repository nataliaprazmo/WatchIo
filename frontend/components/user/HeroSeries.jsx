import React from "react";
import HeroSerieSlide from "./HeroSeriesSlide";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Scrollbar } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
SwiperCore.use([Autoplay, Scrollbar]);

const HeroSeries = ({ series, redirect }) => {
	return (
		<div className="xl:col-span-9 lg:col-span-8 md:col-span-7 rounded-lg lg:h-96 md:h-72 h-64 relative">
			<Swiper
				modules={[Scrollbar, Autoplay]}
				slidesPerView={1}
				scrollbar={{
					hide: false,
					el: ".swiper-scrollbar",
				}}
				centeredSlides={true}
				loop={true}
				autoplay={{
					delay: 3000,
					disableOnInteraction: false,
				}}
				className="h-full w-full rounded relative"
			>
				{series &&
					series.map((serie, id) => (
						<SwiperSlide key={id} className="h-full w-full">
							<HeroSerieSlide
								serie={serie}
								redirect={() => redirect(serie._id)}
							/>
						</SwiperSlide>
					))}
			</Swiper>
			<div className="swiper-scrollbar" />
		</div>
	);
};

export default HeroSeries;
