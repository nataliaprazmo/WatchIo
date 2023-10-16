"use client";

import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import VisibilityOutlined from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlined from "@mui/icons-material/VisibilityOffOutlined";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import Link from "next/link";
import Button from "./buttons/Button";

export const LoginContainer = () => {
	const [showPassword, setShowPassword] = useState(false);

	const handleClickShowPassword = () => setShowPassword((show) => !show);

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");
	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			window.location = "/";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};
	return (
		<div className="flex flex-col items-center p-12 bg-grey-200 rounded-[16px] w-fit h-fit mt-32">
			<h1 className="font-bold text-[32px] mb-8">Witaj ponownie!</h1>
			<form className="flex flex-col gap-4" onSubmit={handleSubmit}>
				<div className="flex flex-col gap-[8px] w-full">
					<p className="font-semibold text-[16px] pl-3">
						Adres email
					</p>
					<OutlinedInput
						className="w-[400px] bg-[#404040] rounded-[8px]"
						sx={{
							input: {
								color: "#fafaf5",
								border: "0",
								paddingLeft: "10px",
							},
						}}
						id="email"
						required
						type="email"
						onChange={handleChange}
						// defaultValue="example@mail.com"
						startAdornment={
							<AlternateEmailIcon className="text-[20px]" />
						}
					/>
				</div>
				<div className="flex flex-col gap-[8px] w-full">
					<p className="font-semibold text-[16px] pl-3">Hasło</p>
					<OutlinedInput
						className="w-[400px] bg-[#404040] rounded-[8px] "
						sx={{
							input: {
								color: "#fafaf5",
								border: "0",
								paddingLeft: "4px",
							},
						}}
						id="password"
						type={showPassword ? "text" : "password"}
						required
						onChange={handleChange}
						// defaultValue="Hasło.123!"
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
				</div>
				<div className="flex justify-between items-center px-2 mb-4">
					<FormControlLabel
						control={
							<Checkbox
								className="h-[12px] pl-4"
								sx={{
									svg: {
										fontSize: "16px",
									},
								}}
							/>
						}
						label="Zapamiętaj mnie"
						sx={{
							span: {
								fontSize: "12px",
								fontFamily: "Montserrat",
							},
						}}
					/>
					<Link
						href="/"
						className="text-primary-orange text-[12px] font-regular"
					>
						Odzyskiwanie hasła
					</Link>
				</div>
				<Button variant="filled" type="submit">
					Zaloguj się
				</Button>
			</form>
		</div>
	);
};
