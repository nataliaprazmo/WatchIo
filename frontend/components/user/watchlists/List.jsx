import React from "react";
import { SendRounded } from "@mui/icons-material";
import Item from "./Item";

const List = ({ series }) => {
	return (
		<div className="bg-neutral-800 px-4 py-4 rounded-lg flex flex-col xl:px-24 lg:px-12 md:px-4">
			<div className="bg-back w-full flex flex-row justify-end pr-4 items-center">
				<button className="font-medium flex flex-row gap-3">
					Udostępnij listę
					<SendRounded
						sx={{
							fontSize: "18px",
							path: { color: "#9126d9" },
						}}
					/>
				</button>
			</div>
			{series.map((serie, index) => (
				<Item key={index} index={index + 1} serie={serie} />
			))}
		</div>
	);
};

export default List;
