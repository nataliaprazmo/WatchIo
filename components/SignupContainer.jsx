"use client";

import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import { OutlinedInput } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import VisibilityOutlined from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlined from "@mui/icons-material/VisibilityOffOutlined";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import Link from "next/link";
import Button from "./buttons/Button";
import LocalPhoneOutlined from "@mui/icons-material/LocalPhoneOutlined";
import Person2Outlined from "@mui/icons-material/Person2Outlined";
import LinkButton from "./buttons/LinkButton";

export const SignupContainer = () => {
	const [showPassword, setShowPassword] = useState(false);

	const handleClickShowPassword = () => setShowPassword((show) => !show);

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};
	const [data, setData] = useState({
		name: "",
		phone: "",
		email: "",
		password: "",
		repeatedPassword: "",
		agreement: "",
	});
	const [error, setError] = useState("");
	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "";
			await axios.post(url, data);
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
		<div className="flex flex-col items-center py-10 px-12 bg-grey-200 rounded-[16px] w-fit h-fit mt-32">
			<h1 className="font-bold text-[32px] mb-3">Witaj!</h1>
			<form className="flex flex-col gap-4" onSubmit={handleSubmit}>
				<div className="flex flex-col gap-[4px] w-full">
					<p className="font-semibold text-[16px] pl-3">
						Imię i nazwisko
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
						id="name"
						required
						onChange={handleChange}
						type="text"
						startAdornment={
							<Person2Outlined className="text-[20px]" />
						}
					/>
				</div>
				<div className="flex flex-col gap-[4px] w-full">
					<p className="font-semibold text-[16px] pl-3">
						Numer telefonu
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
						id="phone"
						required
						onChange={handleChange}
						type="phone"
						defaultValue="123 456 789"
						startAdornment={
							<LocalPhoneOutlined className="text-[20px]" />
						}
					/>
				</div>
				<div className="flex flex-col gap-[4px] w-full">
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
						onChange={handleChange}
						type="email"
						// defaultValue="example@mail.com"
						startAdornment={
							<AlternateEmailIcon className="text-[20px]" />
						}
					/>
				</div>
				<div className="flex flex-col gap-[4px] w-full">
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
				<div className="flex flex-col gap-[4px] w-full">
					<p className="font-semibold text-[16px] pl-3">
						Powtórz hasło
					</p>
					<OutlinedInput
						className="w-[400px] bg-[#404040] rounded-[8px] "
						sx={{
							input: {
								color: "#fafaf5",
								border: "0",
								paddingLeft: "4px",
							},
						}}
						id="repeatedPssword"
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
									aria-label="toggle repeatedPssword visibility"
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
				<div className="px-2 mb-3">
					<FormControlLabel
						control={
							<Checkbox
								id="agreement"
								onChange={handleChange}
								className="h-[12px] pl-4"
								sx={{
									svg: {
										fontSize: "16px",
									},
								}}
							/>
						}
						label="Zgadzam się z"
						sx={{
							span: {
								fontSize: "12px",
								fontFamily: "Montserrat",
							},
						}}
					/>
					<Link
						href=""
						className="text-primary-orange text-[12px] font-regular"
					>
						polityką prywatności
					</Link>
				</div>
				<Button to="/" variant="filled" type="submit">
					Zarejestruj się
				</Button>
			</form>
		</div>
	);
};
