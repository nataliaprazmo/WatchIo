import React from "react";
import Profile from "@/components/Profile";
import SiteBreadcrumbs from "@/components/SiteBreadcrumbs";

export default function Page() {
	return (
		<div className="overflow-hidden pt-24 pb-8 pl-24 pr-8 ">
			<SiteBreadcrumbs
				links={[
					{ label: "Panel", to: "/admin" },
					{ label: "Konto", to: "/admin/profile" },
				]}
			/>
			<Profile />
		</div>
	);
}
