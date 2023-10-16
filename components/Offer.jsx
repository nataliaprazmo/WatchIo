import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Benefits from "./Benefits";

const Offer = () => {
	return (
		<div className="pt-18">
			<Nav main={true} />
			<Benefits />
			<Footer />
		</div>
	);
};

export default Offer;
