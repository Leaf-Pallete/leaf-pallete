import Image from "next/image";
import React from "react";

const RadioHero = () => {
	return (
		<div className="flex flex-col items-start sm:items-center lg:items-start">
			<h1 className="font-semibold text-[40px] md:text-[77px] text-foreground leading-none mb-4">
				Radio
			</h1>
			<p className="text-xl md:text-xl w-full text-foreground lg:mx-0">
				The option button, or radio button, is a graphical interface element
				that has only two states: selected (activated) or not selected
				(deactivated). Its characteristic shape is a 'circle' that, when
				clicked, displays a smaller circle, usually green. As mentioned earlier,
				it has only two states, meaning only one option can be selected at a
				time.
			</p>
			<div className="py-3 w-full">
				<Image
					src={"/components-module/radio/radio-component-dark.svg"}
					alt={"Radio Hero image showing some radio inputs"}
					layout="responsive"
					width={1047}
					height={372}
					className="hidden dark:block object-fill"
				/>
				<Image
					src={"/components-module/radio/radio-component.svg"}
					alt={"Radio Hero image showing some radio inputs"}
					layout="responsive"
					width={1047}
					height={372}
					className="block dark:hidden object-fill"
				/>
			</div>
		</div>
	);
};

export default RadioHero;
