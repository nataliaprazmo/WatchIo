import React from "react";
import { MdArrowForward } from "react-icons/md";
import RedirectButton from "./RedirectButton";
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
		<div className="benefit">
			{side === "left" && image}
			<div className="benefit__description">
				<div className="benefit__description__name">
					<MdArrowForward size="24" fill="#ff9900" />
					<p className="uppercase text-primary-orange">{name}</p>
				</div>
				<h2 className="benefit__description__title">{title}</h2>
				<p className="benefit__description__text">{description}</p>
				<div className="benefit__description__buttons">
					<RedirectButton to="/offer" variant="outlined">
						Dowiedz się więcej
					</RedirectButton>
					<RedirectButton to="/signup" variant="filled">
						Zarejestruj się
					</RedirectButton>
				</div>
			</div>
			{side === "right" && image}
		</div>
	);
};

export default Benefit;
