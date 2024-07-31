"use client";

import * as I from "@radix-ui/react-icons";
import * as D from "@/components/ui/dropdown-menu";
import Image from "next/image";
import logo from "../public/logo2.svg";
import { useState } from "react";
import Link from "next/link";

const Sidebar = () => {
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
		<div className="min-w-[296px] pb-8 px-4">
			<div className="flex flex-col justify-between gap-2 border rounded-lg min-h-screen">
				<div className="w-[264px] p-6">
					<header>
						<Image src={logo} alt="logo leaf palette" />
					</header>
					<nav>
						<h2 className="text-sm text-gray-600 font-semibold pt-6">
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
									className="flex pl-4 outline-none pr-[1px] w-[216px] justify-between"
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
					</nav>
					<nav>
						<h2 className="text-sm text-gray-600 font-semibold pt-6">
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
								className="flex pl-4 pr-[1px] outline-none w-[216px] justify-between"
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
				<footer className="flex flex-col justify-center text-black text-center py-4 bg-gray-200 min-w-[263px] h-20 border rounded-b-lg border-gray-300">
					<p className="mb-1">Version: 0.0.01</p>
          <div className="flex justify-center">
            <p className="text-sm text-gray-800">Leaf Pallete {currentYear}</p>
            <span>&copy;</span>
          </div>
				</footer>
			</div>
		</div>
	);
};

export default Sidebar;
