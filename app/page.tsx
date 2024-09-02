import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

export default function Home() {
	return (
		<main>
			<Header />
			<Footer isHome={true} />
		</main>
	);
}
