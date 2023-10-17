"use client";

import React, { useState } from "react";
import LinkButton from "../buttons/LinkButton";
import LinkText from "../buttons/LinkText";
import Logo from "./Logo";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { styled, useTheme } from "@mui/material/styles";
import { IconButton } from "@mui/material";
import { Drawer } from "@mui/material";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import Divider from "@mui/material/Divider";

const DrawerHeader = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	padding: theme.spacing(0, 1),
	...theme.mixins.toolbar,
	justifyContent: "flex-end",
	height: "80px",
}));

const Nav = () => {
	const theme = useTheme();
	const [open, setOpen] = useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};
	return (
		<div className="flex flex-row justify-between items-center bg-grey-300 xm:px-[50px] px-6 w-full h-20 fixed right-0 top-0 z-50">
			<div className="md:flex space-x-6 xl:text-[16px] text-[12px] bg-grey-300 hidden">
				<LinkText to="/">Strona główna</LinkText>
				<LinkText to="/offer">Oferta</LinkText>
				<LinkText to="/subscriptions">Subskrypcje</LinkText>
			</div>
			<div className="flex bg-grey-300 md:hidden">
				<IconButton
					color="inherit"
					aria-label="open drawer"
					onClick={handleDrawerOpen}
					edge="start"
					sx={{ mr: 2, ...(open && { display: "none" }) }}
				>
					<MenuRoundedIcon
						className="text-[32px] cursor-pointer"
						sx={{ "&:hover": { path: { color: "#ff9900" } } }}
					/>
				</IconButton>
			</div>
			<Drawer
				sx={{
					position: "absolute",
					width: "75%",
					flexShrink: 0,
					"& .MuiDrawer-paper": {
						width: "75%",
						boxSizing: "border-box",
						backgroundColor: "#101010",
						gap: "24px",
						paddingLeft: "32px",
						paddingRight: "32px",
					},
				}}
				variant="persistent"
				anchor="left"
				open={open}
				className="md:hidden flex"
			>
				<DrawerHeader className="bg-grey-300">
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === "ltr" ? (
							<ArrowBackIosNewRoundedIcon
								sx={{
									fontSize: "32px",
									"&:hover": { path: { color: "#ff9900" } },
								}}
							/>
						) : (
							<ArrowForwardIosRoundedIcon
								sx={{
									fontSize: "32px",
									"&:hover": { path: { color: "#ff9900" } },
								}}
							/>
						)}
					</IconButton>
				</DrawerHeader>
				<Divider />
				<LinkButton to="/">Strona główna</LinkButton>
				<LinkButton to="/offer">Oferta</LinkButton>
				<LinkButton to="/subscriptions">Subskrypcje</LinkButton>
				<Divider />
				<LinkButton to="/login">Zaloguj się</LinkButton>
				<LinkButton to="/signup">Zarejestruj się</LinkButton>
			</Drawer>
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
