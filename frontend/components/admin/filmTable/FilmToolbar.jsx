import React from "react";
import { Toolbar, Tooltip, IconButton } from "@mui/material";
import Delete from "@mui/icons-material/Delete";
import FilterList from "@mui/icons-material/FilterList";

const FilmToolbar = ({ numSelected, search }) => {
	return (
		<Toolbar className="flex flex-row justify-between items-center px-4">
			<div className="flex items-center gap-[8px]">
				{numSelected > 0 ? (
					<div>Wybrano {numSelected}</div>
				) : (
					<div id="tableTitle">Serie</div>
				)}
				{numSelected > 0 ? (
					<Tooltip title="Delete">
						<IconButton>
							<Delete />
						</IconButton>
					</Tooltip>
				) : (
					<Tooltip title="Filter list">
						<IconButton>
							<FilterList />
						</IconButton>
					</Tooltip>
				)}
			</div>
			{search}
		</Toolbar>
	);
};

export default FilmToolbar;
