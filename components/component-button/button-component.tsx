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

	return (
		<div className="max-w-[1200px] p-8">
			<div>
				<h2 className="text-6xl text-foreground font-semibold">Button</h2>
				<p className="text-xl text-foreground p-3">
					The button is a fundamental UI component used to trigger actions or
					events within an interface. It serves as a call to action, guiding
					users to perform tasks like submitting forms, navigating to another
					page, or triggering functionality.
				</p>
				<Image
					className="pt-3"
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
			<div className="pt-8">
				<h3 className="text-2xl text-foreground font-semibold">Use Cases</h3>
				<ul className="w-[989px] h-full p-3">
					<li className="text-xl text-foreground">
						<span className="font-semibold">1 - Primary Action:</span> Use a
						button for the main action on a page or screen, such as "Submit" or
						"Save."
					</li>
					<li className="text-xl text-foreground pt-8">
						<span className="font-semibold">2 - Secondary Action:</span> Use
						when supporting actions are needed, like "Cancel" or "Go Back."
					</li>
					<li className="text-xl text-foreground pt-8">
						<span className="font-semibold">3 - Destructive Action:</span> Used
						for critical actions, such as "Delete" or "Remove," typically styled
						in red to alert the user."
					</li>
					<li className="text-xl text-foreground pt-8">
						<span className="font-semibold">4 - Link Buttons:</span> Buttons
						that lead to external links or other sections within the same page.
					</li>
					<li className="text-xl text-foreground pt-8">
						<span className="font-semibold">5 - Tertiary Action:</span> Tertiary
						buttons are often used for less prominent actions or for cases where
						the button is styled more like a text link. These actions are
						usually of lower priority and typically only consist of text without
						any strong visual background. Example: "Learn More" or "View
						Details."
					</li>
					<li className="text-xl text-foreground pt-8">
						<span className="font-semibold">6 - Text Buttons:</span> These
						buttons do not have a background color and are commonly used when
						space is limited or when you want a button that blends more
						seamlessly with the surrounding content. Example: "Forgot Password?"
						on login screens.
					</li>
					<li className="text-xl text-foreground pt-8">
						<span className="font-semibold">7 - Icon-only Buttons</span> These
						buttons consist of only an icon, without a text label. They are used
						when the action is clear from the context, such as a "Trash" icon
						for deleting or a "Plus" icon for adding content.
					</li>
					<li className="text-xl text-foreground pt-8">
						<span className="font-semibold">
							8 - Floating Action Button (FAB):
						</span>{" "}
						Common in mobile design, the FAB is a prominent circular button that
						floats above content, typically used for primary or most frequent
						actions in mobile apps, such as "Compose" or "Add."
					</li>
				</ul>
			</div>
			<div className="w-full pb-8">
				<h3 className="text-2xl text-foreground font-semibold pt-16">
					Anatomy
				</h3>
				<Image
					className="pt-8"
					src={
						resolvedTheme === "dark"
							? "/component-button/anatomy-component-dark.png"
							: "/component-button/anatomy-component-light.png"
					}
					width={304}
					height={184}
					alt="image anatomy buttons component"
				/>
				<h4 className="text-xl text-foreground pt-8">Contained button</h4>
				<ul>
					<li className="text-xl text-foreground">
						<span className="font-semibold">1.</span> Text label
					</li>
					<li className="text-xl text-foreground">
						<span className="font-semibold">2.</span> Container
					</li>
					<li className="text-xl text-foreground">
						<span className="font-semibold">3.</span> Icon (optional)
					</li>
				</ul>
			</div>
			<div className="w-full h-[747px]">
				<h3 className="text-2xl text-foreground font-semibold pt-8">
					Best Practices:
				</h3>
				<p className="text-xl text-foreground pt-8">
					Establish the position and alignment of button elements, such as text
					and icons, in relation to their container. For instance, the icon and
					text within the button remain centered and linked to each other as the
					button's width adjusts.
				</p>
				<Image
					className="pt-8"
					src={
						resolvedTheme === "dark"
							? "/component-button/practices-component-dark.png"
							: "/component-button/practices-component-light.png"
					}
					width={344}
					height={184}
					alt="image anatomy buttons component"
				/>
				<p className="text-xl text-foreground py-8">
					Other options that should NOT be used with the button:
				</p>
				<Image
					className="pt-8"
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

const ImgFallback = () => {
	return (
		<div className="w-full max-w-[1440px] h-[2932px] p-12">
			<Skeleton className="h-[40px] w-[200px]" />
			<div className="pt-8">
				<Skeleton className="h-[40px] w-full" />
			</div>
			<div className="py-8">
				<Skeleton className="h-[372px] w-full" />
			</div>
			<div>
				<Skeleton className="h-[30px] w-[160px]" />
			</div>
			<div className="pt-8">
				<Skeleton className="h-[30px] w-[989px]" />
			</div>
			<div className="pt-8">
				<Skeleton className="h-[30px] w-[989px]" />
			</div>
			<div className="pt-8">
				<Skeleton className="h-[30px] w-[989px]" />
			</div>
			<div className="pt-8">
				<Skeleton className="h-[30px] w-[989px]" />
			</div>
			<div className="pt-8">
				<Skeleton className="h-[70px] w-[989px]" />
			</div>
			<div className="pt-8">
				<Skeleton className="h-[70px] w-[989px]" />
			</div>
			<div className="pt-8">
				<Skeleton className="h-[50px] w-[989px]" />
			</div>
			<div className="pt-8">
				<Skeleton className="h-[70px] w-[989px]" />
			</div>
			<div className="pt-8">
				<Skeleton className="h-[70px] w-[989px]" />
			</div>
			<div className="pt-8">
				<Skeleton className="h-[40px] w-[160px]" />
			</div>
			<div className="pt-8">
				<Skeleton className="h-[174px] w-[304px]" />
			</div>
			<div className="pt-8">
				<Skeleton className="h-[114px] w-[160px]" />
			</div>
			<div className="pt-14">
				<Skeleton className="h-[40px] w-[160px]" />
			</div>
			<div className="pt-8">
				<Skeleton className="h-[40px] w-full" />
			</div>
			<div className="pt-8">
				<Skeleton className="h-[174px] w-[344px]" />
			</div>
			<div className="pt-8">
				<Skeleton className="h-[40px] w-[480px]" />
			</div>
			<div className="pt-8">
				<Skeleton className="h-[174px] w-[344px]" />
			</div>
		</div>
	);
};
