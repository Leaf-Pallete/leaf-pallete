import React from "react";
import Card from "./card";

const lastUpdatesCardsData = [
	{
		id: 1,
		title: "Button 101",
		description: "Create intuitive, accessible buttons that drive action.",
		imgsrc: "/cards/card-image-1.png"
	},
	{
		id: 2,
		title: "Better Inputs",
		description: "Design user-friendly forms with best practices about inputs.",
		imgsrc: "/cards/card-image-2.png"
	},
	{
		id: 3,
		title: "Smart Accordions",
		description: "Build expandable sections for better content organization.",
		imgsrc: "/cards/card-image-3.png"
	},
	{
		id: 4,
		title: "Effective Toasts",
		description: "Craft non-intrusive, informative user notifications.",
		imgsrc: "/cards/card-image-4.png"
	}
];

const LastUpdates = () => {
	return (
		<section className="mt-10 w-full max-w-screen-xl">
			<h2 className="text-foreground text-2xl font-semibold mb-6">
				Last Updates
			</h2>
			<div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-12">
				{
					lastUpdatesCardsData.map(item => (
						<Card key={item.id} title={item.title} description={item.description} imgsrc={item.imgsrc} />
					))
				}
			</div>
		</section>
	);
};

export default LastUpdates;
