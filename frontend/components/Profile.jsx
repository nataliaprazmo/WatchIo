"use client";

import React, { useState, useEffect } from "react";
import { Avatar, IconButton, Input } from "@mui/material";
import ModeEditRoundedIcon from "@mui/icons-material/ModeEditRounded";
import Link from "next/link";
import Person2RoundedIcon from "@mui/icons-material/Person2Rounded";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import DoneAllRoundedIcon from "@mui/icons-material/DoneAllRounded";
import { Alert } from "@mui/material";

const Profile = () => {
	const role =
		typeof window !== "undefined" ? localStorage.getItem("role") : null;
	const [userData, setUserData] = useState({
		first_name: "",
		last_name: "",
		phone_number: "",
		email: "",
	});
	const getUserData = async () => {
		const token = localStorage.getItem("token");
		if (token) {
			try {
				const response = await fetch(
					"http://localhost:5000/api/users/",
					{
						method: "GET",
						headers: {
							"Content-Type": "application/json",
							"x-access-token": token,
						},
					}
				);
				if (response.status == 200) {
					const res = await response.json();
					const { first_name, last_name, phone_number, email } =
						res.data.userData;
					setUserData({
						first_name,
						last_name,
						phone_number,
						email,
					});
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
		}
	};
	useEffect(() => {
		getUserData();
	}, []);
	const [passwords, setPasswords] = useState({
		oldPassword: "",
		newPassword: "",
	});
	const handlePasswordsChange = ({ currentTarget: input }) => {
		setPasswords({ ...passwords, [input.name]: input.value });
	};
	const changeUserPassword = async () => {
		if (passwords.oldPassword === "" || passwords.newPassword === "") {
			console.log("Podaj hasła");
			setPasswordEdit(false);
			return;
		}
		const token = localStorage.getItem("token");
		if (token) {
			try {
				const response = await fetch(
					"http://localhost:5000/api/users/password",
					{
						method: "POST",
						headers: {
							"Content-Type": "application/json",
							"x-access-token": token,
						},
						body: JSON.stringify({ ...passwords }),
					}
				);
				console.log(response.status);
				if (response.status == 409) {
					console.log("wrong password");
					setError_state(true);
				}
				if (response.status == 200) {
					const res = await response.json();
					console.log("changed password");
					setAlertState(true);
					setError_state(false);
					setPasswordEdit(false);
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
		}
	};
	const [passwordEdit, setPasswordEdit] = useState(false);

	const handlePasswordEdit = () => {
		setPasswordEdit(true);
	};
	const [error_state, setError_state] = useState(false);
	const [alertState, setAlertState] = useState(false);
	return (
		<div className="mt-10 relative p-6 rounded-md bg-grey-200">
			{/* <div className="bg-gradient-to-tr from-secondary-violet to-purple-400 absolute bottom-48 right-4 w-full h-18 opacity-80 rounded-lg" /> */}
			<Avatar alt="admin_avatar" className="w-16 h-16 bg-grey-250 ">
				{role === "admin" ? (
					<AdminPanelSettingsIcon
						sx={{ path: { color: "#9126d9" } }}
					/>
				) : (
					<Person2RoundedIcon
						sx={{ path: { color: "#9126d9" } }}
						className="text-32"
					/>
				)}
			</Avatar>
			<div className="flex items-end gap-2">
				<h1 className="text-32 font-semibold text-primary-orange mt-6">
					{userData.first_name} {userData.last_name}
				</h1>
				<Link href={`/${role}/profile`}>
					<ManageAccountsOutlinedIcon
						className="text-2xl"
						sx={{ path: { color: "#ff9900" } }}
					/>
				</Link>
			</div>
			<div className="grid grid-cols-4 mb-8 mt-6 gap-1">
				<p>Email:</p>
				<p className="col-span-3">{userData.email}</p>
				<p>Nr telefonu:</p>
				<p className="col-span-2">{userData.phone_number}</p>
				{passwordEdit ? (
					<>
						<div className="col-span-3 flex gap-4 ">
							<Input
								placeholder="Stare hasło"
								type="password"
								name="oldPassword"
								value={passwords.oldPassword}
								onChange={handlePasswordsChange}
								error={error_state}
								className="border-b-[1px] border-white bg-transparent w-32 text-white"
							/>
							<Input
								placeholder="Nowe hasło"
								type="password"
								name="newPassword"
								value={passwords.newPassword}
								onChange={handlePasswordsChange}
								className="border-b-[1px] border-white bg-transparent w-32 text-white"
							/>
							{error_state == true ? (
								<span className="text-red-500 text-sm pl-4">
									Niepoprawne stare hasło
								</span>
							) : (
								""
							)}
						</div>
						<IconButton
							onClick={changeUserPassword}
							className="w-fit h-fit"
						>
							<DoneAllRoundedIcon
								sx={{
									fontSize: "18px",
									"&:hover": { path: { color: "#ff9900" } },
								}}
							/>
						</IconButton>
					</>
				) : (
					<>
						<p className="col-span-3">Hasło</p>
						<IconButton
							onClick={handlePasswordEdit}
							className="w-fit h-fit"
						>
							<ModeEditRoundedIcon
								sx={{
									fontSize: "18px",
									"&:hover": { path: { color: "#ff9900" } },
								}}
								className="cursor-pointer"
							/>
						</IconButton>
					</>
				)}
				{alertState ? (
					<Alert
						severity="success"
						onClose={() => {
							setAlertState(false);
						}}
						className="bg-grey-300 col-span-2"
						sx={{
							div: { color: "green" },
							path: { color: "green" },
						}}
					>
						Zmieniono hasło
					</Alert>
				) : null}
			</div>
		</div>
	);
};

export default Profile;
