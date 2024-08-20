import React from "react";
import Card from "./card";

const Resources = () => {
	return (
		<section className="mt-10 w-full max-w-screen-xl">
			<h2 className="text-foreground text-2xl font-semibold mb-6">Resources</h2>
			<div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
				<Card
					title="Design Principles"
					description="Master the foundations of great design"
				/>
				<Card
					title="Our Approach"
					description="Discover how we craft exceptional interfaces"
				/>
				<Card
					title="Figma Resources"
					description="Access our curated library of Figma templates"
				/>
				<Card
					title="Meet Our Team"
					description="Get to know the minds behind Leaf Palette"
				/>
				<Card
					title="Join Our Community"
					description="Connect with fellow designers and grow together"
				/>
				<Card
					title="Start Your Journey"
					description="Begin your path to web design mastery"
				/>
			</div>
		</section>
	);
};

export default Resources;
