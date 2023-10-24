"use client";

import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Checkbox from "@mui/material/Checkbox";
import { Alert } from "@mui/material";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LocalPhoneOutlined from "@mui/icons-material/LocalPhoneOutlined";
import Person2Outlined from "@mui/icons-material/Person2Outlined";
import { Button } from "../buttons";
import Input from "./Input";
import PasswordInput from "./PasswordInput";

export const SignupContainer = () => {
	const router = useRouter();
	const [showPassword1, setShowPassword1] = useState(false);
	const [showPassword2, setShowPassword2] = useState(false);
	const [data, setData] = useState({
		credentials: {
			email: "",
			password: "",
			repeatedPassword: "",
		},
		user_data: {
			first_name: "",
			last_name: "",
			phone_number: "",
		},
	});

	useEffect(() => {
		const savedData = localStorage.getItem("formData");
		if (savedData) {
			setData(JSON.parse(savedData));
		}
	}, []);

	const [error, setError] = useState("");
	const [errorPass, setErrorPass] = useState("");
	const [errorPassState, setErrorPassState] = useState(false);

	const handleChange = ({ currentTarget: input }) => {
		const { name, value, type, checked } = input;
		const newValue = type === "checkbox" ? checked : value;
		const [group, field] = name.split(".");
		const updatedData = {
			...data,
			[group]: {
				...data[group],
				[field]: newValue,
			},
		};
		setData(updatedData);
		localStorage.setItem("formData", JSON.stringify(updatedData));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (data.credentials.password !== data.credentials.repeatedPassword) {
			setErrorPass("Hasła się nie zgadzają");
			setErrorPassState(true);
			return;
		} else {
			setErrorPass("");
			setErrorPassState(false);
		}

		try {
			const response = await fetch(
				"http://localhost:5000/api/users/register",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ ...data }),
				}
			);
			console.log(data);
			console.log(response.status);
			if (response.status == 201) {
				localStorage.removeItem("formData");
				console.log("success");
				router.push("/login");
			} else {
				if (response.status == 409)
					setError("Użytkownik o podanym mailu istnieje");
				else setError("Podano nieprawidłowe dane ");
				console.error("Registration failed");
			}
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError("Błąd serwera");
				console.error(error);
			}
		}
	};
	return (
		<div className="flex flex-col items-center py-10 px-12 bg-grey-200 rounded-[16px] w-fit h-fit mt-32">
			<h1 className="font-bold text-[32px] mb-3">Witaj!</h1>
			<form className="flex flex-col gap-4" onSubmit={handleSubmit}>
				<Input
					label="Imię"
					id="firstName"
					name="user_data.first_name"
					value={data.user_data.first_name}
					handleChange={handleChange}
					type="text"
					icon={<Person2Outlined className="text-[20px]" />}
				/>
				<Input
					label="Nazwisko"
					id="lastName"
					name="user_data.last_name"
					value={data.user_data.last_name}
					type="text"
					handleChange={handleChange}
					icon={<Person2Outlined className="text-[20px]" />}
				/>
				<Input
					label="Numer telefonu"
					id="phone"
					name="user_data.phone_number"
					value={data.user_data.phone_number}
					type="tel"
					handleChange={handleChange}
					icon={<LocalPhoneOutlined className="text-[20px]" />}
				/>
				<Input
					label="Adres Email"
					id="email"
					name="credentials.email"
					value={data.credentials.email}
					type="email"
					handleChange={handleChange}
					icon={<AlternateEmailIcon className="text-[20px]" />}
				/>
				<PasswordInput
					label="Hasło"
					id="password"
					name="credentials.password"
					value={data.credentials.password}
					handleChange={handleChange}
					handleClickShowPassword={() =>
						setShowPassword1((show) => !show)
					}
					showPassword={showPassword1}
					error_state={errorPassState}
				/>
				<PasswordInput
					label="Powtórz hasło"
					id="repeatedPassword"
					name="credentials.repeatedPassword"
					value={data.credentials.repeatedPassword}
					handleChange={handleChange}
					handleClickShowPassword={() =>
						setShowPassword2((show) => !show)
					}
					showPassword={showPassword2}
					error={errorPass}
					error_state={errorPassState}
				/>
				<div className="px-2 mb-4">
					<Checkbox
						id="agreement"
						required
						className="h-[12px] pl-4"
						sx={{
							svg: {
								fontSize: "16px",
							},
						}}
					/>
					<label htmlFor="agreement" className="text-[12px]">
						Zgadzam się z
						{
							<Link
								href="/policy#privacy"
								className="text-primary-orange text-[12px] font-regular"
							>
								polityką prywatności
							</Link>
						}{" "}
						i
						{
							<Link
								href="/policy#terms"
								className="text-primary-orange text-[12px] font-regular"
							>
								regulaminem
							</Link>
						}
					</label>
				</div>

				<Button to="/" variant="filled" type="submit">
					Zarejestruj się
				</Button>
				{error !== "" ? (
					<span className="mt-2">
						<Alert variant="outlined" severity="error">
							{error}
						</Alert>
					</span>
				) : (
					""
				)}
			</form>
		</div>
	);
};
