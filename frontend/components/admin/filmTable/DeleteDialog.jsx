"use client";
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

const DeleteDialog = ({
	open,
	setOpen,
	setOpenSnackbar,
	seriesId,
	getFilms,
}) => {
	const handleClose = () => {
		setOpen(false);
	};
	const [password, setPassword] = useState("");
	const handleChange = (e) => {
		e.preventDefault;
		setPassword(e.target.value);
	};
	const deleteSerie = async () => {
		const token = localStorage.getItem("token");
		try {
			const response = await fetch(
				"http://localhost:5000/api/series/" + seriesId,
				{
					method: "DELETE",
					headers: {
						"Content-Type": "application/json",
						"x-access-token": token,
					},
				}
			);
			if (response.status === 200) {
				setOpenSnackbar(true);
				getFilms();
			}
		} catch (error) {
			console.log(error);
		}
	};
	const handleDelete = () => {
		setOpen(false);
		deleteSerie();
	};
	return (
		<Dialog open={open} onClose={handleClose}>
			<DialogTitle
				sx={{
					backgroundColor: "rgb(82 82 82)",
					fontWeight: "600",
					fontFamily: "montserrat",
					color: "#ff9900",
				}}
			>
				Usuń serię
			</DialogTitle>
			<DialogContent sx={{ backgroundColor: "rgb(82 82 82)" }}>
				<DialogContentText
					sx={{
						color: "rgb(212 212 212)",
						fontWeight: "500",
						fontFamily: "montserrat",
					}}
				>
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
					sx={{ label: { color: "white", fontFamily: "montserrat" } }}
				/>
			</DialogContent>
			<DialogActions sx={{ backgroundColor: "rgb(82 82 82)" }}>
				<Button
					onClick={handleClose}
					sx={{
						color: "#fafaf5",
						fontFamily: "montserrat",
						fontWeight: "500",
					}}
				>
					Anuluj
				</Button>
				<Button
					onClick={handleDelete}
					sx={{
						color: "#ff9900",
						fontFamily: "montserrat",
						fontWeight: "600",
					}}
				>
					Usuń
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default DeleteDialog;
