import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import FooterGroup from "./FooterGroup";
import { pages, policies } from "@/data";

const Footer = () => {
	return (
		<div className="bg-grey-300 px-[5%] py-18 ">
			<div className="lg:grid lg:grid-cols-5 flex md:flex-row flex-col gap-4">
				<Logo classes="xl:max-w-[220px] lg:max-w-[150px] max-w-[100px]" />
				{pages.map((page, id) => (
					<FooterGroup
						key={id}
						main_page={page.main_page}
						subpages={page.subpages}
					/>
				))}
				<div>
					<p className="font-bold text-[16px]">Kontakt</p>
					<p className="font-regular text-[14px]">
						contact@watchio.com.pl
					</p>
				</div>
			</div>
			<div className="md:grid md:grid-cols-5 flex flex-col-reverse gap-4 mt-16">
				<p className="font-regular text-[12px]">
					&copy; 2023 Radłowski K. Prażmo N.
				</p>
				{policies.map((policy, id) => (
					<Link
						key={id}
						href={policy.href}
						className="font-semibold text-[12px] hover:text-primary-orange"
					>
						{policy.name}
					</Link>
				))}
			</div>
		</div>
	);
};

export default Footer;
