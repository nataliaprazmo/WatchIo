import { IconButton, TableCell } from "@mui/material";
import React, { useState } from "react";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useRouter } from "next/navigation";
import DeleteDialog from "./DeleteDialog";

const Actions = ({ seriesId, setOpenSnackbar, getFilms }) => {
	const router = useRouter();
	const [open, setOpen] = useState(false);
	const handleClickOpen = () => {
		setOpen(true);
	};
	return (
		<TableCell align="center" className="w-fit">
			<IconButton
				sx={{ "&:hover": { path: { color: "#ff9900" } } }}
				onClick={() => router.push(`/admin/series/${seriesId}`)}
			>
				<VisibilityOutlinedIcon />
			</IconButton>
			<IconButton
				sx={{ "&:hover": { path: { color: "#ff9900" } } }}
				onClick={handleClickOpen}
			>
				<DeleteOutlinedIcon />
			</IconButton>
			<DeleteDialog
				open={open}
				setOpen={setOpen}
				setOpenSnackbar={setOpenSnackbar}
				seriesId={seriesId}
				getFilms={getFilms}
			/>
		</TableCell>
	);
};

export default Actions;
