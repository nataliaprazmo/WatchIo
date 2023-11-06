"use client";

import React, { useState, useMemo, useCallback } from "react";
import FilmToolbar from "./FilmToolbar";
import { TableContainer, Table, TableRow, TableCell } from "@mui/material";
import FilmPagination from "./FilmPagination";
import Films from "./Films";
import FilmTableHead from "./FilmTableHead";
import Link from "next/link";
import AddIcon from "@mui/icons-material/PlaylistAddRounded";
import { InputAdornment, OutlinedInput } from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

function createData(id, poster, name, description, actors, categories) {
	return {
		id,
		poster,
		name,
		description,
		actors,
		categories,
	};
}

const rows = [
	createData(1, "plakat", "anazwa", "copis", "aktorzy", [
		"kategorie",
		"akategorie",
	]),
	createData(2, "plakat", "nazwa", "opis", "waktorzy", ["kategorie"]),
	createData(3, "aplakat", "nazwa", "zopis", "baktorzy", ["bkategorie"]),
	createData(4, "plakat", "bnazwa", "aopis", "caktorzy", ["kategorie"]),
	createData(5, "plakat", "nazwa", "opis", "aktorzy", ["akategorie"]),
	createData(6, "eplakat", "xnazwa", "eopis", "aktorzy", ["dkategorie"]),
	createData(7, "plakat", "cnazwa", "opis", "kaktorzy", ["ckategorie"]),
	createData(8, "zplakat", "nazwa", "ztopis", "daktorzy", [
		"ekategorie",
		"akategorie",
	]),
	createData(9, "qplakat", "nazwa", "ropis", "aktorzy", ["kategorie"]),
	createData(10, "bplakat", "dnazwa", "topis", "saktorzy", ["xkategorie"]),
	createData(11, "cplakat", "wnazwa", "bopis", "aktorzy", ["kategorie"]),
	createData(12, "dplakat", "nazwa", "fopis", "zaktorzy", ["wkategorie"]),
	createData(13, "plakat", "enazwa", "opis", "aktorzy", ["qkategorie"]),
	createData(14, "tplakat", "nazwa", "opis", "raktorzy", ["tkategorie"]),
	createData(15, "splakat", "znazwa", "opis", "aktorzy", ["zkategorie"]),
];

function descendingComparator(a, b, orderBy) {
	if (b[orderBy] < a[orderBy]) {
		return -1;
	}
	if (b[orderBy] > a[orderBy]) {
		return 1;
	}
	return 0;
}

function getComparator(order, orderBy) {
	return order === "desc"
		? (a, b) => descendingComparator(a, b, orderBy)
		: (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
	const stabilizedThis = array.map((el, index) => [el, index]);
	stabilizedThis.sort((a, b) => {
		const order = comparator(a[0], b[0]);
		if (order !== 0) {
			return order;
		}
		return a[1] - b[1];
	});
	return stabilizedThis.map((el) => el[0]);
}

const FilmTable = () => {
	const [selected, setSelected] = useState([]);
	const isSelected = (id) => selected.indexOf(id) !== -1;
	const [order, setOrder] = useState("asc");
	const [orderBy, setOrderBy] = useState("name");
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(5);
	const [filterValue, setFilterValue] = useState("");
	const hasSearchFilter = Boolean(filterValue);

	const filteredRows = useMemo(() => {
		let filteredFilms = [...rows];
		if (hasSearchFilter) {
			filteredFilms = filteredFilms.filter((film) =>
				film.name.toLowerCase().includes(filterValue.toLowerCase())
			);
		}
		return filteredFilms;
	}, [rows, filterValue]);

	const onSearchChange = useCallback((event) => {
		const value = event.target.value;
		if (value) {
			setFilterValue(value);
			setPage(0);
		} else {
			setFilterValue("");
		}
	}, []);

	const searchBar = useMemo(() => {
		return (
			<div className="flex items-center gap-6">
				<OutlinedInput
					className="w-fit bg-grey-250 rounded-lg"
					sx={{
						input: {
							paddingLeft: "4px",
							color: "#fafaf5",
						},
					}}
					placeholder="Szukaj po nazwie..."
					startAdornment={
						<InputAdornment position="start">
							<SearchRoundedIcon />
						</InputAdornment>
					}
					value={filterValue}
					onChange={onSearchChange}
				/>
				<Link href="/admin/series/add">
					<AddIcon
						className="text-32"
						sx={{ "&:hover": { path: { color: "#ff9900" } } }}
					/>
				</Link>
			</div>
		);
	}, [filterValue, onSearchChange, hasSearchFilter]);

	const handleRequestSort = (event, property) => {
		const isAsc = orderBy === property && order === "asc";
		setOrder(isAsc ? "desc" : "asc");
		setOrderBy(property);
	};

	const handleSelectAllClick = (event) => {
		if (event.target.checked) {
			const newSelected = rows.map((n) => n.id);
			setSelected(newSelected);
			return;
		}
		setSelected([]);
	};

	const emptyRows =
		page > 0
			? Math.max(0, (1 + page) * rowsPerPage - filteredRows.length)
			: 0;

	const visibleRows = useMemo(
		() =>
			stableSort(filteredRows, getComparator(order, orderBy)).slice(
				page * rowsPerPage,
				page * rowsPerPage + rowsPerPage
			),
		[filteredRows, order, orderBy, page, rowsPerPage]
	);

	const handleClick = (event, id) => {
		const selectedIndex = selected.indexOf(id);
		let newSelected = [];

		if (selectedIndex === -1) {
			newSelected = newSelected.concat(selected, id);
		} else if (selectedIndex === 0) {
			newSelected = newSelected.concat(selected.slice(1));
		} else if (selectedIndex === selected.length - 1) {
			newSelected = newSelected.concat(selected.slice(0, -1));
		} else if (selectedIndex > 0) {
			newSelected = newSelected.concat(
				selected.slice(0, selectedIndex),
				selected.slice(selectedIndex + 1)
			);
		}
		setSelected(newSelected);
	};
	return (
		<div className="bg-grey-225 mb-8 rounded-2xl p-4 font-medium">
			<FilmToolbar numSelected={selected.length} search={searchBar} />
			<TableContainer>
				<Table
					sx={{ minWidth: 750 }}
					aria-labelledby="tableTitle"
					size="medium"
				>
					<FilmTableHead
						numSelected={selected.length}
						order={order}
						orderBy={orderBy}
						onSelectAllClick={handleSelectAllClick}
						onRequestSort={handleRequestSort}
						rowCount={rows.length}
					/>
					{visibleRows.length > 0 ? (
						<Films
							visibleRows={visibleRows}
							emptyRows={emptyRows}
							handleClick={handleClick}
							isSelected={isSelected}
						/>
					) : (
						<TableRow>
							<TableCell colSpan={6} className="text-center">
								Brak wyników
							</TableCell>
						</TableRow>
					)}
				</Table>
			</TableContainer>
			<FilmPagination
				count={rows.length}
				rowsPerPage={rowsPerPage}
				setRowsPerPage={setRowsPerPage}
				page={page}
				setPage={setPage}
			/>
		</div>
	);
};

export default FilmTable;
