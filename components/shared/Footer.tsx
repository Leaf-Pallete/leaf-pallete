"use client";
import * as I from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export default function Footer({ isHome }: { isHome: boolean }) {
	const { resolvedTheme } = useTheme();
	const logoSrc =
		resolvedTheme === "dark" ? "/logo-dark.svg" : "/logo-light.svg";

	const footerBgColor = isHome ? "w-full bg-muted" : "w-full ";
	return (
		<section className={footerBgColor}>
			<div className="flex flex-col md:flex-row gap-6 items-start justify-between py-8 px-6 md:py-20 md:px-8 md:max-w-[1440px] mx-auto">
				<div className=" flex flex-col gap-8">
					<Link className="flex items-center gap-2 text-foreground" href="/">
						<Image
							width={41}
							height={41}
							src={logoSrc}
							alt="logo leaf pallete"
						/>
						Leaf Pallete
					</Link>
					<p className="text-sm text-muted-foreground font-semibold w-3/4">
						Empowering designers to create exceptional web experiences
					</p>
					<div className="flex gap-6">
						<Link href="#" target="_blank">
							<I.LinkedInLogoIcon className="size-6" />
						</Link>
						<Link href="#" target="_blank">
							<I.DiscordLogoIcon className="size-6" />
						</Link>
						<Link href="https://github.com/Leaf-Pallete" target="_blank">
							<I.GitHubLogoIcon className="size-6" />
						</Link>
					</div>
				</div>
				<div className="flex items-start gap-20 justify-between">
					<div className="flex flex-col gap-2">
						<h2 className="text-2xl text-foreground font-semibold mb-4">
							Social
						</h2>
						<Link
							className="text-muted-foreground"
							href="https://github.com/Leaf-Pallete"
							target="_blank"
						>
							GitHub
						</Link>
						<Link className="text-muted-foreground" href="#" target="_blank">
							Discord
						</Link>
						<Link className="text-muted-foreground" href="#" target="_blank">
							Linkedin
						</Link>
					</div>
					<div>
						<div className="flex flex-col gap-2">
							<h2 className="text-2xl text-foreground font-semibold w-1/2 mb-4">
								Important links
							</h2>
							<Link className="text-muted-foreground" href="#">
								About us
							</Link>
							<Link className="text-muted-foreground" href="#">
								Contact Us
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
