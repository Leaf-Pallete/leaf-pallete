"use client";

import Image from "next/image";
import React from "react";
import { useClient } from "@/hook/useClient";
import { useTheme } from "next-themes";
import { Skeleton } from "@/components/ui/skeleton";

const RadioHero = () => {
	return (
		<div className="flex flex-col items-start sm:items-center lg:items-start">
			<h1 className="font-semibold text-[36px] md:text-[64px] text-foreground leading-none mb-4">
				Radio
			</h1>
			<p className="text-regular lg:text-lg 2xl:text-xl w-full text-foreground lg:mx-0">
				The option button, or radio button, is a graphical interface element
				that has only two states: selected (activated) or not selected
				(deactivated). Its characteristic shape is a 'circle' that, when
				clicked, displays a smaller circle, usually green. As mentioned earlier,
				it has only two states, meaning only one option can be selected at a
				time.
			</p>
			<RadioHeroFallback />
		</div>
	);
};

const RadioHeroFallback = () => {
	const { isClient } = useClient();
	const { resolvedTheme } = useTheme();

	const getImageSrc = (lightSrc: string, darkSrc: string) => {
		return resolvedTheme === "dark" ? darkSrc : lightSrc;
	};
	if (!isClient) {
		return <HeroFallback />;
	}
	return (
		<Image
			src={getImageSrc(
				"/components-module/radio/radio-component.svg",
				"/components-module/radio/radio-component-dark.svg",
			)}
			alt="Radio Hero Image"
			width={1047}
			height={372}
			className="pt-3"
		/>
	);
};

const HeroFallback = () => {
	return (
		<Skeleton className="w-[381px] h-[135.72px] lg:w-[1047px] lg:h-[372px] mt-3" />
	);
};

export default RadioHero;
