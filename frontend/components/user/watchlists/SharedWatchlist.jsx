"use client";

import React, { useEffect, useState } from "react";
import Item from "./Item";
import { Nav } from "@/components/mainPage";

const SharedWatchlist = ({ id }) => {
	const [series, setSeries] = useState(null);
	const [owner, setOwner] = useState("");
	const getSeries = async () => {
		const response = await fetch(
			`http://localhost:5000/api/watchlists/${id}`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
		if (response.status === 404) {
			setSeries(null);
		}
		if (response.status === 200) {
			const res = await response.json();
			setSeries(res.data.series);
			setOwner(res.data.owner);
		}
	};
	useEffect(() => {
		getSeries();
	}, []);
	return (
		<div className="px-13 py-32">
			<Nav />
			{series && series.length != 0 ? (
				<>
					<p className="text-xl text-center mb-6">
						<span className="font-semibold text-secondary-violet">
							Lista do obejrzena
						</span>{" "}
						użytkownika {owner}
					</p>
					<div className="bg-neutral-800 px-4 py-4 rounded-lg flex flex-col xl:px-24 lg:px-12 md:px-4">
						{series.map((serie, index) => (
							<Item
								key={index}
								guest={true}
								index={index + 1}
								serie={serie}
							/>
						))}
					</div>
				</>
			) : (
				<p className="text-xl text-center mb-96">
					Nie odnaleziono{" "}
					<span className="font-semibold text-secondary-violet">
						listy do obejrzenia
					</span>{" "}
					o podanym id
				</p>
			)}
		</div>
	);
};

export default SharedWatchlist;
