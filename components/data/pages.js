const pages = [
	{
		main_page: {
			href: "/",
			name: "Strona główna",
		},
		subpages: [
			{
				href: "/signup",
				name: "Rejestracja",
			},
			{
				href: "/login",
				name: "Logowanie",
			},
			{
				href: "/#faq",
				name: "FAQ",
			},
		],
	},
	{
		main_page: {
			href: "/offer",
			name: "Oferta",
		},
		subpages: [
			{
				href: "/offer#rooms",
				name: "Wspólne pokoje",
			},
			{
				href: "/offer#sharingSub",
				name: "Dzielenie subskrypcją",
			},
			{
				href: "/offer#sharingPlaylist",
				name: "Udostępnianie playlist",
			},
			{
				href: "/offer#films",
				name: "Filmy i seriale",
			},
		],
	},
	{
		main_page: {
			href: "/subscriptions",
			name: "Subskrypcje",
		},
		subpages: [
			{
				href: "/subscriptions#basic",
				name: "Plan podstawowy",
			},
			{
				href: "/subscriptions#sharing",
				name: "Subskrypcja dzielona",
			},
		],
	},
	{
		main_page: {
			href: "/contact",
			name: "Kontakt",
		},
		subpages: [
			{
				href: "/contact",
				name: "contact@watchio.com.pl",
			},
		],
	},
];

export default pages;
