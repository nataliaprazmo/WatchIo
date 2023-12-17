import React from "react";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import MovieRoundedIcon from "@mui/icons-material/MovieRounded";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import Link from "next/link";
import { Divider, IconButton } from "@mui/material";
import { usePathname } from "next/navigation";
import useLogout from "../login_signup/logout";

const Options = ({ open }) => {
	const pathname = usePathname();
	const logout = useLogout();
	const opacity = `${
		open ? "opacity-100" : "opacity-0"
	} hover:text-primary-orange`;
	const Option = ({ href, text, children }) => {
		return (
			<Link href={href} className="flex items-center gap-4 ml-4">
				{children}
				<p className={opacity}>{text}</p>
			</Link>
		);
	};
	const handleLogout = () => {
		logout();
	};
	return (
		<div className="flex flex-col h-full justify-start pt-2 bg-grey-300">
			<Option href="/admin" text="Panel">
				{pathname === "/admin" ? (
					<HomeRoundedIcon
						sx={{ path: { color: "#ff9900" }, minHeight: 48 }}
					/>
				) : (
					<HomeOutlinedIcon
						sx={{
							"&:hover": { path: { color: "#ff9900" } },
							minHeight: 48,
						}}
					/>
				)}
			</Option>
			<Option href="/admin/series" text="Wszystkie serie">
				{pathname === "/admin/series" ? (
					<MovieRoundedIcon
						sx={{ path: { color: "#ff9900" }, minHeight: 48 }}
					/>
				) : (
					<MovieOutlinedIcon
						sx={{
							"&:hover": { path: { color: "#ff9900" } },
							minHeight: 48,
						}}
					/>
				)}
			</Option>
			<Option href="/admin/series/add" text="Dodaj serię">
				{pathname === "/admin/series/add" ? (
					<AddBoxRoundedIcon
						sx={{ path: { color: "#ff9900" }, minHeight: 48 }}
					/>
				) : (
					<AddBoxOutlinedIcon
						sx={{
							"&:hover": { path: { color: "#ff9900" } },
							minHeight: 48,
						}}
					/>
				)}
			</Option>
			<Divider className="bg-grey-100 mx-2 my-4" />
			<div className="ml-3">
				<IconButton onClick={handleLogout}>
					<LogoutRoundedIcon
						sx={{
							"&:hover": { path: { color: "#ff9900" } },
							minHeight: 48,
						}}
					/>
					<p className={`${opacity} text-base pl-3`}>Wyloguj się</p>
				</IconButton>
			</div>
		</div>
	);
};

export default Options;
