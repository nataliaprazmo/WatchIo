import Image from "next/image";
import {
	Nav,
	Hero,
	FilmsSlider,
	Benefits,
	Footer,
	FaqSection,
} from "@/components";

export default function Home() {
	return (
		<main className="overflow-hidden">
			<Nav main={true} />
			<Hero />
			<FilmsSlider />
			<Benefits />
			<FaqSection />
			<Footer />
		</main>
	);
}
