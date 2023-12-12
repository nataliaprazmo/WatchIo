import React from "react";
import WeekendOutlinedIcon from "@mui/icons-material/WeekendOutlined";
import SavedSearchOutlinedIcon from "@mui/icons-material/SavedSearchOutlined";
import LocalPlayOutlinedIcon from "@mui/icons-material/LocalPlayOutlined";
import JoinRoom from "./JoinRoom";

const RoomsInstruction = () => {
	return (
		<>
			<h3 className="font-semibold text-neutral-400 text-center mt-1 mb-6">
				Dołącz do pokoju - skopiuj kod od właściciela pokoju, a
				następnie wklej go poniżej.
			</h3>
			<JoinRoom />
			<div className="flex w-full justify-center items-center mt-8">
				<WeekendOutlinedIcon
					sx={{
						fontSize: "96px",
						path: { color: "rgb(163 163 163)" },
					}}
				/>
			</div>
			<p className="font-medium text-neutral-400 text-center mt-10">
				Lub stwórz swój pierwszy pokój, podążając za instrukcją:
			</p>
			<div className="flex items-center p-4 h-fit border-neutral-500 hover:border-secondary-violet border-2 rounded-lg mt-6 gap-3 cursor-pointer">
				<SavedSearchOutlinedIcon
					sx={{
						fontSize: "32px",
						path: { color: "#9126d9" },
					}}
				/>
				<p>
					Znajdź ciekawą serię na stronie głównej lub używając filtrów
				</p>
			</div>
			<div className="flex items-center p-4 h-fit border-neutral-500 hover:border-secondary-violet border-2 rounded-lg mt-2 gap-3">
				<LocalPlayOutlinedIcon
					sx={{
						fontSize: "32px",
						path: { color: "#9126d9" },
					}}
				/>
				<p>
					Otwórz player wybranej serii i stwórz pokój klikając
					przycisk!
				</p>
			</div>
		</>
	);
};

export default RoomsInstruction;
