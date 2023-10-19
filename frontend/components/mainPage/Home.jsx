import React from "react";
import {
	Nav,
	Hero,
	FilmsSlider,
	Benefits,
	Footer,
	FaqSection,
} from "@/components/mainPage";

const Home = () => {
	return (
		<>
			<Nav />
			<Hero />
			<FilmsSlider />
			<Benefits />
			<FaqSection />
			<Footer />
		</>
	);
};

export default Home;
