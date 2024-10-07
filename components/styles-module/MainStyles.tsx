import Image from "next/image";

export const MainStyles = () => {
	return (
		<div className="w-full flex flex-col lg:flex-row lg:justify-between items-center lg:items-start ">
			<div className="w-full lg:w-[722px] flex flex-col items-start sm:items-center lg:items-start text-start sm:text-center lg:text-start">
				<p className="font-semibold text-[36px] md:text-[64px] text-foreground leading-none mb-4">
					Styles
				</p>
				<p className="text-regular lg:text-lg 2xl:text-xl text-foreground max-w-[327px] lg:max-w-[422px] lg:mx-0">
					Components are one of the main building blocks of the design system.
					Its use in a systemic way helps to create consistency between
					products.
				</p>
			</div>
			<div className="hidden w-full lg:flex justify-end">
				<Image
					src="/style-hero-img.svg"
					alt="imagem de exibição do card"
					title="imagem de exibição do card"
					width={488}
					height={346}
				/>
			</div>
		</div>
	);
};
