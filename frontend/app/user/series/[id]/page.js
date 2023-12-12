import SeriesDetails from "@/components/user/SeriesDetails";
import React from "react";

export default function Page({ params }) {
	return (
		<main className="overflow-hidden">
			<SeriesDetails id={params.id} />
		</main>
	);
}
