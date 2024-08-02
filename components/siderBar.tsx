"use client";

import * as I from "@radix-ui/react-icons";
import * as D from "@/components/ui/dropdown-menu";
import * as S from "@/components/ui/sheet";

import Image from "next/image";
import logo from "../public/logo2.svg";
import { useState } from "react";
import Link from "next/link";
import { ModeToggle } from "./toggle-mode-button";

const Sidebar = () => {
	const [openMenuId, setOpenMenuId] = useState<number | null>(null);
	const [mobileOpenMenuId, setMobileOpenMenuId] = useState<number | null>(null);

	const toggleMenu = (id: number) => {
		setOpenMenuId(openMenuId === id ? null : id);
	};

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
		<>
			<aside className="min-w-[296px] hidden md:block">
				<div className="flex flex-col justify-between gap-2 border border-border rounded-lg min-h-screen">
					<div className="w-[264px] p-6">
						<header>
							<Image className="cursor-pointer" title="leaf pallete" src={logo} alt="logo leaf pallete" />
						</header>
						<nav>
							<h2 className="text-sm text-muted-foreground font-semibold pt-6">
								GET STARTED
							</h2>
							{renderGetStartedItems.map((list) => (
								<D.DropdownMenu
									key={list.id}
									open={openMenuId === list.id}
									onOpenChange={() => toggleMenu(list.id)}
								>
									<D.DropdownMenuTrigger
										style={{
											marginBottom: openMenuId === list.id ? "216px" : "0px",
										}}
										onClick={() => toggleMenu(list.id)}
										className="flex text-secondary-foreground font-semibold pl-4 outline-none pr-[1px] w-[216px] justify-between"
									>
										{list.name}
										{openMenuId === list.id ? (
											<I.ChevronUpIcon className="size-6" />
										) : (
											<I.ChevronDownIcon className="size-6" />
										)}
									</D.DropdownMenuTrigger>
									<D.DropdownMenuContent className="m-0">
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
								open={openMenuId === 3}
								onOpenChange={() => toggleMenu(3)}
							>
								<D.DropdownMenuTrigger
									style={{ marginBottom: openMenuId === 3 ? "216px" : "0px" }}
									onClick={() => toggleMenu(3)}
									className="flex text-secondary-foreground font-semibold pl-4 pr-[1px] outline-none w-[216px] justify-between"
								>
									Components
									{openMenuId === 3 ? (
										<I.ChevronUpIcon className="size-6" />
									) : (
										<I.ChevronDownIcon className="size-6" />
									)}
								</D.DropdownMenuTrigger>
								<D.DropdownMenuContent className="m-0">
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
					</div>
					<footer className="flex flex-col justify-center text-foreground text-center py-4 bg-muted w-full h-20 border rounded-b-lg border-border">
              <p className="text-foreground font-semibold mb-1">Version: 0.0.01</p>
              <div className="flex justify-center">
                <p className="text-sm text-muted-foreground">
                  Leaf Pallete {currentYear}
                </p>
                <span>&copy;</span>
              </div>
            </footer>
				</div>
			</aside>

			<aside className="block w-full md:hidden">
				<S.Sheet>
					<S.SheetTrigger className="flex gap-2 item-center">
						<I.HamburgerMenuIcon className="size-6 cursor-pointer" />
					</S.SheetTrigger>
					<S.SheetContent className="flex flex-col justify-between bg-orange-100 dark:bg-card" side={"left"}>
						<S.SheetHeader>
              <div className="flex flex-row-reverse items-center mt-6 gap-16">
              <Image className="border border-white rounded-xl" title="leaf pallete" width={48} height={48} src={logo} alt="logo leaf palette" />
                <S.SheetTitle className="text-base text-secondary-foreground font-semibold">Main menu</S.SheetTitle>
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
            <div className="flex flex-col gap-5 items-center">
						<ModeToggle className="bg-background text-foreground border w-[140px] h-9 md:w-14 md:h-14" showText />
              <footer className="flex flex-col justify-center text-foreground text-center py-4 bg-muted w-full h-20 border rounded-b-lg border-border">
              <p className="text-foreground font-semibold mb-1">Version: 0.0.01</p>
              <div className="flex justify-center">
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
		</>
	);
};

export default Sidebar;
