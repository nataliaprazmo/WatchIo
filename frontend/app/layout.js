import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";

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
			<body>
				<AppRouterCacheProvider>{children}</AppRouterCacheProvider>
			</body>
		</html>
	);
}
