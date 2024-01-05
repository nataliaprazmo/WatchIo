"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "./Button";

const LinkText = ({ to, children }) => {
	const pathname = usePathname();
	let linkClasses = `link ${pathname === to ? "active" : ""} `;
	return (
		<Link className={linkClasses} href={to}>
			<Button>{children}</Button>
		</Link>
	);
};
export default LinkText;
