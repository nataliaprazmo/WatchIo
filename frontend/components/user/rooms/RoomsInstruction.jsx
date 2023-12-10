import React from "react";
import WeekendOutlinedIcon from "@mui/icons-material/WeekendOutlined";
import SavedSearchOutlinedIcon from "@mui/icons-material/SavedSearchOutlined";
import EventSeatOutlinedIcon from "@mui/icons-material/EventSeatOutlined";
import ChairOutlinedIcon from "@mui/icons-material/ChairOutlined";
import LocalPlayOutlinedIcon from "@mui/icons-material/LocalPlayOutlined";
import GamepadOutlinedIcon from "@mui/icons-material/GamepadOutlined";
import ScreenShareOutlinedIcon from "@mui/icons-material/ScreenShareOutlined";
import CoPresentOutlinedIcon from "@mui/icons-material/CoPresentOutlined";

const RoomsInstruction = () => {
	return (
		<>
			<h3 className="font-semibold text-neutral-400">
				Nie stworzyłeś jeszcze swojego pokoju do wspólnego oglądania.
			</h3>
			<div className="flex w-full justify-center items-center mt-10 mb-2">
				<WeekendOutlinedIcon
					sx={{
						fontSize: "96px",
						path: { color: "rgb(163 163 163)" },
					}}
				/>
			</div>
			<p className="font-medium text-neutral-400 text-center">
				Aby stworzyć swój pierwszy pokój, podążaj za instrukcją:
			</p>
			<div className="flex items-center p-4 h-fit border-neutral-500 hover:border-secondary-violet border-2 rounded-lg mt-8 gap-3 cursor-pointer">
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
				<EventSeatOutlinedIcon
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
			<div className="flex items-center p-4 h-fit border-neutral-500 hover:border-secondary-violet border-2 rounded-lg mt-2 gap-3">
				<GamepadOutlinedIcon
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
			<div className="flex items-center p-4 h-fit border-neutral-500 hover:border-secondary-violet border-2 rounded-lg mt-2 gap-3">
				<ScreenShareOutlinedIcon
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
			<div className="flex items-center p-4 h-fit border-neutral-500 hover:border-secondary-violet border-2 rounded-lg mt-2 gap-3">
				<CoPresentOutlinedIcon
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
			<p className="font-medium text-neutral-400 text-center mt-8">
				Lub:
			</p>
			<div className="flex items-center p-4 h-fit border-neutral-500 hover:border-secondary-violet border-2 rounded-lg mt-2 gap-3">
				<ChairOutlinedIcon
					sx={{
						fontSize: "32px",
						path: { color: "#9126d9" },
					}}
				/>
				<p>Stwórz pokój teraz!</p>
			</div>
		</>
	);
};

export default RoomsInstruction;
