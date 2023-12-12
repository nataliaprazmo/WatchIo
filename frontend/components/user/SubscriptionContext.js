"use client";

import { createContext, useState, useContext } from "react";

const SubscriptionContext = createContext();

export function useSubscription() {
	return useContext(SubscriptionContext);
}

export function SubscriptionProvider({ children }) {
	const [price, setPrice] = useState({ id: 0 });
	const [hasSubscription, setHasSubscription] = useState(true);
	const [subscriptionUserType, setSubscriptionUserType] = useState("");
	const [loading, setLoading] = useState(false);

	const checkSubscription = async () => {
		const token = localStorage.getItem("token");
		if (token) {
			setLoading(true);
			try {
				const response = await fetch(
					"http://localhost:5000/api/subscriptions/subscriptionCheck",
					{
						method: "GET",
						headers: {
							"Content-Type": "application/json",
							"x-access-token": token,
						},
					}
				);
				if (response.status === 200) {
					const res = await response.json();
					setHasSubscription(true);
					setSubscriptionUserType(res.data.subscription_user_type);
					console.log(res.data.subscription_user_type);
				}
				if (response.status === 403) {
					const res = await response.json();
					setHasSubscription(false);
					console.log(res.message);
				}
				setLoading(false);
			} catch (error) {
				console.log(error);
			}
		}
	};
	const getPrices = async () => {
		const token = localStorage.getItem("token");
		if (token) {
			setLoading(true);
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
				setLoading(false);
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
	return (
		<SubscriptionContext.Provider
			value={{
				price,
				hasSubscription,
				setHasSubscription,
				getPrices,
				checkSubscription,
				subscriptionUserType,
				loading,
			}}
		>
			{children}
		</SubscriptionContext.Provider>
	);
}
