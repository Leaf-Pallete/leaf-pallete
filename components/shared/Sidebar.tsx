"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { sidebarLinks } from "@/config/sidebarLinks";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
	const pathname = usePathname();

	return (
		<aside className="w-[260px] bg-background hidden md:block h-screen">
			<ScrollArea className="h-full">
				<div className="py-8 px-6">
					{sidebarLinks.map((section) => (
						<div key={section.title} className="mb-6">
							<h2 className="text-sm font-semibold text-foreground mb-2">
								{section.title}
							</h2>
							<ul>
								{section.links.map((link) => {
									const isActive = pathname === link.href;
									return (
										<li key={link.id} className="mb-1">
											<Link
												href={link.href}
												title={link.title}
												className={cn(
													"block py-1 text-sm transition-colors font-medium",
													isActive
														? "text-foreground"
														: "text-muted-foreground hover:text-foreground",
												)}
											>
												{link.text}
											</Link>
										</li>
									);
								})}
							</ul>
						</div>
					))}
				</div>
			</ScrollArea>
		</aside>
	);
}
