"use client";
import * as S from "@/components/ui/sheet";
import * as I from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../public/vetor-logo.svg";
import { ModeToggle } from "./ModeToggle";

export default function Header() {
	const pathname = usePathname();

	const linkItems = [
		{
			id: 1,
			href: "/",
			title: "Clique aqui para ir a Home",
			text: "Home",
		},
		{
			id: 2,
			href: "/item1",
			title: "Clique aqui para ir a Components",
			text: "Components",
		},
		{
			id: 3,
			href: "/item2",
			title: "Clique aqui para ir a Styles",
			text: "Styles",
		},
		{
			id: 4,
			href: "/item3",
			title: "Clique aqui para ir a About Us",
			text: "About Us",
		},
	];

	return (
		<>
			<header className="w-full mx-auto shadow-md border-b-[1px] border-muted">
				<motion.div
					className="flex items-center md:items-start gap-1 md:gap-8 justify-between px-6 md:px-4 lg:px-28 py-4"
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<Link className="hidden md:flex items-center gap-2" href="/">
						<Image
							className="ml-7"
							width={28}
							height={28}
							src={logo}
							alt="logo leaf palette"
						/>
						<h1 className="hidden md:block text-foreground text-sm font-semibold">
							Leaf Pallete
						</h1>
					</Link>

					<nav className="hidden md:flex max-w-[1440px] gap-8 items-center text-lg text-foreground font-semibold">
						{linkItems.map((link) => (
							<Link
								key={link.id}
								href={link.href}
								title={link.title}
								className={`link ${pathname === `${link.href}` ? "active" : "text-muted-foreground"}`}
							>
								{link.text}
							</Link>
						))}

						<ModeToggle className="border p-1 w-8 h-8 md:w-8 md:h-8 rounded-xl" />
					</nav>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<nav className="flex md:hidden pb-6 px-6 w-full">
						<S.Sheet>
							<div className="flex justify-between w-[325px] ">
								<div className="flex gap-4">
									<S.SheetTrigger>
										<I.HamburgerMenuIcon className="size-6 cursor-pointer" />
									</S.SheetTrigger>
									<Image
										width={28}
										height={28}
										src={logo}
										alt="logo leaf palette"
									/>
								</div>
								<ModeToggle className="border p-1 w-8 h-8 rounded-xl" />
							</div>
							<S.SheetContent
								className="flex flex-col text-center w-52 pt-20"
								side={"left"}
							>
								<S.SheetHeader>
									<div className="flex gap-2 items-center justify-center">
										<Image
											width={28}
											height={28}
											src={logo}
											alt="logo leaf palette"
										/>
										<h1 className="text-sm font-semibold text-foreground whitespace-nowrap">
											Leaf Pallete
										</h1>
									</div>
								</S.SheetHeader>
								{linkItems.map((link) => (
									<Link
										key={link.id}
										href={link.href}
										title={link.title}
										className={`link ${pathname === `${link.href}` ? "active" : "text-muted-foreground"}`}
									>
										{link.text}
									</Link>
								))}
							</S.SheetContent>
						</S.Sheet>
					</nav>
				</motion.div>
			</header>
		</>
	);
}
