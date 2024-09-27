import Image from "next/image";
import React from "react";

const RadioAnatomy = () => {
	return (
		<div className="flex flex-col items-start sm:items-center lg:items-start text-start sm:text-center lg:text-start gap-5">
			<h2 className="text-2xl font-semibold">Anatomy</h2>
			<div className="w-full max-w-[203px] h-auto">
				<Image
					src={"/components-module/radio/radio-anatomy.svg"}
					alt={"Radio Anatomy image showing the anatomy of a radio input"}
					width={203}
					height={190}
					className="block dark:hidden w-full h-auto"
				/>
				<Image
					src={"/components-module/radio/radio-anatomy-dark.svg"}
					alt={"Radio Anatomy image showing the anatomy of a radio input"}
					width={203}
					height={190}
					className="hidden dark:block w-full h-auto"
				/>
			</div>
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

export default RadioAnatomy;
