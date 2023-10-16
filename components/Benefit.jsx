import React from "react";
import { MdArrowForward } from "react-icons/md";
import { LinkButton } from "@/components/buttons";
import Image from "next/image";

const Benefit = ({ side, imageSrc, name, title, description }) => {
	let image = (
		<Image
			src={imageSrc}
			height={306}
			width={894}
			style={{ objectFit: "contain" }}
			alt="benefit"
		/>
	);
	return (
		<div className="flex xl:flex-row flex-col gap-[64px] items-center justify-between px-[50px] py-18">
			{side === "left" && image}
			<div className="flex flex-col justify-center relative">
				<div className="flex flex-row gap-2 mb-8">
					<MdArrowForward size="24" fill="#ff9900" />
					<p className="uppercase text-primary-orange">{name}</p>
				</div>
				<h2 className="2xl:text-[48px] sm:text-[40px] text-[32px] leading-[57.6px] font-bold">
					{title}
				</h2>
				<p className="text-[16px] leading-[28px] font-medium mt-4">
					{description}
				</p>
				<div className="flex sm:flex-row flex-col gap-[32px] mt-4">
					<LinkButton to="/offer" variant="outlined">
						Dowiedz się więcej
					</LinkButton>
					<LinkButton to="/signup" variant="filled">
						Zarejestruj się
					</LinkButton>
				</div>
			</div>
			{side === "right" && image}
		</div>
	);
};

export default Benefit;
