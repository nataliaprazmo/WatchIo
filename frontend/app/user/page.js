import Dashboard from "@/components/user/Dashboard";
import { SubscriptionProvider } from "@/components/user/SubscriptionContext";
import React from "react";

export default function Page() {
	return (
		<SubscriptionProvider>
			<main className="overflow-hidden">
				<Dashboard />
			</main>
		</SubscriptionProvider>
	);
}
