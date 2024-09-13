"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
	return (
		<section
			className="max-w-[375px] md:max-w-[1240px] mx-auto mb-8 pt-20 px-6 lg:px-0"
			id="hero"
		>
			<motion.div
				initial={{ opacity: 0, scale: 0.5 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{
					duration: 0.8,
					delay: 0.5,
					ease: [0, 0.71, 0.2, 1.01],
				}}
			>
				<h2 className="relative text-[40px] md:text-6xl text-foreground text-center pb-6 font-semibold mx-auto max-w-[580px]">
					Modern Web Design Mastery{" "}
					<span className="relative inline-block">
						Starts Here
						<motion.div
							className="absolute bottom-0 left-0 h-1 bg-primary rounded-lg"
							initial={{ width: 0, height: 1 }}
							animate={{ width: "100%", height: 4 }}
							transition={{
								width: { duration: 0.8, delay: 1.3, ease: "easeInOut" },
								height: { duration: 0.8, delay: 1.3, ease: "easeInOut" },
							}}
							style={{
								clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 25%)",
							}}
						/>
					</span>
				</h2>
				<p className="text-muted-foreground text-center font-semibold w-[327px] md:w-[480px] mx-auto">
					From basics to advanced: Your complete roadmap to mastering modern web
					interfaces.
				</p>
			</motion.div>
			<motion.div
				className="hidden md:flex pt-32"
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
			>
				<Image
					src={"/image-hero.svg"}
					alt={"Imagem de componentes da hero section para o tema claro"}
					width={1240}
					height={600}
					className="object-contain dark:hidden"
					priority
				/>
				<Image
					src={"/hero-image-dark.svg"}
					alt={"Imagem de componentes da hero section para o tema escuro"}
					width={1240}
					height={600}
					className="object-contain hidden dark:block"
					priority
				/>
			</motion.div>
		</section>
	);
}
