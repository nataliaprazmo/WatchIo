import React from "react";
import FilmTable from "./filmTable/FilmTable";
import SiteBreadcrumbs from "../SiteBreadcrumbs";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import NavMenu from "./NavMenu";
import Analytics from "./Analytics";
import Link from "next/link";

const Dashboard = () => {
	return (
		<div className="pt-24 pb-18 pl-[115px] pr-13">
			<NavMenu />
			<SiteBreadcrumbs links={[{ to: "/admin", label: "Serie" }]} />
			<Analytics />
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
