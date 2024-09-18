"use client";

import { useClient } from "@/hook/useClient";
import { useTheme } from "next-themes";
import Image from "next/image";
import { Skeleton } from "../ui/skeleton";

export const HeroComponent = () => {
	return (
		<div className="flex justify-between mx-auto">
			<div className="w-full flex flex-col lg:flex-row justify-between items-center lg:items-start">
				<div className="w-full lg:w-[442px] flex flex-col items-start sm:items-center lg:items-start text-start sm:text-center lg:text-start">
					<h1 className="font-semibold text-[36px] md:text-[64px] text-foreground leading-none mb-4">
						Components
					</h1>
					<p className="text-regular lg:text-lg 2xl:text-xl text-foreground max-w-[327px] lg:max-w-[422px] lg:mx-0">
						Components are one of the main building blocks of the design system.
						Its use in a systemic way helps to create consistency between
						products.
					</p>
				</div>
				<div className="hidden lg:block w-full lg:w-[488px] lg:ml-auto">
					<div className="relative w-full max-w-[488px] h-[346px]">
						<Img />
					</div>
				</div>
			</div>
		</div>
	);
};

const Img = () => {
	const { isClient } = useClient();
	const { resolvedTheme } = useTheme();

	if (!isClient) {
		return <ImgFallback />;
	}

	return (
		<>
			<Image
				src={
					resolvedTheme === "dark"
						? "/components-module/component-hero-dark.svg"
						: "/components-module/component-hero.svg"
				}
				alt="imagem de exibição do card"
				title="imagem de exibição do card"
				fill
				style={{ objectFit: "cover" }}
				sizes="(min-width: 1024px) 488px, 100vw"
			/>
		</>
	);
};

const ImgFallback = () => {
	return (
		<div className="w-full max-w-[488px] h-[346px]">
			<Skeleton className="h-[346px] w-full" />
		</div>
	);
};
