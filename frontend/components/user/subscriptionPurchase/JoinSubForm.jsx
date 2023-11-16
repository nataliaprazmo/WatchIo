import Input from "@/components/login_signup/Input";
import VpnKeyRoundedIcon from "@mui/icons-material/VpnKeyRounded";
import React, { useState } from "react";

const JoinSubForm = ({ setHasSubscription }) => {
	const [shareCode, setShareCode] = useState("");
	const change = (e) => {
		e.preventDefault();
		setShareCode(e.target.value);
	};
	const join = async () => {
		const token = localStorage.getItem("token");
		if (token) {
			try {
				const response = await fetch(
					"http://localhost:5000/api/subsciptions/sharing/join",
					{
						method: "POST",
						headers: {
							"Content-Type": "application/json",
							"x-access-token": token,
						},
						body: JSON.stringify({ shareCode: shareCode }),
					}
				);
				if (response.status == 200) {
					const res = await response.json();
					console.log(res.message);
					setHasSubscription(true);
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
		<div className="w-full flex flex-col gap-4 pl-10">
			<Input
				label="Kod udostępnienia subskrypcji"
				id="code"
				type="text"
				handleChange={change}
				icon={<VpnKeyRoundedIcon className="mr-2" />}
				name="code"
				value={shareCode}
				placeholder="xxx xxx xxx"
			/>
			<button onClick={join}>Dołącz</button>
		</div>
	);
};

export default JoinSubForm;
