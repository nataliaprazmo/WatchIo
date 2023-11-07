"use client";

import React, { useEffect } from "react";
import { useAuth } from "../AuthContext";

export default function UserLayout({ children }) {
	const { protectUser } = useAuth();
	useEffect(() => {
		protectUser();
	}, []);
	return <section>{children}</section>;
}
