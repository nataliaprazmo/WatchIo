import React, { useEffect } from "react";
import Input from "./Input";
import ValueSelect from "./ValueSelect";
import { Button, Chip } from "@mui/material";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import { useSeries } from "./SeriesContext";

const StaffForm = () => {
	const {
		bodyData,
		staffDetails,
		handleAddStaff,
		setStaffDetails,
		errors,
		setErrors,
	} = useSeries();
	const isStaffEmpty =
		bodyData.series_staff && bodyData.series_staff.length === 0;
	useEffect(() => {
		if (isStaffEmpty) {
			setErrors((prev) => ({
				...prev,
				series_staff: "Dodaj obsadę",
			}));
		} else {
			setErrors((prev) => ({
				...prev,
				series_staff: null,
			}));
		}
	}, [isStaffEmpty]);
	const handleChange = ({ currentTarget: input }) => {
		const { name, value } = input;
		if (!value || value === "") {
			setErrors((prev) => ({
				...prev,
				[name]: "Uzupełnij pole",
			}));
		} else {
			setErrors((prev) => ({
				...prev,
				[name]: null,
			}));
		}
		setStaffDetails((prevStaffDetails) => ({
			...prevStaffDetails,
			[name]: value,
		}));
	};
	return (
		<div>
			<div className="py-4">
				{isStaffEmpty ? (
					<p>Dodaj obsadę poniżej:</p>
				) : (
					<>
						<p className="pb-4">Dodana obsada:</p>
						<div className="flex flex-wrap w-full gap-4">
							{bodyData.series_staff.map((person, index) => {
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
										sx={{ borderColor: "#9126d9" }}
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
					error={errors.name}
				/>
				<Input
					id="surname"
					name="surname"
					label="Nazwisko"
					type="text"
					value={staffDetails.surname}
					handleChange={handleChange}
					error={errors.surname}
				/>
				<div className="flex gap-8 w-full">
					<ValueSelect
						value={staffDetails.role}
						handleChange={handleChange}
					/>
					<Button onClick={handleAddStaff}>
						<AddCircleRoundedIcon
							className="text-32 cursor-pointer"
							sx={{
								"&:hover": { path: { color: "#9126d9" } },
							}}
						/>
					</Button>
				</div>
			</div>
		</div>
	);
};

export default StaffForm;
