"use client";

import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import * as React from "react";

export function ModeToggle() {
	const { setTheme, theme } = useTheme();

	return (
		<Button
			variant="outline"
			size="icon"
			onClick={() => setTheme(theme === "light" ? "dark" : "light")}
			className="dark:rotate-0 rotate-90 transition-all rounded-full shadow-lg shadow-emerald-500/50 z-50"
		>
			<SunIcon className="dark:block h-[1.5rem] w-[1.3rem] hidden" />
			<MoonIcon className="dark:hidden h-5 w-5 block" />
			<span className="sr-only">Toggle theme</span>
		</Button>
	);
}
