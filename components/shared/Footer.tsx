import * as I from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
	return (
		<section className="mb-8 bg-muted">
			<div className="flex flex-col md:flex-row gap-6 items-start justify-between py-10 px-6 md:py-20 md:px-28 w-full md:max-w-[1440px] mx-auto">
				<div className=" flex flex-col gap-8">
					<Link className="flex items-center gap-2" href="/">
						<Image
							width={41}
							height={41}
							src={"/vetor-logo.svg"}
							alt="logo leaf pallete"
						/>
						<h1 className="text-base text-foreground">Leaf Pallete</h1>
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
						<Link href="#">
							<p className="text-muted-foreground">GitHub</p>
						</Link>
						<Link href="#">
							<p className="text-muted-foreground">Discord</p>
						</Link>
						<Link href="#">
							<p className="text-muted-foreground">Linkedin</p>
						</Link>
					</div>
					<div>
						<div>
							<h2 className="text-2xl text-foreground font-semibold">
								Important links
							</h2>
							<Link href="#">
								<p className="text-muted-foreground">About us</p>
							</Link>
							<Link href="#">
								<p className="text-muted-foreground">Contact Us</p>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
