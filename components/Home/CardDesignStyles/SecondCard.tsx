export const SecondCard = ({ applyEffect }: { applyEffect: boolean }) => {
	return (
		<div className=" w-[166px] h-[102px] sm:w-[297px] sm:h-[180px] flex justify-center absolute bottom-3 right-6">
			<div className="w-[71px] h-[119px] sm:w-[124px] sm:h-[210px] rounded-[20px] transformCardStyle">
				<div className="w-[71px] h-[119px] sm:w-[124px] sm:h-[210px] flex items-end pl-2 sm:pl-0 sm:justify-center bg-primary rounded-[10px] sm:rounded-[20px] shadow-[35px_20px_20px_0px_#CCCBCB]">
					<div className="flex flex-col">
						<div className="pb-5">
							<p className=" text-[8px] sm:text-xs text-white">Card Design</p>
						</div>
						<div className="flex gap-2 pb-5 z-20">
							<div className=" w-1 h-1 sm:w-2 sm:h-2 bg-[#D9D9D9] rounded-full" />
							<div className=" w-1 h-1 sm:w-2 sm:h-2 bg-[#D9D9D9] rounded-full" />
							<div className=" w-1 h-1 sm:w-2 sm:h-2 bg-[#D9D9D9] rounded-full" />
							<div className=" w-1 h-1 sm:w-2 sm:h-2 bg-[#D9D9D9] rounded-full" />
						</div>
					</div>

					<div className="absolute z-20">
						<div
							className={`w-[71px] h-[119px] sm:w-[124px] sm:h-[210px] flex items-end pl-2 sm:justify-center backdrop-blur-2xl rounded-[10px] sm:rounded-[20px] border border-[#E3DFDF] shadowCardStyle transition-all duration-500 ease-in-out z-20 ${
								applyEffect
									? " translate-x-[-26px] translate-y-[-22px]  sm:translate-x-[-28px] sm:translate-y-[-24px] opacity-1"
									: "opacity-0"
							}`}
						>
							<div className="flex flex-col">
								<div className="pb-5">
									<p className="text-[8px] sm:text-xs text-white">
										Card Design
									</p>
								</div>
								<div className="flex gap-2 pb-5 z-20">
									<div className=" w-1 h-1 sm:w-2 sm:h-2 bg-[#D9D9D9] rounded-full" />
									<div className=" w-1 h-1 sm:w-2 sm:h-2 bg-[#D9D9D9] rounded-full" />
									<div className=" w-1 h-1 sm:w-2 sm:h-2 bg-[#D9D9D9] rounded-full" />
									<div className=" w-1 h-1 sm:w-2 sm:h-2 bg-[#D9D9D9] rounded-full" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
