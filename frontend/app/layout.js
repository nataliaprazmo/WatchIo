import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
	applicationName: "Watch.IO",
	title: "Watch.IO",
	description: "Stworzone przez Radłowski K. i Prażmo N.",
	keywords: ["Streaming", "Platforma", "Platforma streamingowa"],
	authors: [{ name: "Prażmo Natalia" }, { name: "Radłowski Kamil" }],
	colorScheme: "dark",
};

export default function RootLayout({ children }) {
	return (
		<html lang="pl">
			<body className={montserrat.className}>{children}</body>
		</html>
	);
}
