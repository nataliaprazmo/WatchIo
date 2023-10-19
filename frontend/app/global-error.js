"use client";

import { useEffect } from "react";
export default function GlobalError({ error, reset }) {
	useEffect(() => {
		console.error(error);
	}, [error]);
	return (
		<div>
			<h1>Coś poszło nie tak</h1>
			<button onClick={() => reset()}>Spróbuj ponownie</button>
		</div>
	);
}
