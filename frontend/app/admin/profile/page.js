import React from "react";
import { NavMenu } from "@/components/admin";
import Profile from "@/components/admin/Profile";
import SiteBreadcrumbs from "@/components/SiteBreadcrumbs";

export default function Page() {
	return (
		<main className="overflow-hidden pt-24 pb-8 pl-24 pr-8 ">
			<NavMenu />
			<SiteBreadcrumbs
				links={[
					{ label: "Panel", to: "/admin" },
					{ label: "Konto", to: "/admin/profile" },
				]}
			/>
			<Profile />
		</main>
	);
}
