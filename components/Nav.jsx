import React from "react";
import Image from "next/image";
import RedirectButton from "./RedirectButton";

const Nav = ({ main }) => {
	return (
		<div className="flex flex-row justify-between items-center bg-grey-300 px-[50px] w-full h-20 fixed right-0 top-0 z-50">
			<div className="flex space-x-6 xl:text-[16px] text-[12px] bg-grey-300">
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
			<div className="xl:max-w-[300px] lg:max-w-[200px] max-w-[150px] bg-grey-300">
				<Image
					src="/images/logo.svg"
					height={48}
					width={376.5}
					style={{ objectFit: "contain" }}
					alt="logo"
				/>
			</div>
			<div className="flex items-center space-x-[32px] bg-grey-300">
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
