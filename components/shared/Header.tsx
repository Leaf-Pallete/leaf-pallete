"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import * as S from "@/components/ui/sheet";
import { headerLinks } from "@/config/headerLinks";
import { sidebarLinks } from "@/config/sidebarLinks";
import { cn } from "@/lib/utils";
import type { HeaderLink } from "@/types";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { ModeToggle } from "./ModeToggle";

const Header = () => {
	const pathname = usePathname();
	return (
		<header
			className={cn(
				"sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 h-14",
			)}
		>
			<div className="flex items-center justify-between px-6  h-full max-w-[1440px] mx-auto">
				<Logo />
				<DesktopNav currentPath={pathname} />
				<MobileNavContent currentPath={pathname} />
			</div>
		</header>
	);
};

const DesktopNav = ({ currentPath }: { currentPath: string }) => (
	<nav className="hidden lg:flex gap-8 items-center text-sm font-medium">
		{headerLinks
			.filter((link) => !link.mobileOnly)
			.map((link) => (
				<NavLink
					key={link.id}
					link={link}
					isActive={currentPath === link.href}
				/>
			))}
		<ModeToggle />
	</nav>
);

const MobileNavContent = ({ currentPath }: { currentPath: string }) => (
	<S.Sheet>
		<S.SheetTrigger className="p-2 lg:hidden">
			<HamburgerMenuIcon className="size-4 cursor-pointer" />
		</S.SheetTrigger>
		<S.SheetContent className="flex flex-col w-[85%] p-0" side="left">
			<S.SheetHeader className="px-4 py-4">
				<S.SheetTitle>
					<Logo logoSize={24} />
				</S.SheetTitle>
			</S.SheetHeader>
			<ScrollArea className="flex-1 px-4">
				<nav className="flex flex-col space-y-2 py-4">
					{headerLinks
						.filter((link) => !link.excludeFromMobile)
						.map((link) => (
							<NavLink
								key={link.id}
								link={link}
								isActive={currentPath === link.href}
							/>
						))}
				</nav>
				<div className="mt-8 space-y-6">
					{sidebarLinks.map((section) => (
						<div key={section.title}>
							<h2 className="text-base text-foreground font-semibold mb-2">
								{section.title}
							</h2>
							<nav className="flex flex-col space-y-2">
								{section.links
									.filter((link) => !link.excludeFromMobile)
									.map((link) => (
										<NavLink
											key={link.id}
											link={link}
											isActive={currentPath === link.href}
										/>
									))}
							</nav>
						</div>
					))}
				</div>
			</ScrollArea>
			<div className="mt-auto p-4">
				<ModeToggle />
			</div>
		</S.SheetContent>
	</S.Sheet>
);

const NavLink = ({
	link,
	isActive,
}: { link: HeaderLink; isActive: boolean }) => (
	<Link
		href={link.href}
		title={link.title}
		className={cn(
			"transition-colors hover:text-foreground",
			isActive ? "text-foreground font-medium" : "text-muted-foreground",
		)}
	>
		{link.text}
	</Link>
);

export default Header;
