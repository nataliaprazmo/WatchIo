import React from "react";
import FilmTable from "./filmTable/FilmTable";
import SiteBreadcrumbs from "../SiteBreadcrumbs";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import { NavigateNextRounded } from "@mui/icons-material";
import Analytics from "./Analytics";
import Link from "next/link";

const Dashboard = () => {
	return (
		<div className="pt-24 pb-18 pl-[115px] pr-13">
			<div className="flex gap-1 items-center">
				<NavigateNextRounded
					className="text-xs"
					sx={{ path: { color: "#ff9900" } }}
				/>
				<SiteBreadcrumbs links={[{ to: "/admin", label: "Panel" }]} />
			</div>
			<Analytics />
			<h1 className="pl-4 font-semibold text-xl mb-4">
				Zarządzaj seriami
			</h1>
			<FilmTable />
			<Link href="/admin/series/add">
				<Fab
					aria-label="add"
					className="fixed bottom-8 right-6 bg-primary-orange hover:bg-primary-orange transition-all duration-700 shadow-2xl shadow-primary-orange"
					sx={{ "&:hover": { height: "60px", width: "60px" } }}
				>
					<AddIcon
						sx={{
							path: { color: "#1a1a1a" },
						}}
					/>
				</Fab>
			</Link>
		</div>
	);
};

export default Dashboard;
