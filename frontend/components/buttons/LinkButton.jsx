"use client";

import React from "react";
import Link from "next/link";
import Button from "./Button";
import { usePathname } from "next/navigation";

const LinkButton = ({ to, children, variant, type, color }) => {
	const pathname = usePathname();
	let linkClasses = `link ${
		pathname === to &&
		!pathname.startsWith("/signup") &&
		!pathname.startsWith("/login")
			? "activeNav"
			: ""
	} `;
	return (
		<Button variant={variant} type={type} color={color}>
			<Link className={linkClasses} href={to}>
				{children}
			</Link>
		</Button>
	);
};
export default LinkButton;
