"use client";
import * as A from "@/components/ui/accordion";
import * as S from "@/components/ui/sheet";
import * as I from "@radix-ui/react-icons";

import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo2.svg";
import { ModeToggle } from "./ModeToggle";

export default function SideBarMobile() {
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

	const renderGetStartedItems = listLinks.filter((item) => item.id !== 3);
	const currentYear = new Date().getFullYear();

	return (
		<aside className="block md:hidden">
			<S.Sheet>
				<S.SheetTrigger className="flex gap-2 item-center">
					<I.HamburgerMenuIcon className="absolute top-9 left-4 size-6 cursor-pointer" />
				</S.SheetTrigger>
				<S.SheetContent
					className="flex flex-col justify-between w-[260px]"
					side={"left"}
				>
					<A.Accordion
						className="flex-1 overflow-auto"
						type="single"
						collapsible
					>
						<div className="flex items-center gap-2 justify-center">
							<Image
								width={28}
								height={28}
								src={"/vetor-logo.svg"}
								alt="logo leaf palette"
							/>
							<h1 className="text-center">Leaft Pallete</h1>
						</div>
						<div className="py-8 px-11">
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
				</S.SheetContent>
			</S.Sheet>
		</aside>
	);
}
