"use client";

import React, { useState, useEffect } from "react";
import { Avatar, IconButton, Input } from "@mui/material";
import ModeEditRoundedIcon from "@mui/icons-material/ModeEditRounded";
import Link from "next/link";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import DoneAllRoundedIcon from "@mui/icons-material/DoneAllRounded";

const Profile = () => {
	const [data, setData] = useState({
		name: "Admin",
		surname: "Admiński",
		email: "admin@mail.com",
		phone: "123456789",
		password: "password",
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
				console.log(response);
				console.log(response.message);
				console.log(response.data);
				console.log(response.data.userData);
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
	// useEffect(() => {
	// 	getUserData();
	// }, []);
	const [emailEdit, setEmailEdit] = useState(false);
	const [phoneEdit, setPhoneEdit] = useState(false);
	const [passwordEdit, setPasswordEdit] = useState(false);
	const [tempData, setTempData] = useState({ ...data });
	const handleEdit = (field) => {
		setEditMode(true);
		setTempData({ ...data, [field]: data[field] });
	};

	const handleSave = () => {
		setData({ ...tempData });
		setEditMode(false);
	};

	const handlePasswordEdit = () => {
		setPasswordEdit(true);
	};
	const handleEmailEdit = () => {
		setEmailEdit(true);
	};
	const handlePhoneEdit = () => {
		setPhoneEdit(true);
	};

	const handlePasswordSave = () => {
		setPasswordEdit(false);
	};
	const EditIco = ({ click }) => {
		return (
			<IconButton className="w-fit h-fit" onClick={click}>
				<ModeEditRoundedIcon
					sx={{
						fontSize: "18px",
						"&:hover": { path: { color: "#ff9900" } },
					}}
					className="cursor-pointer"
				/>
			</IconButton>
		);
	};
	const DataInput = ({ placeholder, type }) => {
		return (
			<Input
				placeholder={placeholder}
				type={type}
				className="border-b-[1px] border-white bg-transparent w-32 text-white"
			/>
		);
	};
	return (
		<div className="mt-10 relative p-6 rounded-md bg-grey-200">
			{/* <div className="bg-gradient-to-tr from-secondary-violet to-purple-400 absolute bottom-48 right-4 w-full h-18 opacity-80 rounded-lg" /> */}
			<Avatar alt="admin_avatar" className="w-16 h-16 bg-grey-250 ">
				<AdminPanelSettingsIcon sx={{ path: { color: "#9126d9" } }} />
			</Avatar>
			<div className="flex items-end gap-2">
				<h1 className="text-32 font-semibold text-primary-orange mt-6">
					{data.name} {data.surname}
				</h1>
				<Link href="/admin/profile">
					<ManageAccountsOutlinedIcon
						className="text-2xl"
						sx={{ path: { color: "#ff9900" } }}
					/>
				</Link>
			</div>
			<div className="grid grid-cols-4 mb-8 mt-6 ">
				{emailEdit ? (
					<>
						<div className="col-span-3 flex gap-4 ">
							<DataInput placeholder="Nowy email" type="text" />
						</div>
						<IconButton
							onClick={() => setEmailEdit(false)}
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
						<p>Email:</p>
						<p className="col-span-2">{data.email}</p>
						<EditIco click={handleEmailEdit} />
					</>
				)}
				{phoneEdit ? (
					<>
						<div className="col-span-3 flex gap-4 ">
							<DataInput placeholder="Nowy email" type="text" />
						</div>
						<IconButton
							onClick={() => setPhoneEdit(false)}
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
						<p>Nr telefonu:</p>
						<p className="col-span-2">{data.phone}</p>
						<EditIco click={handlePhoneEdit} />
					</>
				)}
				{passwordEdit ? (
					<>
						<div className="col-span-3 flex gap-4 ">
							<DataInput
								placeholder="Nowe hasło"
								type="password"
							/>
							<DataInput
								placeholder="Powtórz hasło"
								type="password"
							/>
						</div>
						<IconButton
							onClick={handlePasswordSave}
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
			</div>
		</div>
	);
};

export default Profile;
