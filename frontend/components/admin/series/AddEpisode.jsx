import { OutlinedInput } from "@mui/material";
import React from "react";

const AddEpisode = () => {
	return (
		<div className="flex flex-col gap-[16px]">
			<div className="flex flex-col gap-[8px]">
				<label htmlFor="title">Tytuł</label>
				<OutlinedInput
					className="w-[400px] bg-[#404040] rounded-[8px]"
					sx={{
						input: {
							paddingLeft: "10px",
							color: "#fafaf5",
						},
					}}
					color="primary"
					name="title"
					id="title"
					placeholder="The best film"
					required
				/>
			</div>
			<div className="flex flex-col gap-[8px]">
				<label htmlFor="description">Opis</label>
				<OutlinedInput
					className="w-[400px] bg-[#404040] rounded-[8px]"
					sx={{
						input: {
							paddingLeft: "10px",
							color: "#fafaf5",
						},
					}}
					color="primary"
					name="description"
					id="description"
					placeholder="The best film is all about the best films"
					multiline={true}
					rows="5"
					required
				/>
			</div>
		</div>
	);
};

export default AddEpisode;
