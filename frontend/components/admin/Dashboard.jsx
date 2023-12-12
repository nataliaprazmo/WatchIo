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
					sx={{
						position: "fixed",
						bottom: "32px",
						right: "24px",
						backgroundColor: "#9126d9",
						"&:hover": {
							backgroundColor: "#b267e4",
						},
					}}
					className="bg-secondary-violet"
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
