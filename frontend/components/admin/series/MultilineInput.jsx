import React from "react";
import { TextField } from "@mui/material";
import ErrorDesc from "./ErrorDesc";

const MultilineInput = ({
	id,
	name,
	label,
	type,
	value,
	handleChange,
	error,
}) => {
	return (
		<div className="flex flex-col">
			<TextField
				error={error}
				multiline
				variant="standard"
				id={id}
				name={name}
				label={label}
				value={value}
				onChange={handleChange}
				onBlur={handleChange}
				type={type}
				sx={{
					textarea: { color: "#fafaf5" },
					label: { color: "#fafaf5" },
				}}
				className="md:w-72 w-full"
			/>
			<ErrorDesc error={error} />
		</div>
	);
};

export default MultilineInput;
