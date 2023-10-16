import React from "react";
import LinkButton from "./buttons/LinkButton";
import LinkText from "./buttons/LinkText";
import Logo from "./Logo";

const Nav = ({ main }) => {
	return (
		<div className="flex flex-row justify-between items-center bg-grey-300 px-[50px] w-full h-20 fixed right-0 top-0 z-50">
			<div className="flex space-x-6 xl:text-[16px] text-[12px] bg-grey-300">
				<LinkText to="/">Strona główna</LinkText>
				{main === true && (
					<>
						<LinkText to="/offer">Oferta</LinkText>
						<LinkText to="/subscriptions">Subskrypcje</LinkText>
					</>
				)}
			</div>
			<Logo classes="xl:max-w-[300px] lg:max-w-[200px] max-w-[150px]" />
			<div className="flex items-center space-x-[32px] bg-grey-300">
				<LinkButton to="/login" variant="outlined">
					Zaloguj się
				</LinkButton>
				<LinkButton to="/signup" variant="filled">
					Zarejestruj się
				</LinkButton>
			</div>
		</div>
	);
};

export default Nav;
