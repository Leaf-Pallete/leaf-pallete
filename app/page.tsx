import { CardDesignStyles } from "@/components/Home/CardDesignStyles/CardDesignStyles";
import { CardUiComponents } from "@/components/Home/CardUiComponents/CardUiComponents";
import Hero from "@/components/Home/HeroSection/Hero";
import LastUpdates from "@/components/Home/last-updates";
import Resources from "@/components/Home/resources";
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
