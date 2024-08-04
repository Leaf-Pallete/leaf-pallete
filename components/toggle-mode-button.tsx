"use client";

import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import * as React from "react";

type ToggleProps = {
	className: string;
	showText?: boolean;
};

export function ModeToggle({ className, showText = false }: ToggleProps) {
	const { setTheme, theme } = useTheme();

	const toggleText = theme === "light" ? "Dark Mode" : "Light Mode";

	return (
		<Button
			variant="ghost"
			size="icon"
			onClick={() => setTheme(theme === "light" ? "dark" : "light")}
			className={className}
		>
			{showText && (
				<span className="block md:hidden">{toggleText}&nbsp;&nbsp;</span>
			)}
			<SunIcon className="dark:block h-6 w-6 hidden" />
			<MoonIcon className="dark:hidden h-6 w-6 block" />
			<span className="sr-only">Toggle theme</span>
		</Button>
	);
}
