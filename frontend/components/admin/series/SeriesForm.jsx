import React from "react";
import Input from "./Input";
import MultilineInput from "./MultilineInput";
import CategoriesInput from "./CategoriesInput";
import FileInput from "./FileInput";

const SeriesForm = ({
	series,
	handleChange,
	genres,
	setGenres,
	handleGenresChange,
}) => {
	return (
		<div className="pt-2 pb-8 flex flex-wrap items-center gap-10">
			<Input
				id="series_title"
				name="series_title"
				label="Nazwa serii"
				type="text"
				value={series.series_title}
				handleChange={handleChange}
			/>
			<CategoriesInput
				value={genres}
				setValue={setGenres}
				handleChange={handleGenresChange}
			/>
			<MultilineInput
				id="description"
				name="description"
				label="Opis serii"
				type="text"
				value={series.description}
				handleChange={handleChange}
			/>
			<FileInput
				label="Plakat"
				id="series_picture"
				name="series_picture"
			/>
		</div>
	);
};

export default SeriesForm;
