"use client";

import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  const isDarkMode = theme === "dark";
  const toggleTheme = () => setTheme(isDarkMode ? "light" : "dark");

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme}>
      <span className="sr-only">Toggle theme</span>
      <SunIcon className="h-4 w-4 block dark:hidden" />
      <MoonIcon className="h-4 w-4 hidden dark:block" />
    </Button>
  );
}
