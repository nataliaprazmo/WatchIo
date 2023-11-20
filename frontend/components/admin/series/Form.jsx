import React from "react";
import VideoForm from "./VideoForm";
import StaffForm from "./StaffForm";
import SeriesForm from "./SeriesForm";

const Form = ({ part }) => {
	return (
		<div className="flex flex-col justify-between items-start w-full">
			{part === 0 ? (
				<SeriesForm />
			) : part === 1 ? (
				<StaffForm />
			) : (
				<VideoForm />
			)}
		</div>
	);
};

export default Form;
