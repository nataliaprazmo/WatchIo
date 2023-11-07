import React from "react";
import Link from "next/link";

const FooterGroup = ({ main_page, subpages }) => {
	return (
		<div>
			<Link
				href={main_page.href}
				className="font-bold text-base hover:text-primary-orange"
			>
				{main_page.name}
			</Link>
			<div className="flex flex-col">
				{subpages.map((subpage, id) => (
					<Link
						key={id}
						href={subpage.href}
						className="font-regular text-sm hover:text-primary-orange"
					>
						{subpage.name}
					</Link>
				))}
			</div>
		</div>
	);
};

export default FooterGroup;
