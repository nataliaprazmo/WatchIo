import { Chip } from "@mui/material";
import React from "react";

const ValueSelect = ({ value, handleChange }) => {
	const roles = ["aktor", "reżyser", "scenarzysta", "producent"];
	return (
		<div className="flex items-center w-full gap-4">
			<label htmlFor="role">Rola:</label>
			<select
				id="role"
				name="role"
				value={value}
				onChange={handleChange}
				className="w-full bg-transparent border-b focus:border-primary-orange "
			>
				{roles.map((rol, index) => (
					<option key={index} value={rol}>
						{rol}
					</option>
				))}
			</select>
		</div>
	);
};

export default ValueSelect;
