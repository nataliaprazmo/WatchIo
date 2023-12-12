import React from "react";
import LocalMoviesOutlinedIcon from "@mui/icons-material/LocalMoviesOutlined";
import MovieCreationOutlinedIcon from "@mui/icons-material/MovieCreationOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import FormatListBulletedRoundedIcon from "@mui/icons-material/FormatListBulletedRounded";

const Analytics = () => {
	const Column = ({ icon, number, name, addClass }) => {
		return (
			<div className={`flex flex-col items-center ${addClass}`}>
				{icon}
				<p className="font-semibold">{number}</p>
				<p className="text-neutral-400">{name}</p>
			</div>
		);
	};
	return (
		<div className="w-full flex justify-between items-center my-12 px-4">
			<Column
				icon={
					<LocalMoviesOutlinedIcon
						className="text-6xl"
						sx={{ path: { color: "#9126d9" } }}
					/>
				}
				number="5"
				name="filmów"
			/>
			<Column
				icon={
					<Person2OutlinedIcon
						className="text-7xl"
						sx={{ path: { color: "#9126d9" } }}
					/>
				}
				number="5"
				name="użytkowników"
			/>
			<Column
				icon={
					<AutoAwesomeOutlinedIcon
						className="text-6xl"
						sx={{ path: { color: "#9126d9" } }}
					/>
				}
				number="9"
				name="gatunków"
				addClass="md:flex hidden"
			/>
			<Column
				icon={
					<FormatListBulletedRoundedIcon
						className="text-6xl"
						sx={{ path: { color: "#9126d9" } }}
					/>
				}
				number="2"
				name="playlisty"
				addClass="lg:flex hidden"
			/>
			<Column
				icon={
					<MovieCreationOutlinedIcon
						className="text-6xl"
						sx={{ path: { color: "#9126d9" } }}
					/>
				}
				number="7"
				name="seriali"
			/>
		</div>
	);
};

export default Analytics;
