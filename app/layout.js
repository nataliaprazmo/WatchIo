import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
	title: "Watch.IO",
	description: "Created by Radłowski K. and Prażmo N.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="pl">
			<body className={montserrat.className}>{children}</body>
		</html>
	);
}
