"use client";

import React, { useState, useEffect } from "react";
import { Chip, IconButton, OutlinedInput, Tooltip } from "@mui/material";
import KeyRoundedIcon from "@mui/icons-material/KeyRounded";
import ContentPasteRoundedIcon from "@mui/icons-material/ContentPasteRounded";
import DeleteShareUser from "./DeleteShareUser";
import SiteBreadcrumbs from "@/components/SiteBreadcrumbs";
import CancelSubscription from "./CancelSubscription";
import SuccessMessage from "../SuccessMessage";

const SubscriptionSettings = () => {
	const [message, setMessage] = useState(null);
	const [openMess, setOpenMess] = useState(false);
	const [active, setActive] = useState(false);
	const [code, setCode] = useState("");
	const copy = () => {
		if (active) navigator.clipboard.writeText(code);
	};
	const generate = async () => {
		const token = localStorage.getItem("token");
		if (token) {
			try {
				const response = await fetch(
					"http://localhost:5000/api/subsciptions/sharing/code",
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
					setCode(res.data.shareCode);
					setActive(true);
				}
			} catch (error) {
				if (
					error.response &&
					error.response.status >= 400 &&
					error.response.status <= 500
				) {
					console.error(error);
				}
			}
		}
	};
	const deactivate = async () => {
		const token = localStorage.getItem("token");
		if (token) {
			try {
				const response = await fetch(
					"http://localhost:5000/api/subsciptions/sharing/deactivate",
					{
						method: "POST",
						headers: {
							"Content-Type": "application/json",
							"x-access-token": token,
						},
					}
				);
				if (response.status == 200) {
					setCode("");
					setActive(false);
				}
			} catch (error) {
				if (
					error.response &&
					error.response.status >= 400 &&
					error.response.status <= 500
				) {
					console.error(error);
				}
			}
		}
	};
	const [manage, setManage] = useState(false);
	const [sharedWith, setSharedWith] = useState(null);
	const [subscriptionUserType, setSubscriptionUserType] = useState(null);
	const [owner, setOwner] = useState(null);
	const get = async () => {
		const token = localStorage.getItem("token");
		try {
			const response = await fetch(
				"http://localhost:5000/api/subscriptions/",
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
				setSharedWith(res.data.subscription.subscription.shared_with);
				setSubscriptionUserType(
					res.data.subscription.subscriptionUserType
				);
				setOwner(res.data.subscription.subscription.owner);
			}
		} catch (error) {
			console.error(error);
		}
	};
	useEffect(() => {
		get();
	}, []);
	const [open, setOpen] = useState(false);
	const [toDelete, setToDelete] = useState("");
	const handleClickDelete = (email) => {
		setToDelete(email);
		setOpen(true);
	};
	const [openCancel, setOpenCancel] = useState(false);
	return (
		<div className="pt-24 pb-18 pl-24 pr-8">
			<SiteBreadcrumbs
				links={[
					{ to: "/user", label: "Strona główna" },
					{ to: "/user/subscriptionSettings", label: "Subskrypcja" },
				]}
			/>
			<h1 className="font-bold md:text-32 text-2xl pb-2 mt-12">
				Twoja subskrypcja
			</h1>
			<p className="font-medium text-neutral-400 text-sm pb-6">
				{subscriptionUserType === "owner"
					? "Jesteś właścicielem planu podstawowego. Możesz dzielić się subskrypcją!"
					: "Należysz do subskrypcji dzielonej!"}
			</p>
			{subscriptionUserType === "owner" ? (
				<>
					<h3 className="font-semibold md:text-base text-sm pb-1">
						Kod udostępnienia
					</h3>
					<p className="font-medium text-neutral-400 text-sm pb-4">
						Wygeneruj kod a następnie skopiuj i udostępniaj!
					</p>
					<OutlinedInput
						className="w-48 bg-grey-150 rounded-md"
						sx={{ input: { color: "#fafaf5" } }}
						placeholder="xxx xxx xxx"
						value={code}
						readOnly={true}
						disabled={!active}
						startAdornment={<KeyRoundedIcon className="mr-2" />}
					/>
					<div className="flex flex-row items-center justify-between w-48 pt-3">
						<button
							onClick={generate}
							disabled={active}
							className="flex justify-center px-10 md:pb-2 pb-[6px] md:pt-[7px] pt-[5px] border-2 border-secondary-violet rounded-lg h-fit font-bold transition duration-300 2xl:text-base xl:text-sm text-xs bg-secondary-violet hover:bg-transparent"
						>
							Generuj
						</button>
						<div className="border-2 border-secondary-violet hover:bg-secondary-violet w-fit h-fit rounded-lg">
							<Tooltip title="Skopiuj kod">
								<span>
									<IconButton
										disabled={!active}
										onClick={copy}
									>
										<ContentPasteRoundedIcon
											sx={{ fontSize: "16px" }}
										/>
									</IconButton>
								</span>
							</Tooltip>
						</div>
					</div>
					{active ? (
						<button
							onClick={deactivate}
							className="flex justify-center w-48 mt-2 md:pb-2 pb-[6px] md:pt-[7px] pt-[5px] border-2 border-secondary-violet rounded-lg h-fit font-medium transition duration-300 2xl:text-base xl:text-sm text-xs hover:bg-secondary-violet hover:text-black"
						>
							Deaktywuj kod
						</button>
					) : null}
				</>
			) : null}
			<h3 className="font-semibold md:text-base text-sm pt-6 pb-4">
				{subscriptionUserType === "owner"
					? "Użytkownicy należący do Twojej subskrypcji"
					: "Właściciel subskrypcji dzielonej"}
			</h3>
			{sharedWith && sharedWith.length === 0 ? (
				<p className="text-neutral-400 font-medium">
					Nie dzielisz jeszcze z nikim subskrypcji.
				</p>
			) : (
				<>
					<div className="flex items-center gap-4 flex-row flex-wrap mb-4">
						{manage
							? sharedWith &&
							  sharedWith.map((user, index) => (
									<Chip
										key={index}
										label={user}
										variant="outlined"
										onDelete={() => handleClickDelete(user)}
										sx={{ borderColor: "#9126d9" }}
									/>
							  ))
							: sharedWith &&
							  sharedWith.map((user, index) => (
									<Chip
										key={index}
										label={user}
										variant="outlined"
										sx={{ borderColor: "#9126d9" }}
									/>
							  ))}
						{subscriptionUserType !== "owner"
							? owner && (
									<Chip
										label={owner}
										variant="outlined"
										sx={{ borderColor: "#ff9900" }}
									/>
							  )
							: null}
					</div>
					<div className="flex flex-col justify-start items-start">
						{subscriptionUserType === "owner" ? (
							<button
								onClick={() => setManage(!manage)}
								className="pt-2 font-medium hover:border-secondary-violet hover:border-b-2 transition-all ease-linear duration-300"
							>
								Zarządzaj użytkownikami
							</button>
						) : null}
					</div>
				</>
			)}
			{!message && (
				<button
					onClick={() => setOpenCancel(true)}
					className="mt-6 text-red-600 font-medium hover:text-red-500 transition-colors duration-300"
				>
					Zrezygnuj z subskrypcji
				</button>
			)}
			<DeleteShareUser
				open={open}
				setOpen={setOpen}
				sharedWith={sharedWith}
				setSharedWith={setSharedWith}
				toDelete={toDelete}
			/>
			<CancelSubscription
				open={openCancel}
				setOpen={setOpenCancel}
				setSharedWith={setSharedWith}
				setSubscriptionUserType={setSubscriptionUserType}
				setOwner={setOwner}
				setMessage={setMessage}
				setOpenMess={setOpenMess}
			/>
			{message && (
				<SuccessMessage
					open={openMess}
					setOpen={setOpenMess}
					message={`Anulowano subskrypcję. Możesz korzystać z platformy do ${message}`}
				/>
			)}
		</div>
	);
};

export default SubscriptionSettings;
