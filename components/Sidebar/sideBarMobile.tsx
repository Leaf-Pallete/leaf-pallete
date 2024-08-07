"use client";

import * as D from "@/components/ui/dropdownMenu";
import * as S from "@/components/ui/sheet";
import * as I from "@radix-ui/react-icons";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../../public/logo2.svg";

export default function SideBarMobile() {
	const [mobileOpenMenuId, setMobileOpenMenuId] = useState<number | null>(null);

	const toggleMobileMenu = (id: number) => {
		setMobileOpenMenuId(mobileOpenMenuId === id ? null : id);
	};

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
					className="flex flex-col justify-between bg-orange-100 dark:bg-card"
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
						<nav className="flex flex-col ml-5 items-start">
							<h2 className="text-sm text-muted-foreground font-semibold">
								GET STARTED
							</h2>
							{renderGetStartedItems.map((list) => (
								<D.DropdownMenu
									key={list.id}
									open={mobileOpenMenuId === list.id}
									onOpenChange={() => toggleMobileMenu(list.id)}
								>
									<D.DropdownMenuTrigger
										style={{
											marginBottom:
												mobileOpenMenuId === list.id ? "216px" : "0px",
										}}
										onClick={() => toggleMobileMenu(list.id)}
										className="flex text-secondary-foreground font-semibold pl-4 outline-none pr-[1px] w-[216px] justify-between"
									>
										{list.name}
										{mobileOpenMenuId === list.id ? (
											<I.ChevronUpIcon className="size-6" />
										) : (
											<I.ChevronDownIcon className="size-6" />
										)}
									</D.DropdownMenuTrigger>
									<D.DropdownMenuContent className="m-0 bg-orange-100 dark:bg-card">
										{list.links.map((link) => (
											<D.DropdownMenuItem key={link.text}>
												<Link title="clique aqui" href={link.link}>
													{link.text}
												</Link>
											</D.DropdownMenuItem>
										))}
									</D.DropdownMenuContent>
								</D.DropdownMenu>
							))}
							<h2 className="text-sm text-muted-foreground font-semibold pt-6">
								LIBRARY
							</h2>
							<D.DropdownMenu
								key="components"
								open={mobileOpenMenuId === 3}
								onOpenChange={() => toggleMobileMenu(3)}
							>
								<D.DropdownMenuTrigger
									style={{
										marginBottom: mobileOpenMenuId === 3 ? "216px" : "0px",
									}}
									onClick={() => toggleMobileMenu(3)}
									className="flex text-secondary-foreground font-semibold pl-4 pr-[1px] outline-none w-[216px] justify-between"
								>
									Components
									{mobileOpenMenuId === 3 ? (
										<I.ChevronUpIcon className="size-6" />
									) : (
										<I.ChevronDownIcon className="size-6" />
									)}
								</D.DropdownMenuTrigger>
								<D.DropdownMenuContent className="m-0 bg-orange-100 dark:bg-card">
									{listLinks
										.find((item) => item.id === 3)
										?.links.map((link) => (
											<D.DropdownMenuItem key={link.text}>
												<Link title="clique aqui" href={link.link}>
													{link.text}
												</Link>
											</D.DropdownMenuItem>
										))}
								</D.DropdownMenuContent>
							</D.DropdownMenu>
						</nav>
					</S.SheetHeader>
				</S.SheetContent>
			</S.Sheet>
		</aside>
	);
}
