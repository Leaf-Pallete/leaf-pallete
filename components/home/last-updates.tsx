"use client";

import { useClient } from "@/hook/useClient";
import { useTheme } from "next-themes";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

export interface CardData {
	id: number;
	title: string;
	description: string;
	imgsrc?: string;
	imgDarkSrc?: string;
}

const cardsData = [
	{
		id: 1,
		title: "Button 101",
		description:
			"Creative and intuitive, accessible buttons that drive action.",
		imgsrc: "/cards/card-image-1.svg",
		imgDarkSrc: "/cards/card-image-1-dark.svg",
	},
	{
		id: 2,
		title: "Better Inputs",
		description: "Design user-friendly forms with best practices about inputs.",
		imgsrc: "/cards/card-image-2.svg",
		imgDarkSrc: "/cards/card-image-2-dark.svg",
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

export const LastUpdates = () => {
	return (
		<section className="pt-10 sm:pt-16 md:pt-20 w-full max-w-[1240px]">
			<h2 className="text-foreground text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
				Last Updates
			</h2>
			<CardGrid />
		</section>
	);
};

const CardGrid = () => {
	const { isClient } = useClient();
	const { resolvedTheme } = useTheme();

	if (!isClient) {
		return <LastUpdatesFallback />;
	}

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
			{cardsData.map(({ id, imgDarkSrc, imgsrc, title, description }) => (
				<Card key={id}>
					<div className="relative w-full h-[125px] border-b">
						<Image
							src={resolvedTheme === "dark" ? imgDarkSrc : imgsrc}
							alt={`Image for ${title}`}
							fill
							className="object-contain p-6 pb-3"
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							priority
						/>
					</div>
					<CardHeader>
						<CardTitle className="text-foreground text-xl">{title}</CardTitle>
					</CardHeader>
					<CardContent>
						<p className="text-muted-foreground text-sm">{description}</p>
					</CardContent>
				</Card>
			))}
		</div>
	);
};

const LastUpdatesFallback = () => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
			{[1, 2, 3, 4].map((num) => (
				<Card key={`skeleton-${num}`}>
					<Skeleton className="h-[125px] w-full" />
					<CardHeader>
						<Skeleton className="h-5 w-2/3" />
					</CardHeader>
					<CardContent>
						<Skeleton className="h-4 w-full mb-2" />
						<Skeleton className="h-4 w-5/6" />
					</CardContent>
				</Card>
			))}
		</div>
	);
};
