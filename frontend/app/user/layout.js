import React from "react";
import NavMenu from "@/components/NavMenu";
import FooterSection from "@/components/FooterSection";
import SubscriptionCheck from "@/components/user/SubscriptionCheck";
import { SubscriptionProvider } from "@/components/user/SubscriptionContext";

export default function UserLayout({ children }) {
	return (
		<SubscriptionProvider>
			<NavMenu />
			<SubscriptionCheck />
			{children}
			<FooterSection />
		</SubscriptionProvider>
	);
}
