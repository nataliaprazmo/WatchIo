"use client";

import React, { useEffect } from "react";
import { useAuth } from "../AuthContext";
import NavMenu from "@/components/NavMenu";

export default function UserLayout({ children }) {
	const { protectUser, user } = useAuth();
	useEffect(() => {
		protectUser();
	}, []);
	if (user.user === null || user.role !== "user") return;
	return (
		<section>
			<NavMenu />
			{children}
		</section>
	);
}
