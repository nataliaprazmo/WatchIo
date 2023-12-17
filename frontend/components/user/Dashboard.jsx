import React from "react";
import { NavigateNextRounded } from "@mui/icons-material";
import SiteBreadcrumbs from "../SiteBreadcrumbs";
import SeriesSections from "./categories/SeriesSections";
import HeroSlider from "./HeroSlider";

const Dashboard = () => {
	return (
		<div className="pt-24 pb-18 pl-24 pr-8">
			<div className="flex gap-1 items-center mb-6">
				<NavigateNextRounded
					className="text-xs"
					sx={{ path: { color: "#ff9900" } }}
				/>
				<SiteBreadcrumbs
					links={[{ to: "/user", label: "Strona główna" }]}
				/>
			</div>
			<HeroSlider />
			<SeriesSections />
		</div>
	);
};

export default Dashboard;
