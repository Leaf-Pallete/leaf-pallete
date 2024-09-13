import type { LogoProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

export const Logo = ({ logoSize = 28 }: LogoProps) => (
	<Link className="flex items-center sm:gap-2" href="/">
		<ThemedImage size={logoSize} />
		<h1 className={"font-light text-foreground hidden sm:inline-block"}>
			Leaf Pallete
		</h1>
	</Link>
);

const ThemedImage = ({ size }: { size: number }) => {
	return (
		<div>
			<Image
				className="dark:hidden"
				src={"/logo-light.svg"}
				width={size}
				height={size}
				alt="Leaf Palette logo"
			/>
			<Image
				className="hidden dark:block"
				src={"/logo-dark.svg"}
				width={size}
				height={size}
				alt="Leaf Palette logo"
			/>
		</div>
	);
};
export default Logo;
