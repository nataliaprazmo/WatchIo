import React from "react";
import RedirectButton from "./RedirectButton";

const Plan = ({ type, price, description, button, main }) => {
	return (
		<div
			className={
				main === true
					? "hero__plan border-primary-orange shadow-3xl"
					: "hero__plan border-white"
			}
		>
			<p className="hero__plan__type">{type}</p>
			<div className="divider-sm" />
			<h3 className="hero__plan__price">{price}/rok</h3>
			<div className="divider-lg" />
			<div className="hero__plan__description">
				{description.map((item, id) => {
					return <p key={id}>{item}</p>;
				})}
			</div>
			<RedirectButton to="signup" variant={button}>
				Zarejestruj się
			</RedirectButton>
		</div>
	);
};

export default Plan;
