import Settings from "@/components/user/settings/Settings";
import { SubscriptionProvider } from "@/components/user/SubscriptionContext";
import React from "react";

export default function Page() {
	return (
		<SubscriptionProvider>
			<main className="overflow-hidden">
				<Settings />
			</main>
		</SubscriptionProvider>
	);
}
