import { MenuItem } from "@mui/material";
import Link from "next/link";
import React from "react";
const ProfileOptions = ({ handleLogout, setAnchorElUser }) => {
	return (
		<>
			<MenuItem
				onClick={() => setAnchorElUser(null)}
				className="hover:text-primary-orange"
			>
				<Link href="/admin/profile">Konto</Link>
			</MenuItem>
			<MenuItem
				onClick={() => setAnchorElUser(null)}
				className="hover:text-primary-orange"
			>
				<Link href="/admin">Panel</Link>
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

export default ProfileOptions;
