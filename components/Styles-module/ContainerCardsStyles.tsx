import { infoCardsStyelModule } from "@/config/ArrayCardsStylesModule";
import type { CardProps } from "@/types";
import { CardsStylesModules } from "./CardStylesModules";

export const ContainerCardsStyles = () => {
	return (
		<div className="w-full flex flex-wrap justify-between gap-6 pt-8">
			{infoCardsStyelModule.map((card: CardProps) => (
				<CardsStylesModules key={card.id} item={{ ...card }} />
			))}
		</div>
	);
};
