import SubscriptionSettings from "@/components/user/settings/SubscriptionSettings";
import { SubscriptionProvider } from "@/components/user/SubscriptionContext";
import React from "react";

export default function Page() {
	return (
		<SubscriptionProvider>
			<main className="overflow-hidden">
				<SubscriptionSettings />
			</main>
		</SubscriptionProvider>
	);
}
