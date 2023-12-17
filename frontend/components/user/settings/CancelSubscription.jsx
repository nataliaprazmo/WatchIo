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

const CancelSubscription = ({
	open,
	setOpen,
	setSharedWith,
	setSubscriptionUserType,
	setOwner,
	setMessage,
	setOpenMess,
}) => {
	const handleClose = () => {
		setOpen(false);
	};
	const cancelSubscription = async () => {
		const token = localStorage.getItem("token");
		try {
			const response = await fetch(
				"http://localhost:5000/api/subscriptions/cancel",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						"x-access-token": token,
					},
				}
			);
			if (response.status == 200) {
				const res = await response.json();
				setSharedWith(null);
				setSubscriptionUserType(null);
				setOwner(null);
				const endDate = new Date(res.data.end_date * 1000);
				setMessage("" + endDate.toLocaleDateString("pl-PL"));
				setOpenMess(true);
				handleClose();
			}
		} catch (error) {
			console.error(error);
		}
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
				Czy na pewno chcesz zrezygnować z subskrypcji?
			</DialogTitle>
			<DialogContent className="bg-neutral-700">
				<DialogContentText
					sx={{
						fontWeight: "500",
						color: "rgb(163 163 163)",
						fontFamily: "montserrat",
					}}
				>
					Akcja spowoduje, rezygnację z planu subskrypcyjnego oraz
					ograniczenie możliwości korzystania z platformy. Czy jesteś
					pewien?
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
					onClick={cancelSubscription}
					sx={{
						color: "rgb(220 38 38)",
						fontWeight: "700",
						fontFamily: "montserrat",
					}}
				>
					Zrezygnuj
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default CancelSubscription;
