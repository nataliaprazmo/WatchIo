export const getBestRated = async () => {
	try {
		const response = await fetch("http://localhost:5000/api/series", {
			method: "GET",
		});
		if (response.status === 200) {
			const res = await response.json();
			let sorted = [...res.data.series].sort(
				(a, b) => b.imdb_score - a.imdb_score
			);
			return sorted.slice(0, 4);
		} else return [];
	} catch (error) {
		console.log(error);
		return [];
	}
};

export const getNewest = async () => {
	try {
		const response = await fetch("http://localhost:5000/api/series", {
			method: "GET",
		});
		if (response.status === 200) {
			const res = await response.json();
			let sorted = [...res.data.series].sort(
				(a, b) => b.year_of_production - a.year_of_production
			);
			return sorted.slice(0, 6);
		} else return [];
	} catch (error) {
		console.log(error);
		return [];
	}
};

export const getByGenre = async (genre) => {
	try {
		const response = await fetch("http://localhost:5000/api/series", {
			method: "GET",
		});
		if (response.status === 200) {
			const res = await response.json();
			let all = res.data.series;
			return all.filter((serie) => serie.genres.includes(genre));
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
			return all.filter((serie) => serie.episodes.length === 1);
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
			return all.filter((serie) => serie.episodes.length > count);
		} else return [];
	} catch (error) {
		console.log(error);
		return [];
	}
};
