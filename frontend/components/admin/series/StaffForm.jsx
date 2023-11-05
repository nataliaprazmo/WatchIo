import React from "react";
import Input from "./Input";
import ValueSelect from "./ValueSelect";
import { Chip, IconButton } from "@mui/material";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";

const StaffForm = ({ staffDetails, handleChange, handleAddStaff, series }) => {
	const isStaffEmpty = series.staff && series.staff.length === 0;
	return (
		<div>
			<div className="py-4">
				{isStaffEmpty ? (
					<p>Dodaj obsadę poniżej:</p>
				) : (
					<>
						<p className="pb-4">Dodana obsada:</p>
						<div className="flex flex-wrap w-full gap-4">
							{series.staff.map((person, index) => {
								return (
									<Chip
										key={index}
										label={`${person.role.substring(
											0,
											3
										)} | ${person.name[0]}. ${
											person.surname
										}`}
										variant="outlined"
										className="border-secondary-violet"
									/>
								);
							})}
						</div>
					</>
				)}
			</div>
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
								"&:hover": { path: { color: "#9126d9" } },
							}}
						/>
					</IconButton>
				</div>
			</div>
		</div>
	);
};

export default StaffForm;
