"use client";

import { Dashboard } from "@/components/admin";
import React, { useEffect } from "react";

export default function Page() {
	useEffect(() => {
		console.log(localStorage.getItem("token"));
		console.log(localStorage.getItem("role"));
	});
	return (
		<main className="overflow-hidden">
			<Dashboard />
		</main>
	);
}
