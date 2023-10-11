import React from "react";
import Image from "next/image";
import { RedirectButton, Plans } from "./";

const Hero = () => {
	return (
		<div className="flex xl:flex-row flex-col relative z-0 py-[72px] px-[50px] gap-5 items-center justify-between">
			<div>
				<h1 className="2xl:text-[64px] sm:text-[56px] text-[48px] font-bold leading-[4.8rem] tracking-tight">
					Zacznij oglądać już dziś!
				</h1>
				<p className="text-[16px] font-medium mt-[24px] max-w-[610px]">
					Poniżej przedstawiamy coś tam ofertę oraz zachętę do
					subskrypcji. Llallala. Fajna zachęta do zalogowania się w
					serwisie.
				</p>
				<div className="flex sm:flex-row flex-col gap-[32px] mt-[32px]">
					<RedirectButton to="/offer" variant="outlined">
						Sprawdź ofertę
					</RedirectButton>
					<RedirectButton to="/signup" variant="filled">
						Zarejestruj się
					</RedirectButton>
				</div>
			</div>
			<div>
				<Plans />
			</div>
		</div>
	);
};

export default Hero;
