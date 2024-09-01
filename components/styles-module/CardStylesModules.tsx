"use client";
import type { CardProps } from "@/types";
import { useTheme } from "next-themes";
import Image from "next/image";
import { type FunctionComponent, useEffect, useState } from "react";

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
		<div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] h-[268px] rounded-md bg-card border border-border">
			<div className="h-[124px] w-full border-b border-border">
				{imgOfTheme && (
					<Image
						src={imgOfTheme}
						alt={item.title}
						title={item.title}
						width={400}
						height={124}
						className="object-cover w-full h-full rounded-t-md"
					/>
				)}
			</div>
			<div className="px-4 pt-3">
				<p className="text-card-foreground text-lg font-semibold">
					{item.title}
				</p>
				<p className="text-muted-foreground text-sm max-w-[270px]">
					{item.subTitle}
				</p>
			</div>
		</div>
	);
};
