"use client";
import React, { useState } from "react";
import Link from "next/link";
import { OutlinedInput } from "@mui/material";
import LocalPlayOutlinedIcon from "@mui/icons-material/LocalPlayOutlined";

const JoinRoom = () => {
	const [roomId, setRoomId] = useState("");
	return (
		<div className="flex items-center justify-center gap-6">
			<OutlinedInput
				className="w-72 bg-grey-150 rounded-md"
				sx={{ input: { color: "#fafaf5" } }}
				placeholder="xxxx xxxx xxxx xxxx xxxx xxxx"
				value={roomId}
				onChange={(e) => setRoomId(e.target.value)}
				startAdornment={
					<LocalPlayOutlinedIcon
						sx={{ path: { color: "#9126d9" } }}
						className="mr-3"
					/>
				}
			/>
			<Link
				href={`/user/rooms/${roomId}`}
				className="py-2 px-8 bg-secondary-violet rounded font-semibold hover:bg-violet-700 transition-colors duration-500"
			>
				Dołącz
			</Link>
		</div>
	);
};

export default JoinRoom;
