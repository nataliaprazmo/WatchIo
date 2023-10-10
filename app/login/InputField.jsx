import React from "react";
import { Box, TextField, Typography, InputAdornment } from "@mui/material";

export const InputField = ({
	fieldName,
	defaultText,
	id,
	type,
	startIcon,
	endIcon,
}) => {
	return (
		<Box
			className="text-white"
			sx={{ display: "flex", flexDirection: "column", gap: "8px" }}
		>
			<Typography className="px-[16px] text-base font-semibold">
				{fieldName}
			</Typography>
			<TextField
				sx={{
					width: "400px",
					backgroundColor: "#404040",
					borderRadius: "8px",
					input: {
						color: "#fafaf5",
						fontSize: "12px",
						padding: "8px 16px",
					},
				}}
				required
				id={id}
				variant="filled"
				type={type}
				defaultValue={defaultText}
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							{startIcon}
						</InputAdornment>
					),
					endAdornment: (
						<InputAdornment position="end">
							{endIcon}
						</InputAdornment>
					),
				}}
			/>
		</Box>
	);
};
