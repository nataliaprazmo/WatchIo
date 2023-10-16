"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "./Button";

const LinkText = ({ to, children }) => {
	const pathname = usePathname();
	let linkClasses = `link ${pathname === to ? "active" : ""} `;
	return (
		<Button>
			<Link className={linkClasses} href={to}>
				{children}
			</Link>
		</Button>
	);
};
export default LinkText;
