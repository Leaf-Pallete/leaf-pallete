import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronDownIcon, FigmaLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

export const CardUiComponents = () => {
	return (
		<div className="relative w-full sm:w-[575px] rounded-t-lg sm:rounded-t-xl rounded-b-lg overflow-hidden">
			<div className="absolute inset-0 bg-gradient-to-b from-[#16A249] to-[#F8C8FF] opacity-20" />
			<div className="relative z-10 w-full h-[260px] sm:h-[436px] flex flex-col justify-end items-center rounded-t-lg sm:rounded-t-xl">
				<div className="w-[284px] h-[235px] sm:w-[503px] sm:h-[392px] flex flex-col bg-card rounded-t-lg sm:rounded-t-xl">
					<div>
						<div className="w-full flex justify-between items-end pl-7 pr-8">
							<p className="text-card-foreground font-semibold text-xs sm:text-xl pt-10">
								Overview
							</p>
							<Link
								href="/components-module"
								className={`${cn(buttonVariants({ variant: "secondary" }))} flex gap-1`}
							>
								DAILY VISITS
								<ChevronDownIcon />
							</Link>
						</div>
					</div>
					<div className="pl-4 sm:pl-5 sm:flex flex-col pt-[10px] sm:pt-[48px]">
						<Image
							src="/image-components.svg"
							alt=""
							title=""
							width={457}
							height={276}
						/>
					</div>
					<div className="flex justify-center sm:hidden pt-[10px]">
						<Image
							src="/image-card-ui-components.png"
							alt="Imagem de exibição do card"
							title="Imagem de exibição do card"
							width={254}
							height={169}
						/>
					</div>
				</div>
			</div>
			<div className="relative z-10 w-full sm:h-[101px] flex items-center px-4 sm:px-[30px] bg-card border-2 border-border rounded-md ">
				<div className="w-full flex flex-row justify-between">
					<div className="flex flex-row items-center gap-[6px] sm:gap-3 ">
						<div className=" hidden w-[61px] h-[61px] sm:flex justify-center items-center bg-primary/20 rounded-full">
							<FigmaLogoIcon className="w-6 h-6 text-primary" />
						</div>
						<div>
							<p className="font-semibold text-xl sm:text-2xl text-card-foreground">
								UI Components
							</p>
							<div className=" w-[170px] sm:w-[270px] relative bottom-1">
								<p className="text-xs font-semibold text-muted-foreground">
									Explore the best techniques for creating intuitive and
									accessible components.
								</p>
							</div>
						</div>
					</div>
					<div className="flex items-center">
						<Link
							href="/components-module"
							className={`${cn(buttonVariants({ variant: "default", size: "sm" }))}`}
						>
							Learn more
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
