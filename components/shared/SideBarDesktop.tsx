"use client";

import * as A from "@/components/ui/accordion";
import Link from "next/link";

export default function SideBarDesktop() {
	const listLinks = [
		{
			id: 1,
			name: "Components",
			links: [
				{ link: "/", text: "Acoordion" },
				{ link: "/", text: "Boas Práticas" },
				{ link: "/", text: "Description" },
				{ link: "/", text: "References" },
				{ link: "/", text: "Variables" },
			],
		},
		{
			id: 2,
			name: "Styles",
			links: [
				{ link: "/", text: "Colors" },
				{ link: "/", text: "Grids" },
				{ link: "/", text: "Icons" },
				{ link: "/", text: "Layouts" },
				{ link: "/", text: "Typography" },
				{ link: "/", text: "Spacing" },
			],
		},
	];

	return (
		<aside className="w-[260px] py-12 px-7 bg-secondary hidden md:flex h-screen">
			<div className="h-full w-full flex justify-center">
				<A.Accordion type="single" collapsible className="h-full w-full">
					<div className="w-full px-9">
						{listLinks.map((list) => (
							<A.AccordionItem key={list.id} value={list.name}>
								<A.AccordionTrigger className="text-base text-foreground font-medium">
									{list.name}
								</A.AccordionTrigger>
								<A.AccordionContent className="bg-secondary">
									<ul>
										{list.links.map((link) => (
											<li className="pb-4 last:pb-0" key={link.text}>
												<Link
													className="text-foreground hover:text-muted-foreground font-medium whitespace-nowrap text-base pl-8"
													href={link.link}
												>
													{link.text}
												</Link>
											</li>
										))}
									</ul>
								</A.AccordionContent>
							</A.AccordionItem>
						))}
					</div>
				</A.Accordion>
			</div>
		</aside>
	);
}
