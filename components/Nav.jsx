import React from "react";
import Image from "next/image";
import RedirectButton from "./RedirectButton";

const Nav = ({ main }) => {
	return (
		<div className="nav">
			<div className="nav__menu">
				<RedirectButton to="/">Strona główna</RedirectButton>
				{main === true && (
					<>
						<RedirectButton to="/offer">Oferta</RedirectButton>
						<RedirectButton to="/subscribtions">
							Subskrypcje
						</RedirectButton>
					</>
				)}
			</div>
			<div className="nav__logo">
				<Image
					src="/images/logo.svg"
					height={48}
					width={376.5}
					style={{ objectFit: "contain" }}
					alt="logo"
				/>
			</div>
			<div className="nav__buttons">
				<RedirectButton to="/login" variant="outlined">
					Zaloguj się
				</RedirectButton>
				<RedirectButton to="/signup" variant="filled">
					Zarejestruj się
				</RedirectButton>
			</div>
		</div>
	);
};

export default Nav;
