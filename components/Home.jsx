import React from "react";
import {
	Nav,
	Hero,
	FilmsSlider,
	Benefits,
	Footer,
	FaqSection,
} from "@/components";

const Home = () => {
	return (
		<>
			<Nav main={true} />
			<Hero />
			<FilmsSlider />
			<Benefits />
			<FaqSection />
			<Footer />
		</>
	);
};

export default Home;
