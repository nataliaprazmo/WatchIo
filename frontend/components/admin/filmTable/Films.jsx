import React from "react";
import Image from "next/image";
import { TableBody, TableRow, TableCell, Checkbox } from "@mui/material";
import Actions from "./Actions";
import Chips from "../Chips";

const Films = ({ visibleRows, emptyRows, handleClick, isSelected }) => {
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
						{/* <TableCell padding="checkbox">
							<Checkbox
								color="primary"
								checked={isItemSelected}
								inputProps={{
									"aria-labelledby": labelId,
								}}
							/>
						</TableCell> */}
						<TableCell
							component="th"
							id={labelId}
							scope="row"
							padding="none"
							className="text-white"
						>
							{/* {row.poster} */}
							<Image
								src="/images/poster.webp"
								width={100}
								height={200}
							/>
						</TableCell>
						<TableCell align="left" className="text-white">
							{row.name}
						</TableCell>
						{/* <TableCell align="left" className="text-white">
							{row.description}
						</TableCell>
						<TableCell align="left" className="text-white">
							{row.actors}
						</TableCell> */}
						<TableCell
							align="left"
							className="text-white w-[300px]"
						>
							<Chips elements={row.categories} />
						</TableCell>
						<Actions seriesId={row.id} />
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
