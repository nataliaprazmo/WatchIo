"use client";

import React, { useEffect } from "react";
import NavMenu from "../NavMenu";
import { NavigateNextRounded } from "@mui/icons-material";
import SiteBreadcrumbs from "../SiteBreadcrumbs";

const Dashboard = () => {
	// const getPrices = async () => {
	// 	const token = localStorage.getItem("token");
	// 	if (token) {
	// 		try {
	// 			const response = await fetch(
	// 				"http://localhost:5000/api/subscribtions/prices/",
	// 				{
	// 					method: "GET",
	// 					headers: {
	// 						"Content-Type": "application/json",
	// 						"x-access-token": token,
	// 					},
	// 				}
	// 			);
	// 			if (response.status == 200) {
	// 				const res = await response.json();
	// 				console.log(res.message);
	// 				const prices = res.data.prices;
	// 				console.log(prices);
	// 			}
	// 		} catch (error) {
	// 			if (
	// 				error.response &&
	// 				error.response.status >= 400 &&
	// 				error.response.status <= 500
	// 			) {
	// 				setError("Błąd serwera");
	// 				console.error(error);
	// 			}
	// 		}
	// 	}
	// };
	// useEffect(() => {
	// 	getPrices();
	// }, []);
	return (
		<div className="pt-24 pb-18 pl-[115px] pr-13">
			<NavMenu />
			<div className="flex gap-1 items-center">
				<NavigateNextRounded
					className="text-xs"
					sx={{ path: { color: "#ff9900" } }}
				/>
				<SiteBreadcrumbs links={[{ to: "/user", label: "Panel" }]} />
			</div>
			<h1 className="mt-8">User</h1>
		</div>
	);
};

export default Dashboard;
