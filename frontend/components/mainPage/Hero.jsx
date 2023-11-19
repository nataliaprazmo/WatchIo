import React from "react";
import Plans from "./Plans";
import { LinkButton } from "@/components/buttons";

const Hero = () => {
	return (
		<div className="flex xl:flex-row flex-col relative z-0 pt-18 pb-14 mt-10 px-13 gap-5 items-center justify-between">
			<div>
				<h1 className="2xl:text-[64px] sm:text-[56px] text-5xl font-bold leading-[4.8rem] tracking-tight">
					Zacznij oglądać już dziś!
				</h1>
				<p className="text-base font-medium mt-6 max-w-[610px]">
					Poniżej przedstawiamy naszą ofertę oraz plany subskrypcyjne.
					Zachęcamy do zarejestrowania się w naszym serwisie.
				</p>
				<div className="flex sm:flex-row flex-col gap-8 mt-8">
					<LinkButton to="/offer" variant="outlined">
						Sprawdź ofertę
					</LinkButton>
					<LinkButton to="/signup" variant="filled">
						Zarejestruj się
					</LinkButton>
				</div>
			</div>
			<div>
				<Plans />
			</div>
		</div>
	);
};

export default Hero;
