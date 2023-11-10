"use client";

import React, { useEffect } from "react";
import { useAuth } from "../AuthContext";

export default function UserLayout({ children }) {
	const { protectUser, user } = useAuth();
	useEffect(() => {
		protectUser();
	}, []);
	if (user.user === null || user.role !== "user") return;
	return <section>{children}</section>;
}
