"use client";

import React, { useEffect, useState } from "react";
import Instruction from "./Instruction";
import { FilmTable } from "@/components/admin";

const Watchlist = () => {
	const [watchlist, setWatchlist] = useState(null);
	useEffect(() => {
		// router.get("/", jwt_auth, async (req, res) => {
		//     try {
		//         const watchlist = await getCurrentUserWatchlist(req.user._id);
		//         if (!watchlist)
		//             return res.status(404).send({ message: "Watchlist not found" });
		//         return res.status(200).send({
		//             message: "Watchlist data found",
		//             data: {
		//                 owner: watchlist.owner.credentials.email,
		//                 series: watchlist.series,
		//             },
		//         });
		//     } catch (error) {
		//         console.error(error);
		//         return res.status(500).send({ message: error.message });
		//     }
		// });
	}, []);
	return (
		<div className="pt-24 pl-24 pr-8">
			<h1 className="text-32 font-bold text-center">
				Twoja lista{" "}
				<span className="text-secondary-violet">Do obejrzenia</span>
			</h1>
			<div className="mt-4 mb-18 flex flex-col items-center justify-center">
				{watchlist ? <FilmTable /> : <Instruction />}
			</div>
		</div>
	);
};

export default Watchlist;
