import { SeriesDetails } from "@/components/admin";
import React from "react";

export default function Page({ params }) {
	return (
		<div className="overflow-hidden">
			<SeriesDetails id={params.id} />
		</div>
	);
}
