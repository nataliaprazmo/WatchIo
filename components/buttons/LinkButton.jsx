import React from "react";
import Link from "next/link";
import Button from "./Button";

const LinkButton = ({ to, children, variant, type }) => {
	return (
		<Button variant={variant} type={type}>
			<Link href={to}>{children}</Link>
		</Button>
	);
};
export default LinkButton;
