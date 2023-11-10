"use client";
import { useEffect } from "react";
import { useAuth } from "../AuthContext";

export default function AdminLayout({ children }) {
	const { user, protectAdmin } = useAuth();
	useEffect(() => {
		protectAdmin();
	}, []);
	if (user.user === null || user.role !== "admin") return;
	return <section>{children}</section>;
}
