"use client";

import Image from "next/image";
import { useClient } from "@/hook/useClient";
import { useTheme } from "next-themes";
import { Skeleton } from "../ui/skeleton";

export const ButtonComponent = () => {
	const { isClient } = useClient();
	const { resolvedTheme } = useTheme();

	if (!isClient) {
		return <ImgFallback />;
	}

	const data = [
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

	return (
		<div className="max-w-full sm:max-w-[1200px] p-4 sm:p-8">
			<div>
				<h2 className="text-3xl sm:text-6xl text-foreground font-semibold">
					Button
				</h2>
				<p className="text-lg sm:text-xl text-foreground p-2 sm:p-3">
					The button is a fundamental UI component used to trigger actions or
					events within an interface. It serves as a call to action, guiding
					users to perform tasks like submitting forms, navigating to another
					page, or triggering functionality.
				</p>
				<Image
					className="pt-2 sm:pt-3"
					src={
						resolvedTheme === "dark"
							? "/component-button/button-component-dark.png"
							: "/component-button/button-component-light.png"
					}
					width={1047}
					height={372}
					alt="image buttons component"
				/>
			</div>
			<div className="pt-4 sm:pt-8">
				<h3 className="text-xl sm:text-2xl text-foreground font-semibold">
					Use Cases
				</h3>
				<p className="text-lg sm:text-xl text-foreground pt-4 sm:pt-8">
					A mobile menu is a navigation tool designed for smartphones and
					tablets, allowing users to access different sections of a website or
					app in a compact and user-friendly manner. It adapts to small screens
					and typically includes various styles such as:
				</p>
				<ul className="text-lg pt-4 sm:pt-8">
					{data.map((data) => (
						<li
							className="text-lg text-foreground pt-6 sm:text-xl sm:pt-8"
							key={data.id}
						>
							<span className="font-semibold">{`${data.id} - ${data.title}:`}</span>{" "}
							{data.description}
						</li>
					))}
				</ul>
			</div>
			<div className="w-full pb-24 sm:pb-8">
				<h3 className="text-xl sm:text-2xl text-foreground font-semibold pt-8">
					Anatomy
				</h3>
				<Image
					className="pt-4 sm:pt-8"
					src={
						resolvedTheme === "dark"
							? "/component-button/anatomy-component-dark.png"
							: "/component-button/anatomy-component-light.png"
					}
					width={304}
					height={184}
					alt="image anatomy buttons component"
				/>
				<h4 className="text-lg sm:text-xl text-foreground pt-4 sm:pt-8">
					Contained button
				</h4>
				<ul>
					<li className="text-lg sm:text-xl text-foreground">
						<span className="font-semibold">1.</span> Text label
					</li>
					<li className="text-lg sm:text-xl text-foreground">
						<span className="font-semibold">2.</span> Container
					</li>
					<li className="text-lg sm:text-xl text-foreground">
						<span className="font-semibold">3.</span> Icon (optional)
					</li>
				</ul>
			</div>
			<div className="w-full max-auto">
				<h3 className="text-xl sm:text-2xl text-foreground text-center sm:text-start font-semibold pt-4 sm:pt-8">
					Best Practices:
				</h3>
				<p className="pb-8 text-lg sm:text-xl text-foreground pt-4 sm:pt-8">
					Establish the position and alignment of button elements, such as text
					and icons, in relation to their container. For instance, the icon and
					text within the button remain centered and linked to each other as the
					button's width adjusts.
				</p>
				<Image
					className="mx-auto pt-4 sm:pt-8 sm:mx-0"
					src={
						resolvedTheme === "dark"
							? "/component-button/practices-component-dark.png"
							: "/component-button/practices-component-light.png"
					}
					width={344}
					height={184}
					alt="image anatomy buttons component"
				/>
				<p className="text-lg sm:text-xl text-foreground py-4 sm:py-8">
					Other options that should NOT be used with the button:
				</p>
				<Image
					className="mx-auto pb-12 pt-4 sm:pt-8 sm:mx-0"
					src={
						resolvedTheme === "dark"
							? "/component-button/practices2-component-dark.png"
							: "/component-button/practices2-component-light.png"
					}
					width={344}
					height={184}
					alt="image anatomy buttons component"
				/>
			</div>
		</div>
	);
};

const skeletonData = [
	{ id: 1, height: "40px", width: "200px" },
	{ id: 2, height: "40px", width: "100%" },
	{ id: 3, height: "372px", width: "100%", py: "py-8" },
	{ id: 4, height: "30px", width: "160px" },
	{ id: 5, height: "30px", width: "989px", py: "pt-8" },
	{ id: 6, height: "30px", width: "989px", py: "pt-8" },
	{ id: 7, height: "30px", width: "989px", py: "pt-8" },
	{ id: 8, height: "30px", width: "989px", py: "pt-8" },
	{ id: 9, height: "70px", width: "989px", py: "pt-8" },
	{ id: 10, height: "70px", width: "989px", py: "pt-8" },
	{ id: 11, height: "50px", width: "989px", py: "pt-8" },
	{ id: 12, height: "70px", width: "989px", py: "pt-8" },
	{ id: 13, height: "70px", width: "989px", py: "pt-8" },
	{ id: 14, height: "40px", width: "160px", py: "pt-8" },
	{ id: 15, height: "174px", width: "304px", py: "pt-8" },
	{ id: 16, height: "114px", width: "344px", py: "pt-8" },
	{ id: 17, height: "70px", width: "989px", py: "pt-8" },
	{ id: 18, height: "70px", width: "989px", py: "pt-8" },
	{ id: 19, height: "70px", width: "989px", py: "pt-8" },
	{ id: 20, height: "50px", width: "989px", py: "pt-8" },
];

export const ImgFallback = () => {
	return (
		<div className="max-w-[1216px]">
			{!skeletonData.length ? null : (
				<div className="w-full p-4 sm:p-8">
					{skeletonData.map((item) => (
						<div
							key={item.id}
							className={`w-full max-w-[${item.width}] h-[${item.height}] ${item.py}`}
						>
							<Skeleton />
						</div>
					))}
				</div>
			)}
		</div>
	);
};
