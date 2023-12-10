"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Instruction from "./Instruction";
import List from "./List";
import SiteBreadcrumbs from "@/components/SiteBreadcrumbs";

const Watchlist = () => {
	const router = useRouter();
	const redirect = (id) => router.push(`/user/series/${id}`);
	const [watchlist, setWatchlist] = useState(null);
	const getWatchlist = async () => {
		const token = localStorage.getItem("token");
		try {
			const response = await fetch(
				"http://localhost:5000/api/watchlists",
				{
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						"x-access-token": token,
					},
				}
			);
			if (response.status === 404) {
				setWatchlist(null);
			}
			if (response.status === 200) {
				const res = await response.json();
				setWatchlist(res.data.series);
				console.log(res);
			}
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		getWatchlist();
	}, []);
	return (
		<div className="pt-24 pl-24 pr-8">
			<SiteBreadcrumbs
				links={[
					{ to: "/user", label: "Strona główna" },
					{ to: "/user/watchlist", label: "Do obejrzenia" },
				]}
			/>
			<h1 className="text-32 font-bold text-center mt-12">
				Twoja lista{" "}
				<span className="text-secondary-violet">Do obejrzenia</span>
			</h1>
			<div className="mt-4 mb-18 flex flex-col items-center justify-center">
				{watchlist && watchlist.length !== 0 ? (
					<List
						series={watchlist}
						getWatchlist={getWatchlist}
						redirect={redirect}
					/>
				) : (
					<Instruction
						redirect={() => router.push("/user/explore")}
					/>
				)}
			</div>
		</div>
	);
};

export default Watchlist;
