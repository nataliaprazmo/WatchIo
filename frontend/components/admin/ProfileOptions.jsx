import { MenuItem } from "@mui/material";
import React from "react";
const settings = ["Konto", "Ustawienia", "Panel"];
const ProfileOptions = ({ handleLogout, setAnchorElUser }) => {
	return (
		<>
			{settings.map((setting) => (
				<MenuItem
					key={setting}
					onClick={() => setAnchorElUser(null)}
					className="hover:text-primary-orange"
				>
					{setting}
				</MenuItem>
			))}
			<MenuItem
				onClick={handleLogout}
				className="hover:text-primary-orange"
			>
				Wyloguj się
			</MenuItem>
		</>
	);
};

export default ProfileOptions;
