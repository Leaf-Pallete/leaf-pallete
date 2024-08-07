"use client";

import * as D from "@/components/ui/dropdownMenu";
import * as I from "@radix-ui/react-icons";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../../public/logo2.svg";

export default function SideBarDesktop() {
	const [openMenuId, setOpenMenuId] = useState<number | null>(null);

	const toggleMenu = (id: number) => {
		setOpenMenuId(openMenuId === id ? null : id);
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
	];

	const renderGetStartedItems = listLinks.filter((item) => item.id !== 3);
	const currentYear = new Date().getFullYear();

	return (
		<aside className="m-w-[296px] hidden md:block p-6 md:p-8">
			<div className="flex flex-col justify-between gap-2 border border-border rounded-xl m-h-screen">
				<div className="m-w-[264px] h-screen p-6">
					<header>
						<Image
							className="cursor-pointer border rounded-xl"
							title="leaf pallete"
							src={logo}
							alt="logo leaf pallete"
						/>
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
									className="flex pt-6 text-secondary-foreground font-semibold pl-4 outline-none pr-[1px] w-[216px] justify-between"
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
								className="flex pt-6 text-secondary-foreground font-semibold pl-4 pr-[1px] outline-none w-[216px] justify-between"
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
	);
}
