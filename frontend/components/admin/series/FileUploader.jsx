"use client";

import React, { useState } from "react";
import Image from "next/image";
import WallpaperRoundedIcon from "@mui/icons-material/WallpaperRounded";
import PostAddRoundedIcon from "@mui/icons-material/PostAddRounded";
import ErrorDesc from "./ErrorDesc";
import { useSeries } from "./SeriesContext";

const FileUploader = ({ fileType, file, setFile, label, errorName, error }) => {
	const { setErrors } = useSeries();
	const title = `${
		fileType === "img" ? "Wybierz obraz" : "Wybierz plik"
	} lub upuść`;
	const [previewUrl, setPreviewUrl] = useState(
		file !== null ? URL.createObjectURL(file) : null
	);

	const onFileUploadChange = (e) => {
		const fileInput = e.target;
		if (!fileInput.files) {
			setErrors((prev) => ({
				...prev,
				[errorName]: "Nie wybrano żadnego pliku",
			}));
			return;
		}
		if (!fileInput.files || fileInput.files.length === 0) {
			setErrors((prev) => ({
				...prev,
				[errorName]: "Lista obrazów jest pusta",
			}));
			return;
		}
		const file = fileInput.files[0];
		if (fileType === "img" && !file.type.startsWith("image")) {
			setErrors((prev) => ({
				...prev,
				[errorName]: "Wybierz plik z formatem obrazu",
			}));
			return;
		} else if (fileType === "video" && !file.type.startsWith("video")) {
			setErrors((prev) => ({
				...prev,
				[errorName]: "Wybierz plik z formatem wideo",
			}));
			return;
		}
		setErrors((prev) => ({
			...prev,
			[errorName]: null,
		}));
		setFile(file);
		setPreviewUrl(URL.createObjectURL(file));
		e.currentTarget.type = "text";
		e.currentTarget.type = "file";
	};
	const onCancelFile = (e) => {
		e.preventDefault();
		if (!previewUrl && !file) {
			return;
		}
		setFile(null);
		setErrors((prev) => ({
			...prev,
			[errorName]: "Uzupełnij pole",
		}));
		setPreviewUrl(null);
	};
	const [isDragOver, setIsDragOver] = useState(false);
	const handleFileDrop = (e) => {
		e.preventDefault();
		setIsDragOver(false);
		const droppedFiles = e.dataTransfer.files;
		if (droppedFiles.length === 0) {
			return;
		}
		const droppedFile = droppedFiles[0];
		if (fileType === "img" && !droppedFile.type.startsWith("image")) {
			alert("Wybierz plik z formatem obrazu");
			return;
		} else if (
			fileType === "video" &&
			!droppedFile.type.startsWith("video")
		) {
			alert("Wybierz plik z formatem wideo");
			return;
		}
		setFile(droppedFile);

		setPreviewUrl(URL.createObjectURL(droppedFile));
		setErrors((prev) => ({
			...prev,
			[errorName]: null,
		}));
		e.currentTarget.type = "text";
		e.currentTarget.type = "file";
	};
	return (
		<div className="flex flex-col">
			<label htmlFor="file">{label}</label>
			<div
				onDrop={handleFileDrop}
				onDragOver={(e) => {
					e.preventDefault();
					setIsDragOver(true);
				}}
				onDragLeave={() => setIsDragOver(false)}
				className={`w-80 h-fit p-2 border rounded-2xl ${
					isDragOver
						? "border-secondary-violet shadow-secondary-violet shadow-inner border-solid"
						: `${
								error ? "border-red-600" : "border-gray-500"
						  } border-dashed`
				}`}
			>
				<div className="flex flex-col md:flex-row gap-2 md:py-4 items-center justify-center">
					{previewUrl && file !== null ? (
						fileType === "img" ? (
							<Image
								alt="file uploader preview"
								src={previewUrl}
								width={256}
								height={200}
								style={{
									objectFit: "cover",
									width: "auto",
									height: "auto",
								}}
								className="bg-cover rounded-lg bg-fixed"
							/>
						) : (
							<video width={256} height={200} controls>
								<source src={previewUrl} type={file.type} />
								Twoja wyszukiwarka nie wspiera podglądu wideo.
							</video>
						)
					) : (
						<label className="flex flex-col items-center justify-center flex-grow h-full py-3 transition-colors duration-150 cursor-pointer hover:text-gray-400">
							{fileType === "img" ? (
								<WallpaperRoundedIcon
									sx={{ fontSize: "56px" }}
									className="mb-2"
								/>
							) : (
								<PostAddRoundedIcon
									sx={{ fontSize: "56px" }}
									className="mb-2"
								/>
							)}
							<strong className="text-sm font-medium">
								{title}
							</strong>
							<input
								className="block w-0 h-0"
								name="file"
								type="file"
								id="file"
								onChange={onFileUploadChange}
							/>
						</label>
					)}
				</div>
				{previewUrl ? (
					<div className="px-4 pt-1 pb-4 flex w-full justify-center">
						<button
							disabled={!previewUrl}
							onClick={onCancelFile}
							className="flex justify-center w-full md:pb-2 pb-[6px] md:pt-[7px] pt-[5px] border-2 border-secondary-violet rounded-lg h-fit font-medium transition duration-300 2xl:text-base xl:text-sm text-xs hover:bg-secondary-violet hover:text-black"
						>
							Wybierz inny
						</button>
					</div>
				) : null}
			</div>
			<ErrorDesc error={error} />
		</div>
	);
};

export default FileUploader;
