import React from "react";
import { headCells } from "@/data";
import {
	Checkbox,
	TableCell,
	TableHead,
	TableRow,
	TableSortLabel,
} from "@mui/material";

const FilmTableHead = ({
	onSelectAllClick,
	order,
	orderBy,
	numSelected,
	rowCount,
	onRequestSort,
}) => {
	const createSortHandler = (property) => (event) => {
		onRequestSort(event, property);
	};
	return (
		<TableHead>
			<TableRow>
				{headCells.map((headCell) => (
					<TableCell
						key={headCell.id}
						align={headCell.id === "actions" ? "center" : "left"}
						padding="normal"
						sortDirection={orderBy === headCell.id ? order : false}
					>
						{headCell.id === "name" ? (
							<TableSortLabel
								active={orderBy === headCell.id}
								direction={
									orderBy === headCell.id ? order : "asc"
								}
								onClick={createSortHandler(headCell.id)}
								className="text-white hover:text-primary-orange"
							>
								{headCell.label}
							</TableSortLabel>
						) : (
							<p className="text-white">{headCell.label}</p>
						)}
					</TableCell>
				))}
			</TableRow>
		</TableHead>
	);
};

export default FilmTableHead;
