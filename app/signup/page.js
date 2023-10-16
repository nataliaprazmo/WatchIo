import React from "react";
import { Nav, SignupContainer } from "@/components/mainPage";
import Link from "next/link";

export default function Page() {
	return (
		<main className="overflow-hidden flex flex-col items-center">
			<Nav />
			<SignupContainer />
			<p className="mt-4 font-medium text-[16px]">
				Posiadasz już konto?{" "}
				<Link href="login" className="text-primary-orange pl-1">
					Zaloguj się
				</Link>
			</p>
		</main>
	);
}
