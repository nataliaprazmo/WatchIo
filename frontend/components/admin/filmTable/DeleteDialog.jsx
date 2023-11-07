import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	TextField,
} from "@mui/material";
import React, { useState } from "react";

const DeleteDialog = ({ open, setOpen }) => {
	const handleClose = () => {
		setOpen(false);
	};
	const [password, setPassword] = useState("");
	const handleChange = (e) => {
		e.preventDefault;
		setPassword(e.target.value);
	};
	const handleDelete = () => {
		setOpen(false);
	};
	return (
		<Dialog open={open} onClose={handleClose}>
			<DialogTitle className="bg-neutral-600 font-semibold font-montserrat">
				Usuń serię
			</DialogTitle>
			<DialogContent className="bg-neutral-600">
				<DialogContentText className="font-medium font-montserrat text-white">
					Aby usunąć serię, potwierdź swoją tożsamość. Podaj swoje
					hasło:
				</DialogContentText>
				<TextField
					autoFocus
					margin="dense"
					id="password"
					label="Hasło"
					type="password"
					fullWidth
					variant="standard"
					value={password}
					onChange={handleChange}
					sx={{ label: { color: "white" } }}
				/>
			</DialogContent>
			<DialogActions className="bg-neutral-600">
				<Button
					onClick={handleClose}
					className="text-white font-montserrat font-semibold"
				>
					Anuluj
				</Button>
				<Button
					onClick={handleDelete}
					className="text-primary-orange font-montserrat font-semibold"
				>
					Usuń
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default DeleteDialog;
