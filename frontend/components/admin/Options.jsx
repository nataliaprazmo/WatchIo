import React from "react";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import MovieRoundedIcon from "@mui/icons-material/MovieRounded";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import Link from "next/link";
import { Divider } from "@mui/material";
import { usePathname } from "next/navigation";

const Options = ({ open }) => {
	const pathname = usePathname();
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
	return (
		<div className="flex flex-col h-full justify-start pt-2">
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
			<Option href="/" text="Wyloguj się">
				<LogoutRoundedIcon
					sx={{
						"&:hover": { path: { color: "#ff9900" } },
						minHeight: 48,
					}}
				/>
			</Option>
		</div>
	);
};

export default Options;
