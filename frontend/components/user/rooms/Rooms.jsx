import SiteBreadcrumbs from "@/components/SiteBreadcrumbs";
import React from "react";
import RoomsInstruction from "./RoomsInstruction";

const Rooms = () => {
	return (
		<div className="pt-24 pb-18 pl-24 pr-8">
			<SiteBreadcrumbs
				links={[
					{ to: "/user", label: "Strona główna" },
					{ to: "/user/rooms", label: "Pokoje" },
				]}
			/>
			<h1 className="mt-12 text-32 font-bold text-center">
				Twoje <span className="text-secondary-violet">Pokoje</span>
			</h1>
			<RoomsInstruction />
		</div>
	);
};

export default Rooms;
