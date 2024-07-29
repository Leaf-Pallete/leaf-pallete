import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-between relative overflow-hidden bg-gradient-to-r from-[#022C05] to-primary p-8 lg:px-16 lg:py-12">
      <Link href="/">
        <div className="flex items-center gap-1 cursor-pointer">
          <div className="filter brightness-0 invert">
            <Image
              src="/logo.png"
              width={35}
              height={35}
              alt="Leaf Palette"
              priority
              draggable="false"
            />
          </div>
          <h2 className="text-2xl text-primary-foreground font-semibold">
            Leaf Palette
          </h2>
        </div>
      </Link>

      <div className="flex flex-col gap-4 max-w-80 lg:max-w-[28rem] md:max-w-[23rem] sm:max-w-80">
        <p className="text-primary-foreground leading-5 font-medium text-lg sm:text-2xl">
          Almost There!
        </p>
        <h1 className="font-medium bg-gradient-to-r from-primary to-green-400 bg-clip-text text-transparent leading-none sm:leading-none tracking-tighter text-7xl lg:text-9xl md:text-8xl">
          Coming Soon
        </h1>
        <p className="text-base text-primary-foreground font-normal tracking-wide">
          We’re excited to announce that we’re creating something amazing! Stay
          tuned for updates as you’ll soon be introduced to the Leaf Palette.
        </p>
      </div>

      <div className="h-screen w-screen lg:w-4/5 absolute top-0 -right-24 md:right-0 transform md:translate-x-[50%] opacity-15 overflow-hidden filter brightness-50">
        <Image
          src="/logo.png"
          layout="fill"
          objectFit="cover"
          alt="Leaf Palette"
          priority
          draggable="false"
        />
      </div>
      <div className="text-primary-foreground flex gap-5 mb-4 sm:mb-0">
        <Link
          href="https://www.linkedin.com/company/soujunior-labs/"
          target="_blank"
        >
          <LinkedInLogoIcon className="size-7 duration-200 hover:scale-125" />
        </Link>
        <Link href="https://github.com/Leaf-Pallete" target="_blank">
          <GitHubLogoIcon className="size-7 duration-200 hover:scale-125" />
        </Link>
      </div>
    </main>
  );
}
