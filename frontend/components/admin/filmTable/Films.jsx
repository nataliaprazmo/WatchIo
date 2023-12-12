import React from "react";
import Image from "next/image";
import { TableBody, TableRow, TableCell, Checkbox } from "@mui/material";
import Actions from "./Actions";
import Chips from "../Chips";

const Films = ({
	visibleRows,
	emptyRows,
	handleClick,
	isSelected,
	setOpenSnackbar,
	getFilms,
}) => {
	return (
		<TableBody>
			{visibleRows.map((row, index) => {
				const isItemSelected = isSelected(row.id);
				const labelId = `enhanced-table-checkbox-${index}`;

				return (
					<TableRow
						key={row.id}
						onClick={(event) => handleClick(event, row.id)}
						role="checkbox"
						aria-checked={isItemSelected}
						tabIndex={-1}
						selected={isItemSelected}
					>
						<TableCell
							component="th"
							id={labelId}
							scope="row"
							padding="none"
							sx={{ color: "#fafaf5", fontFamily: "montserrat" }}
						>
							<Image
								src={`data:image/jpg;base64, ${row.poster}`}
								alt={row.name}
								width={100}
								height={200}
								style={{ objectFit: "cover" }}
								className="rounded-sm"
							/>
						</TableCell>
						<TableCell
							align="left"
							sx={{
								color: "#fafaf5",
								fontFamily: "montserrat",
								fontWeight: "600",
							}}
						>
							{row.name}
						</TableCell>
						<TableCell
							align="left"
							sx={{ color: "#fafaf5", width: "350px" }}
						>
							<p className="line-clamp-2">{row.description}</p>
						</TableCell>
						{/* <TableCell align="left" sx={{ color: "#fafaf5" }}>
							{row.actors}
						</TableCell> */}
						<TableCell
							align="left"
							sx={{
								color: "#fafaf5",
								width: "300px",
								fontFamily: "montserrat",
							}}
						>
							<Chips elements={row.categories} />
						</TableCell>
						<Actions
							seriesId={row.id}
							setOpenSnackbar={setOpenSnackbar}
							getFilms={getFilms}
						/>
					</TableRow>
				);
			})}
			{emptyRows > 0 && (
				<TableRow
					style={{
						height: 53 * emptyRows,
					}}
				>
					<TableCell colSpan={6} />
				</TableRow>
			)}
		</TableBody>
	);
};

export default Films;
