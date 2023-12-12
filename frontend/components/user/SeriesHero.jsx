"use client";
import React, { Suspense } from "react";
import HeroSerieLoader from "./loading";
import HeroSerieSlide from "./HeroSeriesSlide";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Scrollbar } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
SwiperCore.use([Autoplay, Scrollbar]);

const SeriesHero = () => {
	const router = useRouter();
	const redirect = (id) => router.push(`/user/series/${id}`);
	const getFilms = async () => {
		try {
			const response = await fetch("http://localhost:5000/api/series", {
				method: "GET",
			});
			if (response.status === 200) {
				const res = await response.json();
				return res.data.series;
			} else return [];
		} catch (error) {
			console.log(error);
			return [];
		}
	};
	const HeroSerieSlider = React.lazy(async () => {
		let series = await getFilms();
		let heroSeries = series.slice(0, 4);
		await new Promise((resolve) => setTimeout(resolve, 500));
		if (series === null) return <></>;
		else
			return {
				default: () => (
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
							className="h-full w-full rounded"
						>
							{heroSeries && (
								<>
									{heroSeries.map((serie, id) => (
										<SwiperSlide
											key={id}
											className="h-full w-full"
										>
											<HeroSerieSlide
												serie={serie}
												redirect={() =>
													redirect(serie._id)
												}
											/>
										</SwiperSlide>
									))}
								</>
							)}
							<div className="swiper-scrollbar absolute right-0 bg-secondary-violet"></div>
						</Swiper>
					</div>
				),
			};
	});
	return (
		<Suspense fallback={<HeroSerieLoader />}>
			<HeroSerieSlider />
		</Suspense>
	);
};

export default dynamic(() => Promise.resolve(SeriesHero), { ssr: false });
