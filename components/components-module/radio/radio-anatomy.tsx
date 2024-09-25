"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { useClient } from "@/hook/useClient";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";

const RadioAnatomy = () => {
	return (
		<div className="flex flex-col items-start sm:items-center lg:items-start text-start sm:text-center lg:text-start gap-5">
			<h2 className="text-2xl font-semibold">Anatomy</h2>
			<RadioAnatomyFallback />
			<ul className="flex flex-col gap-6">
				<li className="flex items-start text-xl">
					1 - Radio button - selected
				</li>
				<li className="flex items-start text-xl">2 - Label Text</li>
				<li className="flex items-start text-xl">
					3 - Radio button - not selected
				</li>
			</ul>
		</div>
	);
};

const RadioAnatomyFallback = () => {
	const { isClient } = useClient();
	const { resolvedTheme } = useTheme();

	if (!isClient) {
		return <AnatomyFallback />;
	}
	return (
		<Image
			src={
				resolvedTheme === "dark"
					? "/components-module/radio/radio-anatomy-dark.svg"
					: "/components-module/radio/radio-anatomy.svg"
			}
			alt="Radio Anatomy"
			objectFit="contain"
			width={1047}
			height={372}
		/>
	);
};

const AnatomyFallback = () => {
	return <Skeleton className="w-[203px] h-[190px]" />;
};

export default RadioAnatomy;
