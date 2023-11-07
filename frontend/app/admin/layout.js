"use client";
import { useEffect } from "react";
import { useAuth } from "../AuthContext";

export default function AdminLayout({ children }) {
	const { protectAdmin } = useAuth();
	useEffect(() => {
		protectAdmin();
	}, []);
	return <section>{children}</section>;
}
