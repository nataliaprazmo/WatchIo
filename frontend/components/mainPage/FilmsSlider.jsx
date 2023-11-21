"use client";
import React, { Suspense, useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation } from "swiper/modules";
import Skeleton from "@mui/material/Skeleton";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import LoadingFilms from "./loading";
SwiperCore.use([Navigation, FreeMode, Autoplay]);

const FilmsSlider = () => {
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
	const Films = React.lazy(async () => {
		const series = await getFilms();
		await new Promise((resolve) => setTimeout(resolve, 2000));
		return {
			default: () => (
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
					{series &&
						series.map((serie, id) => (
							<SwiperSlide key={id}>
								<div className="h-80 w-full rounded 3xl:my-18 2xl:my-16 lg:my-12 md:my-10 my-8">
									{/* <Image
										key={id}
										src={serie.series_thumbnail}
										height={320}
										width={320}
										style={{ objectFit: "contain" }}
										alt="series_thumb"
									/> */}
									{serie.series_title}
								</div>
							</SwiperSlide>
						))}
				</Swiper>
			),
		};
	});
	return (
		<div>
			<Suspense fallback={<LoadingFilms />}>
				<Films />
			</Suspense>
			{/* <LoadingFilms /> */}
		</div>
	);
};

export default FilmsSlider;
