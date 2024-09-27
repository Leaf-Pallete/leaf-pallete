import type { ImageProps } from "@/types";
import Image from "next/image";

const images1: ImageProps[] = [
	{
		description: "Image 1: Correct example of using the Radio component",
		imgLight: "/components-module/radio/best-pratices-1.svg",
		imgDark: "/components-module/radio/best-pratices-1-dark.svg",
		width: 150,
		height: 154,
	},
	{
		description: "Image 2: Incorrect example of using the Radio component",
		imgLight: "/components-module/radio/best-pratices-2.svg",
		imgDark: "/components-module/radio/best-pratices-2-dark.svg",
		width: 330,
		height: 89,
	},
];

const images2: ImageProps[] = [
	{
		description: "Image 3: Incorrect use of Radio for multiple selection",
		imgLight: "/components-module/radio/best-pratices-3.svg",
		imgDark: "/components-module/radio/best-pratices-3-dark.svg",
		width: 188,
		height: 192,
	},
	{
		description: "Image 4: Incorrect use of Radio with subordinate items",
		imgLight: "/components-module/radio/best-pratices-4.svg",
		imgDark: "/components-module/radio/best-pratices-4-dark.svg",
		width: 188,
		height: 217,
	},
];

const RadioBestPractices = () => {
	return (
		<div className="flex flex-col items-start sm:items-center lg:items-start text-start sm:text-center lg:text-start gap-5">
			<h2 className="text-2xl font-semibold text-left">Best Practices:</h2>
			<p className="text-xl w-full text-foreground lg:mx-0">
				The default is to place radio button items one below the other, not side
				by side. Image 1 (Done) shows the correct way, while Image 2 (Error)
				shows a non-recommended position.
			</p>
			<div className="flex flex-col items-center lg:flex-row lg:items-center w-full gap-14">
				{images1.map((image) => (
					<div
						key={image.description}
						className="relative"
						style={{ width: image.width, height: image.height }}
					>
						<Image
							src={image.imgDark}
							alt={image.description}
							layout="fill"
							objectFit="contain"
							className="hidden dark:block"
						/>
						<Image
							src={image.imgLight}
							alt={image.description}
							layout="fill"
							objectFit="contain"
							className="block dark:hidden"
						/>
					</div>
				))}
			</div>
			<p className="text-regular lg:text-lg 2xl:text-xl w-full text-foreground lg:mx-0">
				Other options that should <span className="font-semibold">NOT</span> be
				used with radio buttons:
			</p>
			<div className="flex flex-col items-center lg:flex-row lg:items-start w-full gap-14">
				{images2.map((image) => (
					<div
						key={image.description}
						className="relative"
						style={{ width: image.width, height: image.height }}
					>
						<Image
							src={image.imgDark}
							alt={image.description}
							width={image.width}
							height={image.height}
							className="hidden dark:block"
						/>
						<Image
							src={image.imgLight}
							alt={image.description}
							width={image.width}
							height={image.height}
							className="block dark:hidden"
						/>
					</div>
				))}
			</div>
			<ul className="flex flex-col gap-2 pl-5 list-disc text-xl">
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

export default RadioBestPractices;
