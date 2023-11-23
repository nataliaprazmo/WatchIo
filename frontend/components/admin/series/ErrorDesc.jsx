import React from "react";

const ErrorDesc = ({ error }) => {
	return (
		<>
			{error && (
				<span className="text-xs italic text-red-700 mt-2">
					{error}
				</span>
			)}
		</>
	);
};

export default ErrorDesc;
