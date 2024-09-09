import React from "react";
import Card from "./card";

const resourcesCardsData = [
	{
		id: 1,
		title: "Design Principles",
		description: "Master the foundations of great design",
	},
	{
		id: 2,
		title: "Our Approach",
		description: "Discover how we craft exceptional interfaces",
	},
	{
		id: 3,
		title: "Figma Resources",
		description: "Access our curated library of Figma templates",
	},
	{
		id: 4,
		title: "Meet Our Team",
		description: "Get to know the minds behind Leaf Palette",
	},
	{
		id: 5,
		title: "Join Our Community",
		description: "Connect with fellow designers and grow together",
	},
	{
		id: 6,
		title: "Start Your Journey",
		description: "Begin your path to web design mastery",
	},
];

const Resources = () => {
	return (
		<section className="pt-20 w-full max-w-[1240px]">
			<h2 className="text-foreground text-2xl font-semibold mb-6">Resources</h2>
			<div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
				{resourcesCardsData.map((item) => (
					<Card key={item.id} {...item} />
				))}
			</div>
		</section>
	);
};

export default Resources;
