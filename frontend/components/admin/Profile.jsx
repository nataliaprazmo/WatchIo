import { Avatar } from "@mui/material";
import React from "react";
import ModeEditRoundedIcon from "@mui/icons-material/ModeEditRounded";

const Profile = () => {
	return (
		<div className="mt-10 relative">
			<div className="bg-gradient-to-tr from-secondary-violet to-purple-400 absolute bottom-48 right-4 w-full h-18" />
			<Avatar alt="admin_avatar" className="w-18 h-18" />
			<h1 className="text-32 font-semibold text-primary-orange mt-6">
				Admin Admiński
			</h1>
			<div className="grid grid-cols-4 mt-8 gap-y-2">
				<p>Email:</p>
				<p className="col-span-2">admin@mail.com</p>
				<ModeEditRoundedIcon
					sx={{
						fontSize: "18px",
						"&:hover": { path: { color: "#ff9900" } },
					}}
					className="cursor-pointer"
				/>
				<p>Nr telefonu:</p>
				<p className="col-span-2">123456789</p>
				<ModeEditRoundedIcon
					sx={{
						fontSize: "18px",
						"&:hover": { path: { color: "#ff9900" } },
					}}
					className="cursor-pointer"
				/>
			</div>
		</div>
	);
};

export default Profile;
