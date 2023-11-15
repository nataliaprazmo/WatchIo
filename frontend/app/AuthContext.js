"use client";

import { useRouter, usePathname } from "next/navigation";
import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export function useAuth() {
	return useContext(AuthContext);
}

export function AuthProvider({ children }) {
	const [user, setUser] = useState(() => {
		if (typeof window === "undefined") {
			return { user: null, role: null };
		}
		const token = window.localStorage.getItem("token");
		const role = window.localStorage.getItem("role");
		if (token && role) {
			return { user: token, role: role };
		} else {
			return { user: null, role: null };
		}
	});
	const router = useRouter();
	const pathname = usePathname();
	const login = () => {
		const token = localStorage.getItem("token");
		const role = localStorage.getItem("role");
		if (token && role) {
			setUser({
				user: token,
				role: role,
			});
		} else logout();
	};
	const logout = () => {
		setUser({ user: null, role: null });
		localStorage.removeItem("token");
		localStorage.removeItem("role");
		if (pathname !== "/login") {
			router.push("/login");
		}
	};
	const protectAdmin = () => {
		if (user.user === null) {
			logout();
		} else if (user.role !== "admin" && pathname.startsWith("/admin")) {
			router.push("/user");
		}
	};
	const protectUser = () => {
		if (user.user === null) {
			logout();
		} else if (pathname.startsWith("/user") && user.role === "admin") {
			router.push("/admin");
		}
	};
	return (
		<AuthContext.Provider
			value={{ user, login, logout, protectAdmin, protectUser }}
		>
			{children}
		</AuthContext.Provider>
	);
}
