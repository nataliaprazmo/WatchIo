import React from "react";
import SiteBreadcrumbs from "@/components/SiteBreadcrumbs";
import StepForm from "./StepForm";
import { SeriesProvider } from "./SeriesContext";

const AddSeries = () => {
	return (
		<div className="py-24 pl-24 pr-10">
			<SiteBreadcrumbs
				links={[
					{ label: "Panel", to: "/admin" },
					{ label: "Dodaj serię", to: "/admin/series/add" },
				]}
			/>
			<h1 className="pt-8 pb-4 text-2xl font-semibold">
				Dodaj nową serię
			</h1>
			<SeriesProvider>
				<StepForm />
			</SeriesProvider>
		</div>
	);
};

export default AddSeries;
