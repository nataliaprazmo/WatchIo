import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const ValueSelect = ({ value, handleChange }) => {
	const roles = ["aktor", "reżyser"];
	const change = () => {
		console.log(value);
	};
	return (
		<FormControl variant="standard" className="md:w-72 w-full">
			<InputLabel id="role_label" className="text-white">
				Rola
			</InputLabel>
			<Select
				labelId="role_label"
				id="role"
				name="role"
				value={value}
				onChange={change}
				label="Rola"
				className="text-white"
			>
				{roles.map((rol) => (
					<MenuItem value={rol}>{rol}</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};

export default ValueSelect;
