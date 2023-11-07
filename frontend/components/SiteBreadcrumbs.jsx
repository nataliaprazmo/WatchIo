"use client";

import React from "react";
import { NavigateNextRounded } from "@mui/icons-material";
import { Breadcrumbs } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SiteBreadcrumbs = ({ links }) => {
	const pathname = usePathname();
	// const crumbs = pathname.split("/").shift().map((p, index) => {
	// 		const pathArr = paths.slice(0, index + 1);
	// 		const breadcrumbPath = "/" + pathArr.join("/");
	// 		return { name: p, path: breadcrumbPath };
	// 	});
	// 	console.log(crumbs);
	return (
		<Breadcrumbs
			separator={<NavigateNextRounded className="text-xs" />}
			aria-label="breadcrumb"
		>
			{links.map((link) => (
				<Link
					key={link.label}
					href={link.to}
					className={`link ${
						pathname === link.to ? "text-primary-orange" : ""
					} text-xs uppercase font-medium hover:text-primary-orange`}
				>
					{link.label}
				</Link>
			))}
		</Breadcrumbs>
	);
};

export default SiteBreadcrumbs;
