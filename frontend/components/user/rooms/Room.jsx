import SiteBreadcrumbs from "@/components/SiteBreadcrumbs";
import React from "react";
import Player from "./Player";
import ShareRoom from "./ShareRoom";

const Room = ({ id }) => {
	// const getDetails=async()=>{
	//     const token=localStorage.getItem("token");
	//     const response=await fetch("http://localhost:5000/api/series/"+id)
	// }
	return (
		<div className="pt-24 pb-18 pl-24 pr-8">
			<SiteBreadcrumbs
				links={[
					{ to: "/user", label: "Strona główna" },
					{ to: "/user/rooms", label: "Pokoje" },
					{
						to: `/user/rooms/${id}`,
						label: "Wspólne oglądanie",
					},
				]}
			/>
			<div className="flex justify-between items-center mt-12">
				<h1 className="text-32 font-semibold">Tytuł serii</h1>
				<ShareRoom link={`http://localhost:3000/user/rooms/${id}`} />
			</div>
			<p>Odcinek 1</p>
			<Player id={id} />
		</div>
	);
};

export default Room;
