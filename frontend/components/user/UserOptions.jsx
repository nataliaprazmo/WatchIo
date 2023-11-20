import React from "react";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import SubscriptionsRoundedIcon from "@mui/icons-material/SubscriptionsRounded";
import ChairOutlinedIcon from "@mui/icons-material/ChairOutlined";
import ChairRoundedIcon from "@mui/icons-material/ChairRounded";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import FormatListBulletedRoundedIcon from "@mui/icons-material/FormatListBulletedRounded";
import Link from "next/link";
import { Divider, IconButton } from "@mui/material";
import { usePathname } from "next/navigation";
import { useAuth } from "@/app/AuthContext";

const UserOptions = ({ open }) => {
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
	const { logout } = useAuth();
	const handleLogout = () => {
		logout();
	};
	return (
		<div className="flex flex-col h-full justify-start pt-2">
			<Option href="/user" text="Strona główna">
				{pathname === "/user" ? (
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
			<Option href="/user/watchlist" text="Lista do obejrzenia">
				{pathname === "/user/watchlist" ? (
					<FormatListBulletedRoundedIcon
						sx={{
							path: { color: "#ff9900" },
							fontSize: "22px",
							minHeight: 48,
						}}
						className="mr-[2px]"
					/>
				) : (
					<FormatListBulletedRoundedIcon
						sx={{
							"&:hover": { path: { color: "#ff9900" } },
							fontSize: "22px",
							minHeight: 48,
						}}
						className="mr-[2px]"
					/>
				)}
			</Option>
			<Option href="/user/rooms" text="Pokoje">
				{pathname === "/user/rooms" ? (
					<ChairRoundedIcon
						sx={{
							path: { color: "#ff9900" },
							fontSize: "22px",
							minHeight: 48,
						}}
					/>
				) : (
					<ChairOutlinedIcon
						sx={{
							"&:hover": { path: { color: "#ff9900" } },
							fontSize: "22px",
							minHeight: 48,
						}}
					/>
				)}
			</Option>
			<Option href="/user/subscriptionSettings" text="Subskrypcje">
				{pathname === "/user/subscriptionSettings" ? (
					<SubscriptionsRoundedIcon
						sx={{
							path: { color: "#ff9900" },
							fontSize: "24px",
							minHeight: 48,
						}}
					/>
				) : (
					<SubscriptionsOutlinedIcon
						sx={{
							"&:hover": { path: { color: "#ff9900" } },
							fontSize: "24px",
							minHeight: 48,
						}}
					/>
				)}
			</Option>
			<Divider className="bg-grey-100 mx-2 my-4" />
			<Option href="/user/settings" text="Ustawienia">
				{pathname === "/user/settings" ? (
					<SettingsRoundedIcon
						sx={{
							path: { color: "#ff9900" },
							minHeight: 48,
						}}
					/>
				) : (
					<SettingsOutlinedIcon
						sx={{
							"&:hover": { path: { color: "#ff9900" } },
							minHeight: 48,
						}}
					/>
				)}
			</Option>
			<div className="pl-3">
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

export default UserOptions;
