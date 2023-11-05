"use client";

import React, { useEffect } from "react";

export default function Page() {
	useEffect(() => {
		console.log(localStorage.getItem("token"));
		console.log(localStorage.getItem("role"));
	});
	return <main className="overflow-hidden">User page</main>;
}
