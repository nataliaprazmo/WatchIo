import { MenuItem } from "@mui/material";
import Link from "next/link";
import React from "react";
const UserProfileOptions = ({ handleLogout, setAnchorElUser }) => {
	return (
		<>
			<MenuItem
				onClick={() => setAnchorElUser(null)}
				className="hover:text-primary-orange"
			>
				<Link href="/user">Panel</Link>
			</MenuItem>
			<MenuItem
				onClick={() => setAnchorElUser(null)}
				className="hover:text-primary-orange"
			>
				<Link href="/user/profile">Konto</Link>
			</MenuItem>
			<MenuItem
				onClick={() => setAnchorElUser(null)}
				className="hover:text-primary-orange"
			>
				<Link href="/user/settings">Ustawienia</Link>
			</MenuItem>
			<MenuItem
				onClick={handleLogout}
				className="hover:text-primary-orange font-montserrat"
			>
				Wyloguj się
			</MenuItem>
		</>
	);
};

export default UserProfileOptions;
