import React from "react";
import { TablePagination } from "@mui/material";

const FilmPagination = ({
	count,
	rowsPerPage,
	setRowsPerPage,
	page,
	setPage,
}) => {
	const handleRowsPerPageChange = (event) => {
		const rows = parseInt(event.target.value, 10);
		if (!isNaN(rows) && rows > 0) {
			const newPage = Math.floor((page * rowsPerPage) / rows);
			setRowsPerPage(rows);
			setPage(newPage);
		}
	};
	return (
		<TablePagination
			labelRowsPerPage="Wierszy na stronę:"
			rowsPerPageOptions={[5, 10, 15]}
			component="div"
			count={count}
			rowsPerPage={rowsPerPage}
			page={page}
			onPageChange={(event, newPage) => setPage(newPage)}
			onRowsPerPageChange={handleRowsPerPageChange}
		/>
	);
};

export default FilmPagination;
