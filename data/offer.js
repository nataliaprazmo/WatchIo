const offer = [
	{
		title: "Wspólne oglądanie",
		description:
			"Oferujemy możliwość wspólnego oglądania za pomocą tworzenia udostępnianych pokoi. Dzięki temu użytkownicy mogą się cieszyć zsynchronizowanym obrazem z dowolnego miejsca.",
		id: "rooms",
		image: "/images/rooms.svg",
		tutorial: [
			{
				name: "Stwórz pokój",
				content: [
					"Kliknij znak '+' w swoim panelu, aby utworzyć pokój",
					"Wybierz film",
					"Skopiuj link udostępniania",
					"Udostępnij link i zaproś do pokoju!",
				],
			},
			{
				name: "Dołącz do pokoju",
				content: ["Skopiuj otrzymany link", "Wklej go w przeglądarkę"],
			},
		],
	},
	{
		title: "Dzielenie subskrypcją",
		description:
			"Oferujemy dzielenie subskrypcją - jako użytkownik naszej platformy możesz udostępnić ją swoim znajomym, którzy do niej dołączą.",
		id: "sharingSub",
		image: "/images/shareSub.svg",
		tutorial: [
			{
				name: "Udostępnianie subskrypcji",
				content: [
					"Wejdź w ustawienia",
					"Zarządzaj subskrypcją",
					"Skopiuj link udostępniania",
					"Podziel się z innymi!",
				],
			},
			{
				name: "Dołączanie do subskrypcji",
				content: [
					"Po rejestracji wybierz subskrypcję dzieloną",
					"Wklej link otrzymany od jednego z naszych subskrybentów",
					"Dołącz do subskrypcji!",
				],
			},
		],
	},
	{
		title: "Udostępnianie playlisty",
		description:
			"Możesz się dzielić także swoją playlistą! Udostępnij pozycje ze swojej 'Listy do obejrzenia' innym.",
		id: "sharingPlaylist",
		image: "/images/sharePlaylist.svg",
		tutorial: [
			{
				name: "Udostępnianie listy do obejrzenia",
				content: [
					"Wejdź w swoją 'Listę do oglądania'",
					"Skopiuj link w prawym, górnym rogu",
					"Podziel się z innymi!",
				],
			},
		],
	},
];

export default offer;
