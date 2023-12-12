import React from "react";
import { TextField } from "@mui/material";
import ErrorDesc from "./ErrorDesc";

const Input = ({ id, name, label, type, value, handleChange, error }) => {
	return (
		<div className="flex flex-col">
			<TextField
				error={error}
				variant="standard"
				id={id}
				name={name}
				value={value}
				onChange={handleChange}
				onBlur={handleChange}
				label={label}
				type={type}
				sx={{ label: { color: "#fafaf5" } }}
				className="md:w-72 w-full"
			/>
			<ErrorDesc error={error} />
		</div>
	);
};

export default Input;
