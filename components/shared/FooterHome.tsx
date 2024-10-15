"use client";
import {
  DiscordLogoIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import Logo from "./Logo";

export default function FooterHome() {
  return (
    <section className="w-full bg-muted">
      <div className="flex flex-col md:flex-row gap-6 items-start justify-between py-8 md:py-20 md:max-w-[1240px] mx-auto px-6 lg:px-0">
        <div className=" flex flex-col gap-8">
          <Logo logoSize={41} />
          <p className="text-sm text-muted-foreground font-semibold w-3/4">
            Empowering designers to create exceptional web experiences
          </p>
          <div className="flex gap-6">
            <Link
              href="https://www.linkedin.com/company/leaf-pallete"
              target="_blank"
              className=" duration-300"
            >
              <LinkedInLogoIcon className="size-6 hover:text-primary transition-colors duration-300" />
            </Link>
            <Link href="#" target="_blank">
              <DiscordLogoIcon className="size-6 hover:text-primary transition-colors duration-300" />
            </Link>
            <Link
              href="https://github.com/Leaf-Pallete"
              target="_blank"
              className="hover:text-primary transition-colors duration-300"
            >
              <GitHubLogoIcon className="size-6" />
            </Link>
          </div>
        </div>
        <div className="flex items-start gap-20 justify-between">
          <div className="flex flex-col gap-2">
            <h2 className="text-lg text-foreground font-semibold mb-4">
              Social
            </h2>
            <Link
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              href="https://github.com/Leaf-Pallete"
              target="_blank"
            >
              GitHub
            </Link>
            <Link
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              href="#"
              target="_blank"
            >
              Discord
            </Link>
            <Link
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              href="https://www.linkedin.com/company/leaf-pallete"
              target="_blank"
            >
              Linkedin
            </Link>
          </div>
          <div>
            <div className="flex flex-col gap-2">
              <h2 className="text-lg text-foreground font-semibold w-1/2 mb-4">
                Important links
              </h2>
              <Link
                className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                href="/about"
              >
                About us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
