import SharedWatchlist from "@/components/user/watchlists/SharedWatchlist";
import React from "react";

export default function Page({ params }) {
	return (
		<div className="overflow-hidden">
			<SharedWatchlist id={params.id} />
		</div>
	);
}
