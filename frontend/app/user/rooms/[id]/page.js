import Room from "@/components/user/rooms/Room";
import React from "react";

export default function Page({ params }) {
	return (
		<main className="overflow-hidden">
			<Room id={params.id} />
		</main>
	);
}
