import React from "react";
import { TextField } from "@mui/material";

const Input = ({ id, name, label, type }) => {
	return (
		<TextField
			variant="standard"
			id={id}
			name={name}
			label={label}
			type={type}
			required
			sx={{ label: { color: "#fafaf5" } }}
			className="md:w-72 w-full"
		/>
	);
};

export default Input;
