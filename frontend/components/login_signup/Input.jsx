import React from "react";
import { OutlinedInput } from "@mui/material";

const Input = ({ label, id, type, handleChange, icon, name, value }) => {
	return (
		<div className="flex flex-col gap-[8px] w-full">
			<p className="font-semibold text-[16px] pl-3">{label}</p>
			<OutlinedInput
				className="w-[400px] bg-[#404040] rounded-[8px]"
				sx={{
					input: {
						paddingLeft: "10px",
						color: "#fafaf5",
					},
				}}
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
