"use client";

import Image from "next/image";
import { type FunctionComponent, useEffect, useState } from "react";

import { useTheme } from "next-themes";

import type { CardProps } from "@/types";

interface CardsStylesModulesProps {
	item: CardProps;
}

export const CardsStylesModules: FunctionComponent<CardsStylesModulesProps> = ({
	item,
}) => {
	const [isClient, setIsClient] = useState<boolean>(false);
	const { resolvedTheme } = useTheme();
	const [imgOfTheme, setImageOfTheme] = useState<string>("");

	useEffect(() => {
		setIsClient(true);

		if (isClient) {
			const selectedImage =
				resolvedTheme === "dark" ? item.imgDark : item.imgLight;
			setImageOfTheme(selectedImage || "");
		}
	}, [isClient, resolvedTheme, item.imgDark, item.imgLight]);

	return (
		<>
			<div className="w-[327px] h-[277px] md:w-[368px] md:h-[268px] rounded-md bg-card border border-border">
				<div className="h-[124px] w-full border-b border-border">
					{imgOfTheme && (
						<Image
							src={imgOfTheme}
							alt={item.title}
							title={item.title}
							width={368}
							height={124}
							className="object-cover w-full h-full rounded-md"
						/>
					)}
				</div>
				<div className="px-6 pt-3">
					<p className="text-card-foreground text-xl font-semibold">
						{item.title}
					</p>
					<p className="text-muted-foreground font-medium">{item.subTitle}</p>
				</div>
			</div>
		</>
	);
};
