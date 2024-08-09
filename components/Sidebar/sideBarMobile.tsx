"use client";
import * as A from "@/components/ui/accordion";
import * as S from "@/components/ui/sheet";
import * as I from "@radix-ui/react-icons";

import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo2.svg";
import { ModeToggle } from "../toggleModeButton";

export default function SideBarMobile() {
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
		<aside className="block md:hidden">
			<S.Sheet>
				<S.SheetTrigger className="flex gap-2 item-center">
					<I.HamburgerMenuIcon className="absolute top-9 left-4 size-6 cursor-pointer" />
				</S.SheetTrigger>
				<S.SheetContent
					className="flex flex-col justify-between bg-background dark:bg-card"
					side={"left"}
				>
					<S.SheetHeader>
						<div className="flex flex-row-reverse items-center mt-6 gap-16">
							<Image
								className="border border-white rounded-xl"
								title="leaf pallete"
								width={48}
								height={48}
								src={logo}
								alt="logo leaf palette"
							/>
							<S.SheetTitle className="text-base text-secondary-foreground font-semibold">
								Main menu
							</S.SheetTitle>
						</div>
					</S.SheetHeader>

					<A.Accordion
						className="flex-1 overflow-auto"
						type="single"
						collapsible
					>
						<div className="px-4">
							<h2 className="text-sm text-muted-foreground font-semibold pt-6">
								GET STARTED
							</h2>
							{renderGetStartedItems.map((list) => (
								<A.AccordionItem key={list.id} value={list.name}>
									<A.AccordionTrigger className="text-base font-bold ml-3">
										{list.name}
									</A.AccordionTrigger>
									<A.AccordionContent>
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
								<A.AccordionContent>
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
					</A.Accordion>

					<div className="flex flex-col items-center gap-4 justify-between p-4">
						<ModeToggle
							className="bg-foreground text-background border w-[140px] h-9 md:w-14 md:h-14"
							showText
						/>
						<footer className="flex flex-col justify-center text-foreground text-center py-4 bg-muted w-full border rounded-lg border-border">
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
				</S.SheetContent>
			</S.Sheet>
		</aside>
	);
}
