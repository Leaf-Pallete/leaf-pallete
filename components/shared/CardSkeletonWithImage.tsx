import { Card } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

export const CardSkeletonWithImage = () => {
	return (
		<Card className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
			<div>
				<Skeleton className="h-[125px] w-full" />
				<div className="flex flex-col gap-2 py-3">
					<Skeleton className="h-5 w-2/3" />
					<Skeleton className="h-5 w-2/3" />
					<Skeleton className="h-5 w-2/3" />
				</div>
			</div>
			<div>
				<Skeleton className="h-[125px] w-full" />
				<div className="flex flex-col gap-2 py-3">
					<Skeleton className="h-5 w-2/3" />
					<Skeleton className="h-5 w-2/3" />
					<Skeleton className="h-5 w-2/3" />
				</div>
			</div>
			<div>
				<Skeleton className="h-[125px] w-full" />
				<div className="flex flex-col gap-2 py-3">
					<Skeleton className="h-5 w-2/3" />
					<Skeleton className="h-5 w-2/3" />
					<Skeleton className="h-5 w-2/3" />
				</div>
			</div>
			<div>
				<Skeleton className="h-[125px] w-full" />
				<div className="flex flex-col gap-2 py-3">
					<Skeleton className="h-5 w-2/3" />
					<Skeleton className="h-5 w-2/3" />
					<Skeleton className="h-5 w-2/3" />
				</div>
			</div>
		</Card>
	);
};
