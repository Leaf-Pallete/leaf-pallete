import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";

const inter = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
	icons: {
		icon: "./app/favicon.ico",
	},
	title: "Leaf Palette",
	description:
		"Leaf Palette: Your pocket diary for UI design inspiration and best practices",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const isProduction = process.env.NODE_ENV === "production";
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={inter.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="light"
					enableColorScheme
					disableTransitionOnChange
					enableSystem
				>
					{children}
					{isProduction && <Analytics mode="production" />}
				</ThemeProvider>
			</body>
		</html>
	);
}
