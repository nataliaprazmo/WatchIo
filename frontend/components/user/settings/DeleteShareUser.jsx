"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const DeleteShareUser = ({ open, setOpen, setSharedWith, toDelete }) => {
	const handleClose = () => {
		setOpen(false);
	};
	const handleDelete = async () => {
		const token = localStorage.getItem("token");
		try {
			const response = await fetch(
				"http://localhost:5000/api/subsciptions/sharing/shared",
				{
					method: "DELETE",
					headers: {
						"Content-Type": "application/json",
						"x-access-token": token,
					},
					body: JSON.stringify({ userToDelete: toDelete }),
				}
			);
			if (response.status == 200) {
				const res = await response.json();
				// setSharedWith([]);
				setOpen(false);
			}
		} catch (error) {
			console.error(error);
		}
		// console.log("usunięto");
		// setOpen(false);
	};
	return (
		<Dialog
			open={open}
			TransitionComponent={Transition}
			keepMounted
			onClose={handleClose}
		>
			<DialogTitle
				sx={{
					fontWeight: "600",
					fontFamily: "montserrat",
				}}
				className="bg-neutral-700"
			>
				Czy na pewno chcesz usunąć użytkownika?
			</DialogTitle>
			<DialogContent className="bg-neutral-700">
				<DialogContentText
					sx={{
						fontWeight: "500",
						color: "rgb(163 163 163)",
						fontFamily: "montserrat",
					}}
				>
					Akcja spowoduje, że użytkownik zostanie usunięty z Twojego
					planu subskrypcyjnego, a użytkownik nie będzie mógł
					korzystać z platformy. Czy jesteś pewien?
				</DialogContentText>
			</DialogContent>
			<DialogActions className="bg-neutral-700">
				<Button
					onClick={handleClose}
					sx={{
						color: "#fafaf5",
						fontWeight: "600",
						fontFamily: "montserrat",
					}}
				>
					Anuluj
				</Button>
				<Button
					onClick={handleDelete}
					sx={{
						color: "#ff9900",
						fontWeight: "600",
						fontFamily: "montserrat",
					}}
				>
					Usuń z subskrypcji
				</Button>
			</DialogActions>
		</Dialog>
	);
};
export default DeleteShareUser;
