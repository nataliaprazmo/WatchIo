import React from "react";
import { Toolbar, Tooltip, IconButton } from "@mui/material";
import FilterList from "@mui/icons-material/FilterListRounded";

const FilmToolbar = ({ numSelected, search }) => {
	return (
		<Toolbar className="flex flex-row justify-between items-center px-4">
			<div className="flex items-center gap-2">
				<div id="tableTitle">Serie</div>
				<Tooltip title="Tryb sortowania">
					<IconButton>
						<FilterList />
					</IconButton>
				</Tooltip>
			</div>
			{search}
		</Toolbar>
	);
};

export default FilmToolbar;
