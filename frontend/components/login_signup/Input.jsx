import React from "react";
import { OutlinedInput } from "@mui/material";

const Input = ({
	label,
	id,
	type,
	handleChange,
	icon,
	name,
	value,
	placeholder,
}) => {
	return (
		<div className="flex flex-col gap-1 w-full">
			<label
				htmlFor={id}
				className="font-medium text-sm text-neutral-200 pl-3"
			>
				{label}
			</label>
			<OutlinedInput
				className="w-[350px] bg-grey-150 rounded-md"
				sx={{
					input: {
						paddingLeft: "10px",
						color: "#fafaf5",
					},
				}}
				placeholder={placeholder}
				id={id}
				name={name}
				value={value}
				required
				type={type}
				onChange={handleChange}
				startAdornment={icon}
			/>
		</div>
	);
};

export default Input;
