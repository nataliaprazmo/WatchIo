import Room from "@/components/user/rooms/Room";
import React from "react";

export default function Page({ params, searchParams }) {
	return (
		<main className="overflow-hidden">
			<Room roomId={params.id} videoId={searchParams.videoId} />
		</main>
	);
}
