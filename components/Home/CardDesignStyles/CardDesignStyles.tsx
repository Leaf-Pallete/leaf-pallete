import { FigmaLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useState } from "react";
import { FirstCard } from "./FirstCard";
import { SecondCard } from "./SecondCard";

export const CardDesignStyles = () => {
	const [applyEffect, setApplyEffect] = useState<boolean>(false);

	return (
		<div className="relative w-[325px] sm:w-[575px] border rounded-t-xl rounded-b-lg overflow-hidden">
			<div className="absolute inset-0 bg-gradient-to-b from-[#16A249] to-[#F8C8FF] opacity-20" />
			<div
				className="relative z-10 w-full h-[288px] sm:h-[436px] flex flex-col justify-end items-center rounded-t-xl cursor-pointer"
				onMouseEnter={() => setApplyEffect(true)}
				onMouseLeave={() => setApplyEffect(false)}
			>
				<div className="w-[284px] h-[265px] sm:w-[503px] sm:h-[408px] flex flex-col bg-white rounded-t-xl border-t-2 border-r-2 border-l-2 border-[#E4E4E7]">
					<div>
						<p className="text-card-foreground font-semibold text-xs sm:text-xl pt-10 pl-4 sm:pl-6">
							Design Metrics
						</p>
					</div>
					<div className=" pl-4 sm:pl-5 flex flex-col h-full relative pt-[10px] sm:pt-[18px]">
						<FirstCard applyEffect={applyEffect} />
						<SecondCard applyEffect={applyEffect} />
					</div>
				</div>
			</div>
			<div className="relative z-10 w-full h-[101px] flex items-center px-4 sm:px-[30px] bg-white border-2 border-[#E4E4E7] rounded-md ">
				<div className="w-full flex flex-row justify-between">
					<div className="flex flex-row items-center gap-[6px] sm:gap-3">
						<div className="w-[35px] h-[35px] sm:w-[61px] sm:h-[61px] flex justify-center items-center bg-[#16A24933] rounded-full">
							<FigmaLogoIcon className="w-6 h-6 text-primary" />
						</div>
						<div>
							<p className="font-semibold text-xl sm:text-2xl text-card-foreground">
								Design Styles
							</p>
							<div className=" w-[170px] sm:w-[270px] relative bottom-1">
								<p className="text-sm font-semibold text-muted-foreground">
									Learn techniques to craft consistent and visually appealing
									interfaces
								</p>
							</div>
						</div>
					</div>
					<div className="flex items-center">
						<Link
							href="#"
							className="bg-primary px-[14px] py-[6px] sm:px-[26px] sm:py-[9px] rounded-md"
						>
							<p className=" text-[8px] sm:text-base font-medium text-white">
								Learn more
							</p>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
