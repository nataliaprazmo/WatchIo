export const getByQuery = async (howMany, query) => {
	console.log(
		"http://localhost:5000/api/series?" + query + "&howMany=" + howMany
	);
	return [];
	const response = await fetch(
		"http://localhost:5000/api/series?" + query + "&howMany=" + howMany,
		{
			method: "GET",
		}
	);
	if (response.status === 200) {
		const res = await response.json();
		return res.data.series;
	} else return [];
};

export const getByGenre = async (genre) => {
	try {
		const response = await fetch(
			"http://localhost:5000/api/series?genres=" + genre,
			{
				method: "GET",
			}
		);
		if (response.status === 200) {
			const res = await response.json();
			return res.data.series;
		} else return [];
	} catch (error) {
		console.log(error);
		return [];
	}
};

export const getByOneEpisode = async () => {
	try {
		const response = await fetch("http://localhost:5000/api/series", {
			method: "GET",
		});
		if (response.status === 200) {
			const res = await response.json();
			let all = res.data.series;
			return all
				.filter((serie) => serie.episodes.length === 1)
				.slice(0, 6);
		} else return [];
	} catch (error) {
		console.log(error);
		return [];
	}
};

export const getByEpisodeCount = async (count) => {
	try {
		const response = await fetch("http://localhost:5000/api/series", {
			method: "GET",
		});
		if (response.status === 200) {
			const res = await response.json();
			let all = res.data.series;
			return all
				.filter((serie) => serie.episodes.length > count)
				.slice(0, 6);
		} else return [];
	} catch (error) {
		console.log(error);
		return [];
	}
};
