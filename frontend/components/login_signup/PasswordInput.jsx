import React from "react";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import { OutlinedInput } from "@mui/material";
import VisibilityOutlined from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlined from "@mui/icons-material/VisibilityOffOutlined";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";

const PasswordInput = ({
	label,
	id,
	name,
	value,
	handleChange,
	handleClickShowPassword,
	showPassword,
	error,
	error_state,
}) => {
	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};
	return (
		<div className="flex flex-col gap-[8px] w-full">
			<p className="font-semibold text-[16px] pl-3">{label}</p>
			<OutlinedInput
				className="w-[400px] bg-[#404040] rounded-[8px]"
				sx={{
					input: {
						paddingLeft: "4px",
						color: "#fafaf5",
					},
				}}
				id={id}
				name={name}
				value={value}
				type={showPassword ? "text" : "password"}
				error={error_state}
				required
				onChange={handleChange}
				startAdornment={
					<InputAdornment position="start">
						<HttpsOutlinedIcon className="text-[20px]" />
					</InputAdornment>
				}
				endAdornment={
					<InputAdornment position="end">
						<IconButton
							aria-label="toggle password visibility"
							onClick={handleClickShowPassword}
							onMouseDown={handleMouseDownPassword}
							edge="end"
							className="pr-3"
						>
							{showPassword ? (
								<VisibilityOffOutlined className="text-[20px]" />
							) : (
								<VisibilityOutlined className="text-[20px]" />
							)}
						</IconButton>
					</InputAdornment>
				}
			/>
			{error_state == true ? (
				<span className="text-red-500 text-[14px] pl-4">{error}</span>
			) : (
				""
			)}
		</div>
	);
};

export default PasswordInput;
