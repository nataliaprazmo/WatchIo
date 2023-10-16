import React from "react";
import LinkButton from "../buttons/LinkButton";
import LinkText from "../buttons/LinkText";
import Logo from "./Logo";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

const Nav = () => {
	const drawer = <div></div>;
	return (
		<div className="flex flex-row justify-between items-center bg-grey-300 xm:px-[50px] px-6 w-full h-20 fixed right-0 top-0 z-50">
			<div className="md:flex space-x-6 xl:text-[16px] text-[12px] bg-grey-300 hidden">
				<LinkText to="/">Strona główna</LinkText>
				<LinkText to="/offer">Oferta</LinkText>
				<LinkText to="/subscriptions">Subskrypcje</LinkText>
			</div>
			<div className="flex bg-grey-300 md:hidden">
				<MenuRoundedIcon
					className="text-[32px] cursor-pointer"
					sx={{ "&:hover": { path: { color: "#ff9900" } } }}
				/>
			</div>
			<Logo classes="xl:max-w-[300px] lg:max-w-[200px] md:max-w-[150px] max-w-[200px]" />
			<div className="md:flex items-center space-x-[32px] bg-grey-300 hidden">
				<LinkButton to="/login" variant="outlined">
					Zaloguj się
				</LinkButton>
				<LinkButton to="/signup" variant="filled">
					Zarejestruj się
				</LinkButton>
			</div>
			<div className="flex items-center space-x-[16px] bg-grey-300 md:hidden">
				<LinkButton to="/signup">
					<LoginRoundedIcon
						className="text-[32px] hover:text-primary-orange"
						sx={{ "&:hover": { path: { color: "#ff9900" } } }}
					/>
				</LinkButton>
			</div>
		</div>
	);
};

export default Nav;
