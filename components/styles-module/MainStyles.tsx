import Image from "next/image";

export const MainStyles = () => {
	return (
		<div className="flex justify-between mx-auto">
			<div className="w-full flex flex-col lg:flex-row justify-between items-center lg:items-start">
				<div className="w-full lg:w-[442px] flex flex-col items-start sm:items-center lg:items-start text-start sm:text-center lg:text-start">
					<p className="font-semibold text-[36px] md:text-[64px] text-foreground leading-none mb-4">
						Styles
					</p>
					<p className="text-regular lg:text-lg 2xl:text-xl text-foreground max-w-[400px] lg:mx-0">
						Components are one of the main building blocks of the design system.
						Its use in a systemic way helps to create consistency between
						products.
					</p>
				</div>
				<div className="hidden lg:block w-full lg:w-[400px] lg:ml-auto">
					<div className="relative w-full max-w-[488px] h-[280px]">
						<Image
							src="/style-hero-img.svg"
							alt="imagem de exibição do card"
							title="imagem de exibição do card"
							fill
							style={{ objectFit: "contain" }}
							sizes="(min-width: 1024px) 488px, 100vw"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
