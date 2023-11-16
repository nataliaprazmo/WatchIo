"use client";

import React, { useState } from "react";
import { IconButton, OutlinedInput, Tooltip } from "@mui/material";
import KeyRoundedIcon from "@mui/icons-material/KeyRounded";
import ContentPasteRoundedIcon from "@mui/icons-material/ContentPasteRounded";

const SubscriptionSettings = () => {
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
	return (
		<div className="pt-24 pb-18 pl-24 pr-8">
			<h1 className="font-bold md:text-32 text-2xl pb-2">
				Twoja subskrypcja
			</h1>
			<p className="font-medium text-neutral-400 text-sm pb-6">
				Jesteś właścicielem planu podstawowego. Możesz dzielić się
				subskrypcją!
			</p>
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
						<IconButton disabled={!active} onClick={copy}>
							<ContentPasteRoundedIcon
								sx={{ fontSize: "16px" }}
							/>
						</IconButton>
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
			<h3 className="font-semibold md:text-base text-sm pt-6 pb-4">
				Użytkownicy należący do Twojej subskrypcji
			</h3>
			<p className="text-neutral-400 font-medium">
				Nie dzielisz jeszcze z nikim subskrypcji.
			</p>
			<button className="pt-2 font-medium hover:border-secondary-violet hover:border-b-2 transition-all ease-linear duration-300">
				Zarządzaj użytkownikami
			</button>
		</div>
	);
};

export default SubscriptionSettings;
