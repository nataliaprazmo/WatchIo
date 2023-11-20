"use client";

import React, { useEffect } from "react";
import { useAuth } from "../AuthContext";
import NavMenu from "@/components/NavMenu";
import FooterSection from "@/components/FooterSection";

export default function UserLayout({ children }) {
	const { protectUser, user } = useAuth();
	useEffect(() => {
		protectUser();
	}, []);
	if (user.user === null || user.role !== "user") return;
	return (
		<>
			<NavMenu />
			{children}
			<FooterSection />
		</>
	);
}
