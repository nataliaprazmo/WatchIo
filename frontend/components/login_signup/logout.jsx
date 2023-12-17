"use client";
import { useRouter, usePathname } from "next/navigation";

const useLogout = () => {
	const router = useRouter();
	const pathname = usePathname();

	const logout = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("role");
		document.cookie =
			"token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
		document.cookie =
			"role=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
		if (pathname !== "/login") {
			router.push("/login");
		}
	};
	return logout;
};

export default useLogout;
