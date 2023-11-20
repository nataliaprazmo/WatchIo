import React from "react";
import Input from "./Input";
import MultilineInput from "./MultilineInput";
import CategoriesInput from "./CategoriesInput";
import { useSeries } from "./SeriesContext";
import FileUploader from "./FileUploader";

const SeriesForm = () => {
	const { bodyData, setBodyData, series_thumbnail, setSeries_thumbnail } =
		useSeries();
	const handleChange = ({ currentTarget: input }) => {
		const { name, value } = input;
		setBodyData((prev) => ({
			...prev,
			[name]: value,
		}));
	};
	return (
		<div className="pt-2 pb-8 flex flex-wrap items-center gap-10">
			<Input
				id="series_title"
				name="series_title"
				label="Nazwa serii"
				type="text"
				value={bodyData.series_title}
				handleChange={handleChange}
			/>
			<Input
				id="series_year_of_production"
				name="series_year_of_production"
				label="Rok produkcji"
				type="number"
				min="1830"
				max="2025"
				step="1"
				value={bodyData.series_year_of_production}
				handleChange={handleChange}
			/>
			<CategoriesInput />
			<MultilineInput
				id="series_desc"
				name="series_desc"
				label="Opis serii"
				type="text"
				value={bodyData.series_desc}
				handleChange={handleChange}
			/>
			<FileUploader
				fileType="img"
				file={series_thumbnail}
				setFile={setSeries_thumbnail}
				label="Plakat serii"
			/>
		</div>
	);
};

export default SeriesForm;
