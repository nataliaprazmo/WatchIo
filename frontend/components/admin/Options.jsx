import React from "react";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import AddToQueueRoundedIcon from "@mui/icons-material/AddToQueueRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import Link from "next/link";
import { Divider } from "@mui/material";

const Options = ({ open }) => {
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
			<Option href="/admin" text="Wszystkie serie">
				<MovieOutlinedIcon
					sx={{
						"&:hover": { path: { color: "#ff9900" } },
						minHeight: 48,
					}}
				/>
			</Option>
			<Option href="/admin/series/add" text="Dodaj serię">
				<AddToQueueRoundedIcon
					sx={{
						"&:hover": { path: { color: "#ff9900" } },
						minHeight: 48,
					}}
				/>
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
