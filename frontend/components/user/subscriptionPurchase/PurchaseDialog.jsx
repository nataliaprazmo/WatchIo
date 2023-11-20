"use client";

import React, { useState } from "react";
import Plan from "./Plan";
import JoinSubForm from "./JoinSubForm";

const PurchaseDialog = ({ price, setHasSubscription, setOpen }) => {
	const [choice, setChoice] = useState("");
	const [step, setStep] = useState(1);
	const Column = ({ title, children }) => {
		return (
			<div className="flex flex-col gap-6">
				<p className="font-semibold lg:text-2xl text-xl">{title}</p>
				{children}
			</div>
		);
	};
	const goToPurchase = async () => {
		setChoice("purchase");
		const token = localStorage.getItem("token");
		if (token) {
			try {
				const response = await fetch(
					"http://localhost:5000/api/subscriptions/session",
					{
						method: "POST",
						headers: {
							"Content-Type": "application/json",
							"x-access-token": token,
						},
						body: JSON.stringify({ priceId: price.id }),
					}
				);
				if (response.status == 200) {
					const res = await response.json();
					const url = res.data.url;
					console.log(url);
					window.location.href = url;
				}
			} catch (error) {
				if (
					error.response &&
					error.response.status >= 400 &&
					error.response.status <= 500
				) {
					console.error(error);
				}
			}
		}
	};
	const goToJoin = (e) => {
		e.preventDefault();
		setChoice("join");
		setStep(2);
	};
	const returnClick = () => {
		setStep(1);
	};
	return (
		<div className="flex flex-col justify-center items-center p-16 bg-grey-200 rounded-lg w-fit h-fit border-neutral-900 border-[1px]">
			<h1 className="font-bold lg:text-5xl md:text-32 text-2xl mb-4">
				Zakup subskrypcji
			</h1>
			<p className="font-medium font-montserrat lg:text-xl text-base text-neutral-400">
				Aby w pełni korzystać z platformy, kup subskrypcję
			</p>
			<div className="mt-6 mb-8 w-full h-px bg-neutral-500" />
			<div className="flex md:flex-row flex-col w-full gap-16">
				{step == 1 ? (
					<Column title="Wybierz plan">
						<Plan
							title="Plan subskrypcyjny"
							description="Miesięczny plan subskrypcyjny"
							price={
								price && price.amount_decimal / 100 + "zł/mies."
							}
							click={goToPurchase}
						/>
						<Plan
							title="Subskrypcja dzielona"
							description="Dołącz do subskrypcji"
							price="darmowa"
							click={goToJoin}
						/>
					</Column>
				) : step == 2 && choice === "join" ? (
					<Column>
						<JoinSubForm
							setHasSubscription={setHasSubscription}
							setOpen={setOpen}
						/>
						<button
							onClick={returnClick}
							className="hover:text-primary-orange font-medium self-start mt-8"
						>
							Powrót
						</button>
					</Column>
				) : null}
			</div>
		</div>
	);
};

export default PurchaseDialog;
