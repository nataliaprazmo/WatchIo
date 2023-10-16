import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Plans from "./Plans";

const Subscriptions = () => {
	return (
		<div className="pt-18">
			<Nav main={true} />
			<Plans />
			<Footer />
		</div>
	);
};

export default Subscriptions;
