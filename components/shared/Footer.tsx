import * as I from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
	return (
		<section className="w-full bg-muted">
			<div className="flex flex-col md:flex-row gap-6 items-start justify-between py-10 px-6 md:py-20 md:px-28 md:max-w-[1440px] mx-auto">
				<div className=" flex flex-col gap-8">
					<Link className="flex items-center gap-2 text-foreground" href="/">
						<Image
							width={41}
							height={41}
							src={"/vetor-logo.svg"}
							alt="logo leaf pallete"
						/>
						Leaf Pallete
					</Link>
					<p className="text-sm text-muted-foreground font-semibold">
						Empowering designers to create exceptional web experiences
					</p>
					<div className="flex gap-6">
						<Link href="#">
							<I.LinkedInLogoIcon className="size-6" />
						</Link>
						<Link href="#">
							<I.DiscordLogoIcon className="size-6" />
						</Link>
						<Link href="#">
							<I.GitHubLogoIcon className="size-6" />
						</Link>
					</div>
				</div>
				<div className="flex items-start gap-20 justify-between">
					<div>
						<h2 className="text-2xl text-foreground font-semibold">Social</h2>
						<Link className="text-muted-foreground" href="#">
							GitHub
						</Link>
						<Link className="text-muted-foreground" href="#">
							Discord
						</Link>
						<Link className="text-muted-foreground" href="#">
							Linkedin
						</Link>
					</div>
					<div>
						<div>
							<h2 className="text-2xl text-foreground font-semibold">
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
