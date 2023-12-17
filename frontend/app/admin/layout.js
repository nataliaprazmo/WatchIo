import React from "react";
import NavMenu from "@/components/NavMenu";
import FooterSection from "@/components/FooterSection";

export default function AdminLayout({ children }) {
	return (
		<>
			<NavMenu />
			{children}
			<FooterSection />
		</>
	);
}
