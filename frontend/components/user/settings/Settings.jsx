import React from "react";
import SubSettingsTab from "./SubSettingsTab";
import SiteBreadcrumbs from "@/components/SiteBreadcrumbs";

const Settings = () => {
	return (
		<div className="pt-24 pb-18 pl-24 pr-8">
			<SiteBreadcrumbs
				links={[
					{ to: "/user", label: "Strona główna" },
					{ to: "/user/settings", label: "Ustawienia" },
				]}
			/>
			<SubSettingsTab />
		</div>
	);
};

export default Settings;
