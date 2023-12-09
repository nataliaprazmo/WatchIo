import React from "react";
import Item from "./Item";
import CopyTooltip from "./CopyTooltip";

const List = ({ series, getWatchlist }) => {
	const deleteFromWatchlist = async (id) => {
		const token = localStorage.getItem("token");
		const response = await fetch(
			"http://localhost:5000/api/watchlists/" + id,
			{
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
					"x-access-token": token,
				},
			}
		);
		if (response.status === 200) getWatchlist();
	};
	const shareWatchlist = async () => {
		navigator.clipboard.writeText("Id watchlisty");
	};
	return (
		<div className="bg-neutral-800 px-4 py-4 rounded-lg flex flex-col xl:px-24 lg:px-12 md:px-4">
			<div className="bg-back w-full flex flex-row justify-end pr-4 items-center">
				<CopyTooltip shareWatchlist={shareWatchlist} />
			</div>
			{series.map((serie, index) => (
				<Item
					key={index}
					index={index + 1}
					serie={serie}
					deleteFromWatchlist={() => deleteFromWatchlist(serie._id)}
				/>
			))}
		</div>
	);
};

export default List;
