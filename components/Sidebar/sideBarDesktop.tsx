"use client";

import * as A from "@/components/ui/accordion";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo2.svg";

export default function SideBarDesktop() {
	const listLinks = [
		{
			id: 1,
			name: "Design guidelines",
			links: [
				{ link: "/item1", text: "item1" },
				{ link: "/", text: "item2" },
				{ link: "/", text: "item3" },
				{ link: "/", text: "item4" },
			],
		},
		{
			id: 2,
			name: "Foundations",
			links: [
				{ link: "/", text: "item5" },
				{ link: "/", text: "item6" },
				{ link: "/", text: "item7" },
				{ link: "/", text: "item8" },
			],
		},
		{
			id: 3,
			name: "Components",
			links: [
				{ link: "/", text: "Alert" },
				{ link: "/", text: "Buttons" },
				{ link: "/", text: "Inputs" },
				{ link: "/", text: "Modals" },
				{ link: "/", text: "Navbar" },
				{ link: "/", text: "Slider" },
			],
		},
	];

	const renderGetStartedItems = listLinks.filter((item) => item.id !== 3);
	const currentYear = new Date().getFullYear();

	return (
		<aside className="m-w-[296px] hidden md:block p-6 md:p-8">
			<A.Accordion type="single" collapsible className="">
				<div className="flex flex-col justify-between border border-border rounded-xl m-h-screen">
					<div className="w-[264px] h-screen p-6">
						<header>
							<Image
								className="cursor-pointer border rounded-xl"
								title="leaf pallete"
								src={logo}
								alt="logo leaf pallete"
							/>
						</header>
						<h2 className="text-sm text-muted-foreground font-semibold pt-6">
							GET STARTED
						</h2>
						{renderGetStartedItems.map((list) => (
							<A.AccordionItem key={list.id} value={list.name}>
								<A.AccordionTrigger className="text-base font-bold ml-3">
									{list.name}
								</A.AccordionTrigger>
								<A.AccordionContent className="bg-background">
									<ul>
										{list.links.map((link) => (
											<li key={link.text}>
												<Link
													className="flex hover:bg-secondary py-4 rounded-lg"
													href={link.link}
												>
													<p className="text-base pl-4">{link.text}</p>
												</Link>
											</li>
										))}
									</ul>
								</A.AccordionContent>
							</A.AccordionItem>
						))}

						<h2 className="text-sm text-muted-foreground font-semibold pt-6">
							LIBRARY
						</h2>
						<A.AccordionItem value="components">
							<A.AccordionTrigger className="text-base font-bold ml-3">
								Components
							</A.AccordionTrigger>
							<A.AccordionContent className="bg-background">
								<ul>
									{listLinks
										.find((item) => item.id === 3)
										?.links.map((link) => (
											<li key={link.text}>
												<Link
													className="flex hover:bg-secondary py-4 rounded-lg"
													href={link.link}
												>
													<p className="text-base pl-4">{link.text}</p>
												</Link>
											</li>
										))}
								</ul>
							</A.AccordionContent>
						</A.AccordionItem>
					</div>

					<footer className="flex flex-col justify-center text-foreground text-center py-4 bg-muted w-full border rounded-b-lg border-border">
						<p className="text-foreground font-semibold mb-1">
							Version: 0.0.01
						</p>
						<div className="flex gap-1 justify-center">
							<p className="text-sm text-muted-foreground">
								Leaf Pallete {currentYear}
							</p>
							<span>&copy;</span>
						</div>
					</footer>
				</div>
			</A.Accordion>
		</aside>
	);
}
