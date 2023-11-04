import React from "react";
import Input from "./Input";

const FileInput = ({ label, id, name }) => {
	return (
		<div className="flex gap-4 items-end">
			<p>{label}</p>
			<Input id={id} name={name} type="file" />
		</div>
	);
};

export default FileInput;
