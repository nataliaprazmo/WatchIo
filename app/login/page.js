import React from "react";
import { Nav } from "@/components/mainPage";
import { LoginContainer, Question } from "@/components/login_signup";

export default function Page() {
	return (
		<main className="overflow-hidden flex flex-col items-center">
			<Nav />
			<LoginContainer />
			<Question
				question="Nie posiadasz jeszcze konta?"
				link="/signup"
				text="Zarejestruj się"
			/>
		</main>
	);
}
