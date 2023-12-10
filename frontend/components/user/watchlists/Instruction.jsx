import React from "react";
import CameraRollOutlinedIcon from "@mui/icons-material/CameraRollOutlined";
import SavedSearchOutlinedIcon from "@mui/icons-material/SavedSearchOutlined";
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";

const Instruction = ({ redirect }) => {
	return (
		<>
			<h3 className="font-semibold text-neutral-400">
				Nie posiadasz jeszcze żadnych filmów dodanych do listy Do
				oglądania.
			</h3>
			<div className="flex w-full justify-center items-center mt-10 mb-2">
				<CameraRollOutlinedIcon
					sx={{
						fontSize: "96px",
						path: { color: "rgb(163 163 163)" },
					}}
				/>
			</div>
			<p className="font-medium text-neutral-400 text-center">
				Aby dodać pierwszą serię do listy, podążaj za instrukcją:
			</p>
			<div
				onClick={redirect}
				className="flex items-center p-4 h-fit border-neutral-500 hover:border-secondary-violet border-2 rounded-lg mt-8 gap-3 cursor-pointer"
			>
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
			<div
				onClick={redirect}
				className="flex items-center p-4 h-fit border-neutral-500 hover:border-secondary-violet border-2 rounded-lg mt-2 gap-3"
			>
				<BookmarkBorderRoundedIcon
					sx={{
						fontSize: "32px",
						path: { color: "#9126d9" },
					}}
				/>
				<p>Dodaj ją do listy klikając zakładkę!</p>
			</div>
		</>
	);
};

export default Instruction;
