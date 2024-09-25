"use client";

import Image from "next/image";
import { useClient } from "@/hook/useClient";
import { useTheme } from "next-themes";
import { Skeleton } from "@/components/ui/skeleton";

interface ImageProps {
	id: number;
	src: string;
	srcDark: string;
	width: number;
	height: number;
}

const images: ImageProps[] = [
	{
		id: 1,
		src: "/components-module/radio/best-pratices-1.svg",
		srcDark: "/components-module/radio/best-pratices-1-dark.svg",
		width: 150,
		height: 154,
	},
	{
		id: 2,
		src: "/components-module/radio/best-pratices-2.svg",
		srcDark: "/components-module/radio/best-pratices-2-dark.svg",
		width: 330,
		height: 89,
	},
	{
		id: 3,
		src: "/components-module/radio/best-pratices-3.svg",
		srcDark: "/components-module/radio/best-pratices-3-dark.svg",
		width: 188,
		height: 192,
	},
	{
		id: 4,
		src: "/components-module/radio/best-pratices-4.svg",
		srcDark: "/components-module/radio/best-pratices-4-dark.svg",
		width: 188,
		height: 217,
	},
];

const RadioBestPractices = () => {
	return (
		<div className="flex flex-col items-start sm:items-center lg:items-start text-start sm:text-center lg:text-start gap-5">
			<h2 className="text-2xl font-semibold">Best Practices:</h2>
			<p className="text-regular lg:text-lg 2xl:text-xl w-full text-foreground lg:mx-0">
				The default is to place radio button items one below the other, not side
				by side. Image 1 (Done) shows the correct way, while Image 2 (Error)
				shows a non-recommended position.
			</p>
			<div className="flex flex-col items-center lg:flex-row lg:items-center w-full gap-14">
				{images.slice(0, 2).map((image) => (
					<RadioBestPracticesFallback key={image.id} image={image} />
				))}
			</div>
			<p className="text-regular lg:text-lg 2xl:text-xl w-full text-foreground lg:mx-0">
				Other options that should <span className="font-semibold">NOT</span> be
				used with radio buttons:
			</p>
			<div className="flex flex-col items-center lg:flex-row lg:items-start w-full gap-14">
				{images.slice(2).map((image) => (
					<RadioBestPracticesFallback key={image.id} image={image} />
				))}
			</div>
			<ul className="flex flex-col gap-2 pl-5 list-disc">
				<li>
					In Card 1, we have the case where the tool is used incorrectly for
					selecting multiple items. For this function, there is a more
					appropriate option, such as a checkbox.
				</li>
				<li>
					In Card 2, we have the case where the tool is used incorrectly, com um
					item principal contendo itens subordinados.
				</li>
			</ul>
		</div>
	);
};

interface RadioBestPracticesFallbackProps {
	image: ImageProps;
}

const RadioBestPracticesFallback = ({
	image,
}: RadioBestPracticesFallbackProps) => {
	const { isClient } = useClient();
	const { resolvedTheme } = useTheme();

	if (!isClient) {
		return <BestPracticesFallback width={image.width} height={image.height} />;
	}

	const getImageSrc = (lightSrc: string, darkSrc: string) => {
		return resolvedTheme === "dark" ? darkSrc : lightSrc;
	};

	return (
		<Image
			src={getImageSrc(image.src, image.srcDark)}
			alt={`Radio Best Practices ${image.src?.split("-").pop()?.split(".")[0] ?? ""}`}
			width={image.width}
			height={image.height}
		/>
	);
};

const BestPracticesFallback = ({
	width,
	height,
}: { width: number; height: number }) => {
	return <Skeleton style={{ width: `${width}px`, height: `${height}px` }} />;
};

export default RadioBestPractices;
