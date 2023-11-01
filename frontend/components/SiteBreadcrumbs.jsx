import React from "react";
import { NavigateNextRounded } from "@mui/icons-material";
import { Breadcrumbs } from "@mui/material";
import { LinkButton } from "./buttons";

const SiteBreadcrumbs = ({ links }) => {
	return (
		<Breadcrumbs
			separator={<NavigateNextRounded fontSize="small" />}
			aria-label="breadcrumb"
		>
			{links.map((link) => (
				<LinkButton key={link.label} to={link.to}>
					{link.label}
				</LinkButton>
			))}
		</Breadcrumbs>
	);
};

export default SiteBreadcrumbs;
