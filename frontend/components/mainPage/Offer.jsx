"use client";

import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import OfferService from "./OfferService";
import { offer } from "@/data";
import { useSearchParams } from "next/navigation";

import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import ChairOutlinedIcon from "@mui/icons-material/ChairOutlined";
import ScreenShareOutlinedIcon from "@mui/icons-material/ScreenShareOutlined";

const Offer = () => {
	const searchParams = useSearchParams();
	const [activeOffer, setOffer] = useState(0);
	useEffect(() => {
		switch (searchParams.get("offer")) {
			case "rooms":
				setOffer(0);
				break;
			case "sharingSub":
				setOffer(1);
				break;
			case "sharingPlaylist":
				setOffer(2);
				break;
			default:
				setOffer(0);
		}
	}, []);
	return (
		<div>
			<Nav />
			<div className="flex flex-wrap md:flex-row flex-col gap-10 items-center justify-center pt-12 mt-20">
				{offer.map((item, index) => (
					<div
						key={index}
						className={`flex flex-col items-center gap-4 border-2 ${
							activeOffer === index
								? "border-primary-orange"
								: "border-white"
						} rounded-lg px-8 py-12 cursor-pointer hover:border-primary-orange hover:px-10 transition-all duration-500`}
						onClick={() => setOffer(index)}
					>
						{index === 0 ? (
							<ChairOutlinedIcon
								className="text-5xl mb-4"
								fontSize="48px"
							/>
						) : index === 1 ? (
							<SubscriptionsOutlinedIcon
								className="text-5xl mb-4"
								fontSize="48px"
							/>
						) : (
							<ScreenShareOutlinedIcon
								className="text-5xl mb-4"
								fontSize="48px"
							/>
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
