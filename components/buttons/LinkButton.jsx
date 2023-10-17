"use client";

import React from "react";
import Link from "next/link";
import Button from "./Button";
import { usePathname } from "next/navigation";

const LinkButton = ({ to, children, variant, type }) => {
	const pathname = usePathname();
	let linkClasses = `link ${pathname === to ? "activeNav" : ""} `;
	return (
		<Button variant={variant} type={type}>
			<Link className={linkClasses} href={to}>
				{children}
			</Link>
		</Button>
	);
};
export default LinkButton;
