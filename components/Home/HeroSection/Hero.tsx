"use client";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import heroSectionDark from "../../../public//hero-image-dark.svg";
import heroSection from "../../../public//image-hero.svg";
import border from "../../../public/border.svg";

export default function Hero() {
	const { resolvedTheme } = useTheme();

	const getHeroImage = () => {
		switch (resolvedTheme) {
			case "light":
				return heroSection;
			case "dark":
				return heroSectionDark;
			default:
				return "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
		}
	};

	return (
		<>
			<section
				className="max-w-[375px] md:max-w-[1440px] mx-auto mb-8"
				id="hero"
			>
				<motion.div
					className="box"
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{
						duration: 0.8,
						delay: 0.5,
						ease: [0, 0.71, 0.2, 1.01],
					}}
				>
					<h2 className="relative text-[40px] md:text-6xl text-foreground text-center pb-6 font-semibold mx-auto max-w-[580px]">
						Modern Web Design Mastery <span>Starts Here</span>
						<Image
							className="absolute top-[170px] md:top-[118px] right-[76px] md:right-2 w-[210px] md:w-[320px]"
							src={border}
							alt="imagem de borda personalizada"
						/>
					</h2>
					<p className="text-muted-foreground text-center font-semibold w-[327px] md:w-[480px] mx-auto">
						From basics to advanced: Your complete roadmap to mastering modern
						web interfaces.
					</p>
				</motion.div>

				<motion.div
					className="box hidden md:flex pt-32"
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<Image
						src={getHeroImage()}
						alt={`Imagem de componentes da hero section para o tema ${resolvedTheme === "dark" ? "escuro" : "claro"}`}
					/>
				</motion.div>
			</section>
		</>
	);
}
