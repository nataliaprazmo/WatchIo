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
			fontSize: {
				32: "32px",
			},
			colors: {
				"primary-orange": "#FF9900",
				black: "#101010",
				white: "#FAFAF5",
				grey: {
					default: "#1a1a1a",
					100: "#707070",
					150: "#404040",
					200: "#333333",
					225: "#262626",
					250: "#1d1d1d",
					300: "#101010",
				},
			},
			spacing: {
				13: "50px",
				18: "72px",
			},
			boxShadow: {
				"3xl": "5px 5px 50px 0 #ff9900",
			},
		},
	},
	plugins: [],
};
