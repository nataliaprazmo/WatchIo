import React from "react";
import Input from "./Input";
import ValueSelect from "./ValueSelect";
import { IconButton } from "@mui/material";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";

const StaffForm = ({ staffDetails, handleChange, handleAddStaff }) => {
	return (
		<div className="flex flex-wrap justify-between items-center pt-2 pb-8 gap-10">
			<Input
				id="name"
				name="name"
				label="Imię"
				type="text"
				value={staffDetails.name}
				handleChange={handleChange}
			/>
			<Input
				id="surname"
				name="surname"
				label="Nazwisko"
				type="text"
				value={staffDetails.surname}
				handleChange={handleChange}
			/>
			<div className="flex gap-8 w-full">
				<ValueSelect
					value={staffDetails.role}
					handleChange={handleChange}
				/>
				<IconButton onClick={handleAddStaff}>
					<AddCircleRoundedIcon
						className="text-32 cursor-pointer"
						sx={{
							"&:hover": { path: { color: "#ff9900" } },
						}}
					/>
				</IconButton>
			</div>
		</div>
	);
};

export default StaffForm;
