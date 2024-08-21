import { Raleway } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Sidebar from "@/components/SiderBar";
import { ThemeProvider } from "@/components/themeProvider";
import { env } from "@/lib/env";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";

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
					defaultTheme={env.NEXT_PUBLIC_THEME_MODE}
					enableColorScheme
					disableTransitionOnChange
					enableSystem
				>
					<div className="flex flex-col md:flex-row md:items-start">
						<Sidebar />
						<div className="grid w-full">
							<Header />
							<main className="px-2">{children}</main>
						</div>
					</div>
					{isProduction && <Analytics mode="production" />}
				</ThemeProvider>
			</body>
		</html>
	);
}
