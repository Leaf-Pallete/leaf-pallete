"use client";

import type { CardProps } from "@/types";
import Image from "next/image";
import { type FunctionComponent, useEffect, useState } from "react";

interface CardsStylesModulesProps {
	item: CardProps;
}

export const CardsStylesModules: FunctionComponent<CardsStylesModulesProps> = ({
	item,
}) => {
	return (
		<div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] h-[268px] rounded-md bg-card border border-border">
			<div className="h-[124px] w-full border-b border-border">
				<Image
					src={item.imgLight}
					alt={item.title}
					title={item.title}
					width={400}
					height={124}
					className="object-cover w-full h-full rounded-t-md dark:hidden"
				/>
				<Image
					src={item.imgDark}
					alt={item.title}
					title={item.title}
					width={400}
					height={124}
					className="object-cover w-full h-full rounded-t-md hidden dark:block"
				/>
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
