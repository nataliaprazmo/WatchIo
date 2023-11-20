"use client";

import React, { useEffect, useState } from "react";
import { NavigateNextRounded } from "@mui/icons-material";
import SiteBreadcrumbs from "../SiteBreadcrumbs";
import SeriesHero from "./SeriesHero";
import Section from "./Section";
import PurchaseDialog from "./subscriptionPurchase/PurchaseDialog";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useSubscription } from "./SubscriptionContext";

const Dashboard = () => {
	const [open, setOpen] = useState(false);
	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}
		setOpen(false);
	};
	const action = (
		<React.Fragment>
			<IconButton
				size="small"
				aria-label="close"
				color="inherit"
				onClick={handleClose}
			>
				<CloseIcon fontSize="small" />
			</IconButton>
		</React.Fragment>
	);

	const {
		price,
		hasSubscription,
		checkSubscription,
		getPrices,
		setHasSubscription,
		loading,
	} = useSubscription();
	useEffect(() => {
		checkSubscription();
	}, []);
	useEffect(() => {
		if (!hasSubscription) getPrices();
	}, [hasSubscription, setHasSubscription]);
	if (loading) {
		return <div>Loading...</div>;
	}
	return (
		<div className="pt-24 pb-18 pl-24 pr-8">
			<div className="flex gap-1 items-center mb-6">
				<NavigateNextRounded
					className="text-xs"
					sx={{ path: { color: "#ff9900" } }}
				/>
				<SiteBreadcrumbs links={[{ to: "/user", label: "Panel" }]} />
			</div>
			{!hasSubscription ? (
				<div className="z-50 fixed top-0 left-0 w-full h-full backdrop-blur-md flex flex-row justify-center items-center pl-14">
					<PurchaseDialog
						price={price}
						setHasSubscription={setHasSubscription}
						setOpen={setOpen}
					/>
				</div>
			) : null}
			<SeriesHero />
			<Section text="Najpopularniejsze" items_count={4} />
			<Section text="Najlepiej oceniane" items_count={6} />
			<Section text="Ostatnio dodane" items_count={6} />
			<Section text="Polecane" items_count={4} />
			<Section text="Seriale" items_count={6} />
			<Section text="Filmy" items_count={6} />
			<Snackbar
				open={open}
				autoHideDuration={6000}
				onClose={handleClose}
				message="Miłego korzystania z platformy!"
				action={action}
				sx={{
					marginLeft: "50px",
					div: { fontWeight: "600", fontFamily: "montserrat" },
				}}
			/>
		</div>
	);
};

export default Dashboard;
