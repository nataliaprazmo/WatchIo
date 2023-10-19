import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Plans from "./Plans";

const Subscriptions = () => {
	return (
		<div className="pt-18">
			<Nav />
			<div className="pt-10 pb-18">
				<Plans />
			</div>
			<Footer />
		</div>
	);
};

export default Subscriptions;
