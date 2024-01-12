"use client";
import React, { useState, useEffect } from "react";
import Plan from "./Plan";

const Plans = () => {
	const [price, setPrice] = useState({ id: 0 });
	useEffect(() => {
		const getPrices = async () => {
			const token = localStorage.getItem("token");
			if (token) {
				try {
					const response = await fetch(
						"http://localhost:5000/api/subscriptions/prices?currency=pln",
						{
							method: "GET",
							headers: {
								"Content-Type": "application/json",
								"x-access-token": token,
							},
						}
					);
					if (response.status == 200) {
						const res = await response.json();
						setPrice(res.data.prices[0]);
					}
				} catch (error) {
					if (
						error.response &&
						error.response.status >= 400 &&
						error.response.status <= 500
					) {
						setError("Błąd serwera");
						console.error(error);
					}
				}
			}
		};
		getPrices();
	}, []);
	return (
		<div className="flex sm:flex-row flex-col gap-8 items-center justify-center mt-8">
			<Plan
				type="Plan podstawowy"
				price={
					price.amount_decimal
						? price.amount_decimal / 100 + "/mies."
						: "12.99/mies."
				}
				description={[
					"Wspólne oglądanie",
					"Subskrybcja 5 osobowa",
					"Udostępnianie playlist",
					"Oglądaj bez ograniczeń",
				]}
			/>
			<Plan
				type="Subskrypcja dzielona"
				price="darmowy"
				description={[
					"Uzyskaj kod od jednego z naszych subskrybentów i wpisz przy zakupie",
					"Dołącz już dziś!",
				]}
			/>
		</div>
	);
};

export default Plans;
