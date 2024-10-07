import type { NumberedList } from "@/types";
import React from "react";

const numberedLists: NumberedList[] = [
	{
		id: 1,
		title: "Navigation Bar",
		description:
			"Ideal for up to 4 or 5 navigation options. It is a horizontal bar with icons or text representing different areas of the interface.",
	},
	{
		id: 2,
		title: "Horizontal Scrolling Bar",
		description:
			"An icon with three horizontal bars that, when clicked, opens a panel with various options. It is compact and intuitive for accessing secondary menus.",
	},
	{
		id: 3,
		title: "Hamburger Menu",
		description:
			"Selecting notification preferences, theme (light/dark), language, etc.",
	},
	{
		id: 4,
		title: "Full-Screen Navigation Menu",
		description:
			"Expands to occupy the entire screen, ideal for focusing on a single task and limiting navigation to the options within the menu. It helps users find and complete the desired function.",
	},
	{
		id: 5,
		title: "Floating Action Button",
		description:
			"A floating button used for important and frequent functions. It expands when clicked to show more options and guide the user in their tasks.",
	},
];

const UseCases = () => {
	return (
		<section className="flex flex-col gap-2">
			<h2 className="text-2xl font-semibold">Use Cases</h2>
			<p>
				A mobile menu is a navigation tool designed for smartphones and tablets,
				allowing users to access different sections of a website or app in a
				compact and user-friendly manner. It adapts to small screens and
				typically includes various styles such as:
			</p>
			<ul className="flex flex-col gap-4">
				{numberedLists.map((item) => (
					<li key={item.id}>
						<span className="font-semibold">
							{item.id} - {item.title}:
						</span>{" "}
						{item.description}
					</li>
				))}
			</ul>
		</section>
	);
};

export default UseCases;
