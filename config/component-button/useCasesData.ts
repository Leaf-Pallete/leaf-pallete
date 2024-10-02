import type { UseCasesData } from "@/types";

export const data: UseCasesData[] = [
	{
		id: 1,
		title: "Primary Action",
		description:
			'Use a button for the main action on a page or screen, such as "Submit" or "Save."',
	},
	{
		id: 2,
		title: "Secondary Action",
		description:
			'Use when supporting actions are needed, like "Cancel" or "Go Back."',
	},
	{
		id: 3,
		title: "Destructive Action",
		description:
			'Used for critical actions, such as "Delete" or "Remove," typically styled in red to alert the user."',
	},
	{
		id: 4,
		title: "Link Buttons",
		description:
			"Buttons that lead to external links or other sections within the same page.",
	},
	{
		id: 5,
		title: "Tertiary Action",
		description:
			'Tertiary buttons are often used for less prominent actions or for cases where the button is styled more like a text link. These actions are usually of lower priority and typically only consist of text without any strong visual background. Example: "Learn More" or "View Details."',
	},
	{
		id: 6,
		title: "Text Buttons",
		description:
			'These buttons do not have a background color and are commonly used when space is limited or when you want a button that blends more seamlessly with the surrounding content. Example: "Forgot Password?" on login screens.',
	},
	{
		id: 7,
		title: "Icon-only Buttons",
		description:
			'These buttons consist of only an icon, without a text label. They are used when the action is clear from the context, such as a "Trash" icon for deleting or a "Plus" icon for adding content.',
	},
	{
		id: 8,
		title: "Floating Action Button (FAB)",
		description:
			' Common in mobile design, the FAB is a prominent circular button that floats above content, typically used for primary or most frequent actions in mobile apps, such as "Compose" or "Add."',
	},
];
