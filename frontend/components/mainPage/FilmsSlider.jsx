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
			const response = await fetch(
				"http://localhost:5000/api/series?howMany=10",
				{
					method: "GET",
				}
			);
			if (response.status === 200) {
				await new Promise((resolve) => setTimeout(resolve, 2000));
				const res = response.json();
				console.log(res.data.message);
				return res.data.series;
			} else return [];
		} catch (error) {
			console.log(error);
			return [];
		}
	};
	useEffect(() => {
		getFilms();
	}, []);
	async function Films() {
		// let { series } = await getFilms();
		await new Promise((resolve) => {
			setTimeout(resolve, 3000);
		});
		const emptyBlocks = [];
		for (let i = 0; i < 10; i++) {
			emptyBlocks.push(
				<div className="bg-secondary-violet h-80 w-full rounded 3xl:my-18 2xl:my-16 lg:my-12 md:my-10 my-8"></div>
			);
		}
		return (
			<>
				{emptyBlocks.map((block, index) => {
					<SwiperSlide key={index}>{block}</SwiperSlide>;
				})}
				{/* {series &&
					series.map((serie, id) => (
						<SwiperSlide key={id}>
							<div className="h-80 w-full rounded 3xl:my-18 2xl:my-16 lg:my-12 md:my-10 my-8">
								<Image
									key={id}
									src={serie.series_thumbnail}
									height={320}
									width={320}
									style={{ objectFit: "contain" }}
									alt="series_thumb"
								/>
							</div>
						</SwiperSlide>
					))} */}
			</>
		);
	}
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
				{/* <Suspense fallback={<LoadingFilms />}>
					<Films />
				</Suspense> */}
				<SwiperSlide>
					<div className="h-80 w-full rounded 3xl:my-18 2xl:my-16 lg:my-12 md:my-10 my-8">
						<Skeleton
							animation="wave"
							variant="rounded"
							width={300}
							height={320}
							className="bg-grey-200"
						/>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="h-80 w-full rounded 3xl:my-18 2xl:my-16 lg:my-12 md:my-10 my-8">
						<Skeleton
							animation="wave"
							variant="rounded"
							width={300}
							height={320}
							className="bg-grey-200"
						/>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="h-80 w-full rounded 3xl:my-18 2xl:my-16 lg:my-12 md:my-10 my-8">
						<Skeleton
							animation="wave"
							variant="rounded"
							width={300}
							height={320}
							className="bg-grey-200"
						/>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="h-80 w-full rounded 3xl:my-18 2xl:my-16 lg:my-12 md:my-10 my-8">
						<Skeleton
							animation="wave"
							variant="rounded"
							width={300}
							height={320}
							className="bg-grey-200"
						/>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="h-80 w-full rounded 3xl:my-18 2xl:my-16 lg:my-12 md:my-10 my-8">
						<Skeleton
							animation="wave"
							variant="rounded"
							width={300}
							height={320}
							className="bg-grey-200"
						/>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="h-80 w-full rounded 3xl:my-18 2xl:my-16 lg:my-12 md:my-10 my-8">
						<Skeleton
							animation="wave"
							variant="rounded"
							width={300}
							height={320}
							className="bg-grey-200"
						/>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="h-80 w-full rounded 3xl:my-18 2xl:my-16 lg:my-12 md:my-10 my-8">
						<Skeleton
							animation="wave"
							variant="rounded"
							width={300}
							height={320}
							className="bg-grey-200"
						/>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="h-80 w-full rounded 3xl:my-18 2xl:my-16 lg:my-12 md:my-10 my-8">
						<Skeleton
							animation="wave"
							variant="rounded"
							width={300}
							height={320}
							className="bg-grey-200"
						/>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="h-80 w-full rounded 3xl:my-18 2xl:my-16 lg:my-12 md:my-10 my-8">
						<Skeleton
							animation="wave"
							variant="rounded"
							width={300}
							height={320}
							className="bg-grey-200"
						/>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default FilmsSlider;
