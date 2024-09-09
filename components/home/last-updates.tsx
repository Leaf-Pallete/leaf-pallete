import React from "react";
import Card from "./card";

const lastUpdatesCardsData = [
	{
		id: 1,
		title: "Button 101",
		description: "Create intuitive, accessible buttons that drive action.",
		imgsrc: "/cards/card-image-1.svg",
		imgDarkSrc: "/cards/card-image-1-dark.svg",
	},
	{
		id: 2,
		title: "Better Inputs",
		description: "Design user-friendly forms with best practices about inputs.",
		imgsrc: "/cards/card-image-2.svg",
		imgDarkSrc: "/cards/inputs-img-dark.svg",
	},
	{
		id: 3,
		title: "Smart Accordions",
		description: "Build expandable sections for better content organization.",
		imgsrc: "/cards/card-image-3.svg",
		imgDarkSrc: "/cards/card-image-3-dark.svg",
	},
	{
		id: 4,
		title: "Effective Toasts",
		description: "Craft non-intrusive, informative user notifications.",
		imgsrc: "/cards/card-image-4.svg",
		imgDarkSrc: "/cards/card-image-4-dark.svg",
	},
];

const LastUpdates = () => {
	return (
		<section className="pt-10 sm:pt-16 md:pt-20 w-full max-w-[1240px]">
			<h2 className="text-foreground text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
				Last Updates
			</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
				{lastUpdatesCardsData.map((item) => (
					<Card key={item.id} {...item} />
				))}
			</div>
		</section>
	);
};

export default LastUpdates;
