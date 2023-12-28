import "./globals.css";
import { Montserrat } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
	applicationName: "Watch.IO",
	title: "Watch.IO",
	description: "Stworzone przez Radłowski K. i Prażmo N.",
	keywords: ["Streaming", "Platforma", "Platforma streamingowa"],
	authors: [{ name: "Prażmo Natalia" }, { name: "Radłowski Kamil" }],
};

export const viewport = { colorScheme: "dark" };

export default function RootLayout({ children }) {
	return (
		<html lang="pl">
			<body className={montserrat.className}>
				<AppRouterCacheProvider>{children}</AppRouterCacheProvider>
			</body>
		</html>
	);
}
