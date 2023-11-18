import { createTheme } from "@mui/material/styles";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
	weight: ["300", "400", "500", "600", "700"],
	subsets: ["latin"],
	display: "swap",
});

const theme = createTheme({
	palette: {
		mode: "dark",
	},
	typography: {
		fontFamily: montserrat.style.fontFamily,
	},
	components: {
		MuiAlert: {
			styleOverrides: {},
		},
	},
});

export default theme;
