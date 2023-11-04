import React from "react";
import { TextField } from "@mui/material";

const MultilineInput = ({ id, name, label, type }) => {
	return (
		<TextField
			multiline
			variant="standard"
			id={id}
			name={name}
			label={label}
			type={type}
			required
			sx={{
				textarea: { color: "#fafaf5" },
				label: { color: "#fafaf5" },
			}}
			className="md:w-72 w-full"
		/>
	);
};

export default MultilineInput;
