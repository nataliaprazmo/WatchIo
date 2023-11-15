import { Button } from "@/components/buttons";
import Input from "@/components/login_signup/Input";
import VpnKeyRoundedIcon from "@mui/icons-material/VpnKeyRounded";
import React, { useState } from "react";

const JoinSubForm = () => {
	const [shareCode, setShareCode] = useState("");
	const change = (e) => {
		e.preventDefault();
		setShareCode(e.target.value);
	};
	const join = () => {
		//dołącz, sprawdź czy kod jest ok
	};
	return (
		<form onSubmit={join} className="w-full flex flex-col gap-4 pl-10">
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
			<Button type="submit" variant="filled">
				Dołącz
			</Button>
		</form>
	);
};

export default JoinSubForm;
