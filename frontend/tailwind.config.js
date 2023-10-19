/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			xs: "475px",
			xm: "800px",
			...defaultTheme.screens,
		},
		extend: {
			fontFamily: {
				montserrat: ["Montserrat", "sans"],
			},
			colors: {
				"primary-orange": "#FF9900",
				black: "#101010",
				white: "#FAFAF5",
				grey: {
					default: "#1a1a1a",
					100: "#707070",
					200: "#333333",
					300: "#101010",
				},
			},
			spacing: {
				18: "72px",
			},
			boxShadow: {
				"3xl": "5px 5px 50px 0 #ff9900",
			},
		},
	},
	plugins: [],
};
