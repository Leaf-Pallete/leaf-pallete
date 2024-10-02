import { CardDesignStyles } from "@/components/home/card-design-styles/CardDesignStyles";
import { CardUiComponents } from "@/components/home/card-ui-components/CardUiComponents";
import Hero from "@/components/home/hero-section/Hero";
import { LastUpdates } from "@/components/home/last-updates";
import Resources from "@/components/home/resources";
import FooterHome from "@/components/shared/FooterHome";
import Header from "@/components/shared/Header";

export default function Home() {
	return (
		<>
			<div className="w-full max-w-[1440px] mx-auto">
				<Header />
				<Hero />
				<main className="flex flex-col items-center py-20 px-6">
					<div className="flex max-w-[1240px] gap-8 w-full justify-between items-center flex-col lg:flex-row">
						<CardUiComponents />
						<CardDesignStyles />
					</div>
					<LastUpdates />
					<Resources />
				</main>
			</div>
			<FooterHome />
		</>
	);
}
