import { CardDesignStyles } from "@/components/home/card-design-styles/CardDesignStyles";
import { CardUiComponents } from "@/components/home/card-ui-components/CardUiComponents";
import Hero from "@/components/home/hero-section/Hero";
import LastUpdates from "@/components/home/last-updates";
import Resources from "@/components/home/resources";
import Header from "@/components/shared/Header";

export default function Home() {
	return (
		<>
			<Header />
			<Hero />
			<main className="py-20 max-w-[90%] mx-auto">
				<div className="flex max-w-screen-xl gap-8 w-full mx-auto justify-between items-center flex-col lg:flex-row">
					<CardUiComponents />
					<CardDesignStyles />
				</div>
				<LastUpdates />
				<Resources />
			</main>
		</>
	);
}
