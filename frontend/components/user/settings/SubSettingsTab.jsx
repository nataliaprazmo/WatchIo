import React from "react";
import Link from "next/link";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

const SubSettingsTab = () => {
	const Button = () => {
		return (
			<Link
				href="/user/subscriptionSettings"
				className="flex justify-center ml-4 lg:px-8 px-4 md:pb-2 pb-[6px] md:pt-[7px] pt-[5px] border-2 border-secondary-violet rounded-lg h-fit font-medium transition duration-300 2xl:text-base xl:text-sm text-xs hover:bg-secondary-violet"
			>
				<p className="mr-2 text-current">Ustawienia</p>
				<ArrowForwardIosRoundedIcon sx={{ fontSize: "16px" }} />
			</Link>
		);
	};
	return (
		<div className="flex flex-col gap-1">
			<h1 className="text-2xl font-semibold">Ustawienia subskrypcji</h1>
			<p className="text-neutral-500 font-semibold">Plan podstawowy</p>
			<div className="flex flex-row flex-wrap gap-8 mt-2 items-center">
				<div className="flex flex-col">
					<h3 className="text-neutral-400 font-medium">Właściciel</h3>
					<p className="font-medium">Kamil Nowak</p>
				</div>
				<div className="flex flex-col">
					<h3 className="text-neutral-400 font-medium">
						Podłączone konta
					</h3>
					<p className="font-medium">0</p>
				</div>
				<div className="flex flex-col">
					<h3 className="text-neutral-400 font-medium">Ważna do</h3>
					<p className="font-medium">16.12.2023</p>
				</div>
				<Button />
			</div>
		</div>
	);
};

export default SubSettingsTab;
