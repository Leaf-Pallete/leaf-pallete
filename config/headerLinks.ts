import type { HeaderLink } from "@/types";

export const headerLinks: HeaderLink[] = [
	{
		id: 1,
		href: "/",
		title: "Click here to go to Home",
		text: "Home",
	},
	{
		id: 2,
		href: "/components-module",
		title: "Click here to go to Components",
		text: "Components",
		excludeFromMobile: true,
	},
	{
		id: 3,
		href: "/styles-module",
		title: "Click here to go to Styles",
		text: "Styles",
		excludeFromMobile: true,
	},
	{
		id: 4,
		href: "/about",
		title: "Click here to go to About Us",
		text: "About Us",
	},
];
