import type { LogoProps } from "@/types";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Logo = ({ logoSize = 28 }: LogoProps) => (
	<Link className="flex items-center sm:gap-2" href="/">
		<ThemedImage size={logoSize} />
		<h1 className={"font-light text-foreground hidden sm:inline-block"}>
			Leaf Pallete
		</h1>
	</Link>
);

const ThemedImage = ({ size }: { size: number }) => {
	const [isClientSide, setIsClientSide] = useState(false);
	const { resolvedTheme } = useTheme();

	useEffect(() => {
		setIsClientSide(true);
	}, []);

	if (!isClientSide) {
		return <ImagePlaceholder size={size} />;
	}

	const logoSrc =
		resolvedTheme === "dark" ? "/logo-dark.svg" : "/logo-light.svg";
	return (
		<Image src={logoSrc} width={size} height={size} alt="Leaf Palette logo" />
	);
};

const ImagePlaceholder = ({ size }: { size: number }) => (
	<div style={{ width: size, height: size, background: "transparent" }} />
);

export default Logo;
