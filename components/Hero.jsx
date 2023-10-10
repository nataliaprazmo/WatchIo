import React from "react";
import Image from "next/image";
import { RedirectButton, Plans } from "./";

const Hero = () => {
	return (
		<div className="hero">
			<div>
				<h1 className="hero__title">Zacznij oglądać już dziś!</h1>
				<p className="hero__subtitle">
					Poniżej przedstawiamy coś tam ofertę oraz zachętę do
					subskrypcji. Llallala. Fajna zachęta do zalogowania się w
					serwisie.
				</p>
				<div className="hero__buttons">
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
