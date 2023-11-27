"use client";
import React, { Suspense } from "react";
import Skeleton from "@mui/material/Skeleton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Scrollbar } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
import Image from "next/image";
import dynamic from "next/dynamic";
SwiperCore.use([Autoplay, Scrollbar]);

const SerieHero = () => {
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
	const HeroSerieSlide = ({ serie }) => {
		return (
			<>
				<Image
					src={`data:image/jpg;base64, ${serie.picture}`}
					alt={serie.series_title}
					height={320}
					width={320}
					style={{ objectFit: "cover" }}
					className="h-full w-full bg-cover rounded"
				/>
			</>
		);
	};
	const HeroSerieSlider = React.lazy(async () => {
		let series = await getFilms();
		// let heroSeries = series.slice(0, 3);
		await new Promise((resolve) => setTimeout(resolve, 3000));
		if (series === null) return <></>;
		else
			return {
				default: () => (
					<div className="xl:col-span-9 lg:col-span-8 md:col-span-7 rounded-lg lg:h-96 md:h-72 h-64">
						<Swiper
							modules={[Scrollbar, Autoplay]}
							slidesPerView={1}
							scrollbar={{ hide: false }}
							centeredSlides={true}
							autoplay={{
								delay: 1500,
								disableOnInteraction: false,
							}}
							className="h-full w-full"
						>
							{/* {series &&
								series.map((heroSerie, id) => {
									<SwiperSlide key={id}>
										<HeroSerieSlide serie={heroSerie} />
									</SwiperSlide>;
								})} */}
							<SwiperSlide className="h-full w-full bg-pink-300" />
							<SwiperSlide className="h-full w-full bg-pink-300" />
							<SwiperSlide className="h-full w-full bg-pink-300" />
							<SwiperSlide className="h-full w-full bg-pink-300" />
							<SwiperSlide className="h-full w-full bg-pink-300" />
							<SwiperSlide className="h-full w-full bg-pink-300" />
						</Swiper>
					</div>
				),
			};
	});
	function HeroSerieLoader() {
		return (
			<div className="xl:col-span-9 lg:col-span-8 md:col-span-7 rounded-lg lg:h-96 md:h-72 h-64">
				<Skeleton
					animation="wave"
					variant="rounded"
					sx={{ bgcolor: "rgb(59 7 100)", height: "100%" }}
				/>
			</div>
		);
	}
	return (
		<Suspense fallback={<HeroSerieLoader />}>
			<HeroSerieSlider />
		</Suspense>
	);
};

export default dynamic(() => Promise.resolve(SerieHero), { ssr: false });
