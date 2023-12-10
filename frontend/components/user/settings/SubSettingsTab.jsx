"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

const SubSettingsTab = () => {
	const [sharedCount, setSharedCount] = useState(null);
	const [subscriptionUserType, setSubscriptionUserType] = useState(null);
	const [owner, setOwner] = useState(null);
	const [date, setDate] = useState(null);
	const formatDate = (dateString) => {
		var dateTime = new Date(dateString);
		return dateTime.toLocaleDateString("pl-PL");
	};
	const get = async () => {
		const token = localStorage.getItem("token");
		try {
			const response = await fetch(
				"http://localhost:5000/api/subscriptions/",
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
				setSharedCount(
					res.data.subscription.subscription.shared_with_count
				);
				setSubscriptionUserType(
					res.data.subscription.subscriptionUserType
				);
				setOwner(res.data.subscription.subscription.owner);
				setDate(
					formatDate(
						res.data.subscription.subscription.end_date * 1000
					)
				);
			}
		} catch (error) {
			console.error(error);
		}
	};
	useEffect(() => {
		get();
	}, []);
	const Button = () => {
		return (
			<Link
				href="/user/subscriptionSettings"
				className="flex justify-center ml-4 lg:px-8 px-4 md:pb-2 pb-[6px] md:pt-[7px] pt-[5px] border-2 border-secondary-violet rounded-lg h-fit font-medium transition duration-300 2xl:text-base xl:text-sm text-xs hover:bg-secondary-violet"
			>
				<p className="mr-2 text-current">Ustawienia</p>
				<ArrowForwardIosRoundedIcon sx={{ fontSize: "16px" }} />
			</Link>
		);
	};
	return (
		<div className="flex flex-col gap-1 mt-12">
			<h1 className="text-2xl font-semibold">Ustawienia subskrypcji</h1>
			<p className="text-neutral-500 font-semibold">
				{subscriptionUserType === "owner"
					? "Plan podstawowy"
					: "Subskrypcja dzielona"}
			</p>
			<div className="flex flex-row flex-wrap gap-8 mt-2 items-center">
				<div className="flex flex-col">
					<h3 className="text-neutral-400 font-medium">Właściciel</h3>
					<p className="font-medium">{owner}</p>
				</div>
				<div className="flex flex-col">
					<h3 className="text-neutral-400 font-medium">
						Podłączone konta
					</h3>
					<p className="font-medium">{sharedCount}</p>
				</div>
				<div className="flex flex-col">
					<h3 className="text-neutral-400 font-medium">Ważna do</h3>
					<p className="font-medium">{date}</p>
				</div>
				<Button />
			</div>
		</div>
	);
};

export default SubSettingsTab;
