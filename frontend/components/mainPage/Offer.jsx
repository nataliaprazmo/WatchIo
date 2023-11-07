"use client";

import React, { useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import OfferService from "./OfferService";
import { offer } from "@/data";

import TvRoundedIcon from "@mui/icons-material/TvRounded";
import LightRoundedIcon from "@mui/icons-material/LightRounded";
import AddToQueueRoundedIcon from "@mui/icons-material/AddToQueueRounded";

const Offer = () => {
	const [activeOffer, setOffer] = useState(0);
	return (
		<div>
			<Nav />
			<div className="flex flex-wrap md:flex-row flex-col gap-10 items-center justify-center pt-12 mt-20">
				{offer.map((item, index) => (
					<div
						key={index}
						className="flex flex-col items-center gap-4 border-2 border-white rounded-lg px-8 py-12 cursor-pointer active:border-primary-orange hover:border-primary-orange hover:px-10 transition-all duration-500"
						onClick={() => setOffer(index)}
					>
						{index === 0 ? (
							<LightRoundedIcon className="text-5xl mb-4" />
						) : index === 1 ? (
							<TvRoundedIcon className="text-5xl mb-4" />
						) : (
							<AddToQueueRoundedIcon className="text-5xl mb-4" />
						)}
						<div className="md:w-[300px] w-[235px] h-[1.5px] bg-white" />
						<h1 className="md:text-2xl text-xl font-semibold text-primary-orange">
							{item.title}
						</h1>
					</div>
				))}
			</div>
			<div className="pb-18 pt-8 ">
				<OfferService
					id={offer[activeOffer].id}
					title={offer[activeOffer].title}
					description={offer[activeOffer].description}
					image={offer[activeOffer].image}
					tutorial={offer[activeOffer].tutorial}
				/>
			</div>
			<Footer />
		</div>
	);
};

export default Offer;
