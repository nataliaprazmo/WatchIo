import { IconButton, TableCell } from "@mui/material";
import React from "react";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";

const Actions = () => {
	return (
		<TableCell align="center" className="w-fit">
			<IconButton sx={{ "&:hover": { path: { color: "#ff9900" } } }}>
				<VisibilityOutlinedIcon />
			</IconButton>
			<IconButton sx={{ "&:hover": { path: { color: "#ff9900" } } }}>
				<DriveFileRenameOutlineOutlinedIcon />
			</IconButton>
		</TableCell>
	);
};

export default Actions;
