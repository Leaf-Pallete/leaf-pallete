import Image from "next/image";

export const MainStyles = () => {
	return (
		<div className="flex justify-center">
			<div className="w-full flex justify-between flex-wrap">
				<div className="w-[442px]">
					<p className="font-semibold text-[40px] md:text-[64px] text-foreground">
						Styles
					</p>
					<p className="text-regular md:text-xl text-foreground">
						Components are one of the main building blocks of the design system.
						Its use in a systemic way helps to create consistency between
						products.
					</p>
				</div>
				<div className="pt-8 md:pt-0">
					<Image
						src="/image-main-card-styles-modules.png"
						alt="imagem de exibição do card"
						title="imagem de exibição do card"
						width={488}
						height={346}
					/>
				</div>
			</div>
		</div>
	);
};
