import SiteBreadcrumbs from "@/components/SiteBreadcrumbs";
import React from "react";
import Player from "./Player";
import ShareRoom from "./ShareRoom";

const Room = ({ roomId, videoId }) => {
	return (
		<div className="pt-24 pb-18 pl-24 pr-8">
			<SiteBreadcrumbs
				links={[
					{ to: "/user", label: "Strona główna" },
					{ to: "/user/rooms", label: "Pokoje" },
					{
						to: `/user/rooms/${roomId}?videoId=${videoId}`,
						label: "Wspólne oglądanie",
					},
				]}
			/>
			<div className="flex justify-between items-center mt-12">
				{/* <h1 className="text-32 font-semibold">Tytuł serii</h1> */}
				<ShareRoom link={`${roomId}`} />
			</div>
			{/* <p>Odcinek 1</p> */}
			<Player roomId={roomId} videoId={videoId} />
		</div>
	);
};

export default Room;
