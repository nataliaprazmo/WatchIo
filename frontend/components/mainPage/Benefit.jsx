import React from "react";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { LinkButton } from "@/components/buttons";
import Image from "next/image";

const Benefit = ({ side, imageSrc, name, title, description, more }) => {
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
		<div className="flex xl:flex-row flex-col gap-16 items-center justify-between px-13 py-18">
			{side === "left" && image}
			<div className="flex flex-col justify-center relative">
				<div className="flex items-center gap-2 mb-8">
					<ArrowForwardRoundedIcon
						sx={{ fontSize: "20px", path: { color: "#ff9900" } }}
					/>
					<p className="uppercase text-primary-orange">{name}</p>
				</div>
				<h2 className="2xl:text-5xl sm:text-[40px] text-32 leading-[57.6px] font-bold">
					{title}
				</h2>
				<p className="text-base leading-7 font-medium mt-4">
					{description}
				</p>
				<div className="flex sm:flex-row flex-col gap-8 mt-4">
					<LinkButton to={more} variant="outlined">
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
