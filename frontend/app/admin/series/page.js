import React from "react";
import { FilmTable } from "@/components/admin";
import SiteBreadcrumbs from "@/components/SiteBreadcrumbs";

export default function Page() {
	return (
		<div className="overflow-hidden pt-24 pb-8 pl-24 pr-10">
			<SiteBreadcrumbs
				links={[
					{ label: "Panel", to: "/admin" },
					{ label: "Serie", to: "/admin/series" },
				]}
			/>
			<FilmTable />
		</div>
	);
}
