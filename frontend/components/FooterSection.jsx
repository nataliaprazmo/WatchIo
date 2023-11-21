import React from "react";
import { Logo } from "./mainPage";

const FooterSection = () => {
	return (
		<div className="py-12 pl-24 pr-8 bg-neutral-900 flex flex-col justify-center items-center gap-8">
			<Logo classes="w-56 mr-10" />
			<div className="flex sm:flex-row flex-col items-center w-fit sm:gap-8 gap-3">
				<p className="font-regular text-sm">contact@watchio.com.pl</p>
				<p className="sm:block hidden">|</p>
				<p className="font-regular text-xs">
					&copy; 2023 Prażmo N. Radłowski K.
				</p>
			</div>
		</div>
	);
};

export default FooterSection;
