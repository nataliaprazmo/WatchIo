"use client";

import React, { useEffect, useState } from "react";
import { NavigateNextRounded } from "@mui/icons-material";
import SiteBreadcrumbs from "../SiteBreadcrumbs";
import SeriesHero from "./SeriesHero";
import Section from "./Section";
import PurchaseDialog from "./subscriptionPurchase/PurchaseDialog";

const Dashboard = () => {
	const [price, setPrice] = useState(0);
	const [hasSubscription, setHasSubscription] = useState(true);
	const getPrices = async () => {
		const token = localStorage.getItem("token");
		if (token) {
			try {
				const response = await fetch(
					"http://localhost:5000/api/subscriptions/prices?currency=pln",
					{
						method: "GET",
						headers: {
							"Content-Type": "application/json",
							"x-access-token": token,
						},
					}
				);
				if (response.status == 200) {
					const res = await response.json();
					setPrice(res.data.prices[0]);
				}
			} catch (error) {
				if (
					error.response &&
					error.response.status >= 400 &&
					error.response.status <= 500
				) {
					setError("Błąd serwera");
					console.error(error);
				}
			}
		}
	};
	useEffect(() => {
		getPrices();
	}, []);
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
		</div>
	);
};

export default Dashboard;
