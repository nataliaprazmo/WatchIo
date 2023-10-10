"use client";

import React, { useState } from "react";
import { Container, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import FilledInput from "@mui/material/FilledInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { InputField } from "./InputField";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";

export const LoginContainer = () => {
	const [showPassword, setShowPassword] = useState(false);

	const handleClickShowPassword = () => setShowPassword((show) => !show);

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};
	return (
		<Box>
			<Container
				className="px-[64px] py-[72px]"
				sx={{
					width: "fit-content",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					gap: "32px",
				}}
			>
				<Typography className="text-3xl">Witaj ponownie!</Typography>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						gap: "16px",
					}}
				>
					<InputField
						fieldName="Adres email"
						defaultText="example@mail.com"
						id="email"
						type="email"
						startIcon={
							<AlternateEmailIcon
								sx={{
									fontSize: "16px",
									color: "#fafaf5",
								}}
							/>
						}
					/>
					<Box
						className="text-white"
						sx={{
							display: "flex",
							flexDirection: "column",
							gap: "8px",
						}}
					>
						<Typography className="px-[16px] text-base font-semibold">
							Hasło
						</Typography>
						<FormControl
							sx={{
								width: "400px",
								backgroundColor: "#404040",
								borderRadius: "8px",
							}}
							variant="filled"
						>
							<InputLabel
								htmlFor="password"
								sx={{
									color: "#fafaf5",
								}}
							>
								Hasło
							</InputLabel>
							<FilledInput
								id="password"
								type={showPassword ? "text" : "password"}
								startAdornment={
									<InputAdornment position="start">
										<HttpsOutlinedIcon
											sx={{
												color: "#fafaf5",
												mr: "8px",
											}}
										/>
									</InputAdornment>
								}
								endAdornment={
									<InputAdornment position="end">
										<IconButton
											aria-label="toggle password visibility"
											onClick={handleClickShowPassword}
											onMouseDown={
												handleMouseDownPassword
											}
											edge="end"
											sx={{
												color: "#fafaf5",
											}}
										>
											{showPassword ? (
												<VisibilityOff />
											) : (
												<Visibility />
											)}
										</IconButton>
									</InputAdornment>
								}
							/>
						</FormControl>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};
