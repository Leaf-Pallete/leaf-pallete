export const FirstCard = ({ applyEffect }: { applyEffect: boolean }) => {
	return (
		<div className="w-[177px] h-[110px] sm:w-[314px] sm:h-[193px] flex justify-center relative">
			<div className="w-[75px] h-[126px] sm:w-[132px] sm:h-[223px] rounded-[20px] transformCardStyle border">
				<div className="w-[75px] h-[126px] sm:w-[132px] sm:h-[223px] flex items-end pl-2 sm:justify-center relative bg-[#09090BCC] rounded-[10px] sm:rounded-[20px] overflow-hidden shadow-[30px_20px_20px_0px_#CCCBCB]">
					<div className="w-[313px] h-[313px] bg-[#232937] absolute left-[-177px] bottom-[-280px] sm:left-[-153px] sm:bottom-[-270px] rounded-full " />
					<div className="flex flex-col">
						<div className="pb-5">
							<p className=" text-[8px] sm:text-xs text-white">Card Design</p>
						</div>
						<div className="flex gap-2 justify-start pb-5 z-20">
							<div className="w-1 h-1 sm:w-2 sm:h-2 bg-[#D9D9D9] rounded-full" />
							<div className="w-1 h-1 sm:w-2 sm:h-2 bg-[#D9D9D9] rounded-full" />
							<div className="w-1 h-1 sm:w-2 sm:h-2 bg-[#D9D9D9] rounded-full" />
							<div className="w-1 h-1 sm:w-2 sm:h-2 bg-[#D9D9D9] rounded-full" />
						</div>
					</div>
				</div>
			</div>

			<div className="absolute transformCardStyle">
				<div
					className={`w-[75px] h-[126px] sm:w-[132px] sm:h-[223px] flex items-end pl-2 sm:justify-center backdrop-blur-2xl rounded-[10px] sm:rounded-[20px] overflow-hidden border border-[#E3DFDF] shadowCardStyle z-20 transition-all duration-500 ease-in-out ${
						applyEffect
							? " translate-y-[-21px] translate-x-[-22px] sm:translate-y-[-23px] sm:translate-x-[-28px] opacity-1"
							: "sm:translate-y-[0] opacity-0 "
					}`}
				>
					<div className="w-[31px] h-[21px] sm:w-[55px] sm:h-[55px] bg-[#D9D9D9] absolute top-4 right-[-25px] rounded-full border" />
					<div className="flex flex-col">
						<div className="pb-5">
							<p className=" text-[8px] sm:text-xs text-white">Card Design</p>
						</div>
						<div className="flex gap-2 justify-start pb-5 z-20">
							<div className="w-1 h-1 sm:w-2 sm:h-2 bg-[#D9D9D9] rounded-full" />
							<div className="w-1 h-1 sm:w-2 sm:h-2 bg-[#D9D9D9] rounded-full" />
							<div className="w-1 h-1 sm:w-2 sm:h-2 bg-[#D9D9D9] rounded-full" />
							<div className="w-1 h-1 sm:w-2 sm:h-2 bg-[#D9D9D9] rounded-full" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
