import React from "react";
import { Nav } from "@/components/mainPage";
import { SignupContainer, Question } from "@/components/login_signup";

export default function Page() {
	return (
		<main className="overflow-hidden flex flex-col items-center">
			<Nav />
			<SignupContainer />
			<Question
				question="Posiadasz już konto?"
				link="/login"
				text="Zaloguj się"
			/>
		</main>
	);
}
