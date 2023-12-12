import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import FilmSlide from "./FilmSlide";
SwiperCore.use([Navigation, FreeMode, Autoplay]);

const Films = ({ series }) => {
	return (
		<>
			<Swiper
				modules={[Navigation, FreeMode, Autoplay]}
				spaceBetween={32}
				centeredSlides={true}
				navigation={true}
				loop={true}
				autoplay={{
					delay: 1500,
					disableOnInteraction: false,
				}}
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
				{series &&
					series.map((serie, id) => (
						<SwiperSlide key={id} className="main-slide">
							<FilmSlide serie={serie} />
						</SwiperSlide>
					))}
			</Swiper>
		</>
	);
};

export default Films;
