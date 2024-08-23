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
			<SunIcon className="text-foreground h-6 w-6 block dark:hidden" />
			<MoonIcon className="text-foreground h-6 w-6 hidden dark:block" />
			<span className="sr-only">Toggle theme</span>
		</Button>
	);
}
