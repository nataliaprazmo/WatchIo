"use client";

import React, { useState, useEffect } from "react";
import Input from "./Input";
import MultilineInput from "./MultilineInput";
import CategoriesInput from "./CategoriesInput";
import ValueSelect from "./ValueSelect";
import { Button } from "@/components/buttons";
import { usePathname } from "next/navigation";
import { IconButton } from "@mui/material";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import FileInput from "./FileInput";

const SeriesForm = ({ part }) => {
	const path = usePathname();
	const [videosCount, setVideosCount] = useState(1);
	const [staffName, setStaffName] = useState("");
	const [staffSurname, setStaffSurname] = useState("");
	const [staffRole, setStaffRole] = useState("");
	const [staff, setStaff] = useState([]);
	const handleAdd = () => {
		if (staffName !== "" && surname !== "" && role !== "") {
			setStaff(...staff, {
				name: { staffName },
				surname: { surname },
				role: { role },
			});
		}
	};
	return (
		<form
			action="http://localhost:5000/api/series"
			method="POST"
			enctype="multipart/form-data"
			className="flex flex-col justify-between items-start w-full"
		>
			{part === 0 ? (
				<div className="pt-2 pb-8 flex flex-wrap items-center gap-10">
					<Input
						id="series_title"
						name="series_title"
						label="Nazwa serii"
						type="text"
					/>
					<CategoriesInput />
					<MultilineInput
						id="description"
						name="description"
						label="Opis serii"
						type="text"
					/>
					<FileInput
						label="Plakat"
						id="series_picture"
						name="series_picture"
					/>
				</div>
			) : part === 1 ? (
				<div className="flex flex-wrap justify-between items-center pt-2 pb-8 gap-10">
					<Input
						id="staff_name"
						name="staff_name"
						label="Imię"
						type="text"
					/>
					<Input
						id="staff_surname"
						name="staff_surname"
						label="Nazwisko"
						type="text"
					/>
					<div className="flex gap-8 w-full">
						<ValueSelect values={["aktor", "reżyser"]} />
						<IconButton>
							<AddCircleRoundedIcon
								className="text-32 cursor-pointer"
								sx={{
									"&:hover": { path: { color: "#ff9900" } },
								}}
							/>
						</IconButton>
					</div>
				</div>
			) : (
				<div className="pt-2 pb-8 flex flex-wrap items-center gap-10">
					<Input
						id="episode_title"
						name="episode_title"
						label="Nazwa odcinka"
						type="text"
					/>
					<MultilineInput
						id="desc"
						name="desc"
						label="Opis odcinka"
						type="text"
					/>
					<FileInput
						label="Miniaturka"
						id="episode_picture"
						name="episode_picture"
					/>
					<FileInput label="Wideo" id="video" name="video" />
				</div>
			)}
		</form>
	);
};

export default SeriesForm;
