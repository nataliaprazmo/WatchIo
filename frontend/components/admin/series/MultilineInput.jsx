import React from "react";
import { TextField } from "@mui/material";

const MultilineInput = ({ id, name, label, type, value, handleChange }) => {
	return (
		<TextField
			multiline
			variant="standard"
			id={id}
			name={name}
			label={label}
			value={value}
			onChange={handleChange}
			type={type}
			// required
			sx={{
				textarea: { color: "#fafaf5" },
				label: { color: "#fafaf5" },
			}}
			className="md:w-72 w-full"
		/>
	);
};

export default MultilineInput;
