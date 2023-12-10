"use client";
import React, { useState } from "react";
import { SendRounded } from "@mui/icons-material";
import Tooltip from "@mui/material/Tooltip";

const ShareRoom = ({ link }) => {
	const [open, setOpen] = useState(false);
	return (
		<Tooltip
			PopperProps={{
				disablePortal: true,
			}}
			onClose={() => {
				setOpen(false);
			}}
			open={open}
			title="Skopiowano link"
		>
			<button
				onClick={() => {
					setOpen(true);
					navigator.clipboard.writeText(link);
				}}
				className="font-medium text-sm flex flex-row items-center gap-3"
			>
				Udostępnij pokój
				<SendRounded
					sx={{
						fontSize: "16px",
						path: { color: "#9126d9" },
					}}
				/>
			</button>
		</Tooltip>
	);
};

export default ShareRoom;
