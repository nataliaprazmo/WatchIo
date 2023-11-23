import React from "react";
import Input from "./Input";
import MultilineInput from "./MultilineInput";
import CategoriesInput from "./CategoriesInput";
import { useSeries } from "./SeriesContext";
import FileUploader from "./FileUploader";

const SeriesForm = () => {
	const {
		bodyData,
		setBodyData,
		series_thumbnail,
		setSeries_thumbnail,
		errors,
		setErrors,
	} = useSeries();
	const handleChange = ({ currentTarget: input }) => {
		const { name, value } = input;
		if (!value || value === "") {
			setErrors((prev) => ({
				...prev,
				[name]: "Uzupełnij pole",
			}));
		} else if (Array.isArray(value) && value.length === 0) {
			setErrors((prev) => ({
				...prev,
				[name]: "Dodaj element",
			}));
		} else if (
			name === "series_year_of_production" &&
			(value < 1980 || value > new Date().getFullYear())
		) {
			setErrors((prev) => ({
				...prev,
				[name]:
					"Ustaw rok pomiędzy latami 1980 a " +
					new Date().getFullYear(),
			}));
		}
		setErrors((prev) => ({
			...prev,
			[name]: null,
		}));
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
				error={errors.series_title}
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
				error={errors.series_year_of_production}
			/>
			<CategoriesInput />
			<MultilineInput
				id="series_desc"
				name="series_desc"
				label="Opis serii"
				type="text"
				value={bodyData.series_desc}
				handleChange={handleChange}
				error={errors.series_desc}
			/>
			<FileUploader
				name="series_thumbnail"
				fileType="img"
				file={series_thumbnail}
				setFile={setSeries_thumbnail}
				label="Plakat serii"
				errorName="series_thumbnail"
				error={errors.series_thumbnail}
			/>
		</div>
	);
};

export default SeriesForm;
