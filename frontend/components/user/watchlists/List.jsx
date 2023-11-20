import React from "react";
import Item from "./Item";

const series = [
	{
		title: "Tytuł serii",
		rating: "4.5",
		year: "2000",
		episodes: "4",
		pg: "PG-12",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque elit eget gravida cum sociis natoque penatibus. Orci eu lobortis elementum nibh. Vitae justo eget magna fermentum iaculis eu non diam phasellus. Dolor magna eget est lorem ipsum dolor sit. Odio ut sem nulla pharetra diam sit amet nisl.",
		genres: ["Przygodowy", "Animacja", "Akcja"],
	},
	{
		title: "Tytuł serii",
		rating: "4.5",
		year: "2000",
		episodes: "4",
		pg: "PG-12",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque elit eget gravida cum sociis natoque penatibus. Orci eu lobortis elementum nibh. Vitae justo eget magna fermentum iaculis eu non diam phasellus. Dolor magna eget est lorem ipsum dolor sit. Odio ut sem nulla pharetra diam sit amet nisl.",
		genres: ["Przygodowy", "Animacja", "Akcja"],
	},
	{
		title: "Tytuł serii",
		rating: "4.5",
		year: "2000",
		episodes: "4",
		pg: "PG-12",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque elit eget gravida cum sociis natoque penatibus. Orci eu lobortis elementum nibh. Vitae justo eget magna fermentum iaculis eu non diam phasellus. Dolor magna eget est lorem ipsum dolor sit. Odio ut sem nulla pharetra diam sit amet nisl.",
		genres: ["Przygodowy", "Animacja", "Akcja"],
	},
	{
		title: "Tytuł serii",
		rating: "4.5",
		year: "2000",
		episodes: "4",
		pg: "PG-12",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque elit eget gravida cum sociis natoque penatibus. Orci eu lobortis elementum nibh. Vitae justo eget magna fermentum iaculis eu non diam phasellus. Dolor magna eget est lorem ipsum dolor sit. Odio ut sem nulla pharetra diam sit amet nisl.",
		genres: ["Przygodowy", "Animacja", "Akcja"],
	},
];

const List = () => {
	return (
		<div className="bg-neutral-800 px-4 py-4 rounded-lg flex flex-col xl:px-24 lg:px-12 md:px-4">
			{series.map((serie, index) => (
				<Item index={index + 1} serie={serie} />
			))}
		</div>
	);
};

export default List;
