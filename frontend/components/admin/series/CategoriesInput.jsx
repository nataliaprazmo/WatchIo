"use client";

import React, { useState, useRef, useEffect } from "react";
import {
	Chip,
	FormControl,
	InputLabel,
	MenuItem,
	Input,
	Select,
	TextField,
} from "@mui/material";
import { useSeries } from "./SeriesContext";

const CategoriesInput = () => {
	const [initialGenres, setInitialGenres] = useState([
		"Animacja",
		"Przygodowy",
	]);
	const [genres, setGenres] = useState(initialGenres);
	useEffect(() => {
		const getGenres = async () => {
			try {
				const response = await fetch(
					"http://localhost:5000/api/genres",
					{ method: "GET" }
				);
				if (response.status === 200) {
					const res = await response.json();
					setInitialGenres(res.data.genres);
					setGenres(res.data.genres);
				}
			} catch (error) {
				console.log(error);
			}
		};
		getGenres();
	}, []);
	const { bodyData, handleGenresChange, handleAddGenre } = useSeries();

	const [newGenre, setNewGenre] = useState("");
	const [showTextField, setShowTextField] = useState(false);
	const inputRef = useRef(null);
	const handleAddNewGenre = () => {
		if (newGenre.trim() !== "") {
			setGenres([...genres, newGenre]);
			handleAddGenre(newGenre);
			setNewGenre("");
			setShowTextField(false);
		}
	};
	const handleMenuClick = () => {
		setShowTextField(true);
		setTimeout(() => inputRef.current.focus(), 100);
	};
	const handleTextFieldKeyDown = (e) => {
		if (e.key === "Enter") {
			handleAddNewGenre();
		} else {
			e.stopPropagation();
		}
	};
	return (
		<FormControl sx={{ m: 1, width: 300 }} className="md:w-72 w-full">
			<InputLabel id="categories_label" className="text-white">
				Gatunki
			</InputLabel>
			<Select
				labelId="categories_label"
				id="categories"
				name="genre"
				multiple
				value={bodyData.series_genres}
				onChange={(e) => handleGenresChange(e)}
				input={<Input id="select_genres" label="Gatunek" />}
				renderValue={(selected) => (
					<div className="flex flex-wrap gap-1">
						{selected.map((value) => (
							<Chip
								key={value}
								label={value}
								variant="outlined"
								className="border-secondary-violet"
							/>
						))}
					</div>
				)}
				MenuProps={{
					PaperProps: { style: { maxHeight: 200 } },
					onClick: handleMenuClick,
				}}
				sx={{ fieldset: { borderColor: "#fafaf5" } }}
			>
				{genres.map((genre) => (
					<MenuItem key={genre} value={genre}>
						{genre}
					</MenuItem>
				))}
				{showTextField && (
					<MenuItem>
						<TextField
							variant="standard"
							placeholder="Dodaj nowy gatunek"
							className="w-full h-full "
							sx={{
								input: {
									textAlign: "center",
								},
							}}
							value={newGenre}
							onChange={(e) => setNewGenre(e.target.value)}
							onKeyDown={handleTextFieldKeyDown}
							inputRef={inputRef}
						/>
					</MenuItem>
				)}
			</Select>
		</FormControl>
	);
};

export default CategoriesInput;
