"use client";
import React, { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const ValueSelect = ({ values }) => {
	const [selected, setSelected] = useState("");
	const handleChange = (event) => {
		setSelected(event.target.value);
	};
	return (
		<FormControl variant="standard" className="md:w-72 w-full">
			<InputLabel id="staff_role_label" className="text-white">
				Rola
			</InputLabel>
			<Select
				labelId="staff_role_label"
				id="staff_role"
				value={selected}
				onChange={handleChange}
				label="Rola"
				className="text-white"
			>
				{values.map((value) => (
					<MenuItem value={value}>{value}</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};

export default ValueSelect;
