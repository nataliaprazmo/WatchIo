import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import OfferService from "./OfferService";
import { offer } from "@/data";

const Offer = () => {
	return (
		<div>
			<Nav />
			<div className="py-18">
				{offer.map((service, id) => (
					<OfferService
						key={id}
						id={service.id}
						title={service.title}
						description={service.description}
						image={service.image}
						tutorial={service.tutorial}
					/>
				))}
			</div>
			<Footer />
		</div>
	);
};

export default Offer;
