"use client";

import React, { useState, useEffect } from "react";
import { useSubscription } from "./SubscriptionContext";
import PurchaseDialog from "./subscriptionPurchase/PurchaseDialog";
import SuccessMessage from "./SuccessMessage";
import { usePathname } from "next/navigation";

const SubscriptionCheck = () => {
	const pathname = usePathname();
	const [open, setOpen] = useState(false);
	const {
		price,
		hasSubscription,
		checkSubscription,
		getPrices,
		setHasSubscription,
	} = useSubscription();
	useEffect(() => {
		checkSubscription();
	}, []);
	useEffect(() => {
		if (!hasSubscription) getPrices();
	}, [hasSubscription, setHasSubscription]);
	return (
		<>
			{pathname.startsWith("/user/profile") ? null : (
				<>
					{!hasSubscription ? (
						<div className="z-50 fixed top-0 left-0 w-full h-full backdrop-blur-md flex flex-row justify-center items-center pl-14">
							<PurchaseDialog
								price={price}
								setHasSubscription={setHasSubscription}
								setOpen={setOpen}
							/>
							<SuccessMessage
								open={open}
								setOpen={setOpen}
								message="Miłego korzystania z platformy!"
							/>
						</div>
					) : null}
				</>
			)}
		</>
	);
};

export default SubscriptionCheck;
