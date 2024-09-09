import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type CardProps = {
	title: string;
	description: string;
	imgsrc?: string;
	className?: string;
};

const Card = ({ title, description, imgsrc, className }: CardProps) => {
	return (
		<div
			className={cn("border border-border rounded-md shadow-sm ", className)}
		>
			<Link href="#">
				{imgsrc && (
					<div className="flex justify-center">
						<Image
							className="p-6 pb-3"
							src={imgsrc}
							alt="image of different style of buttons"
							width={265}
							height={125}
						/>
					</div>
				)}
				<div
					className={cn("border-t border-border px-6 py-3", className, {
						"p-6 pt-3": imgsrc,
					})}
				>
					<span className="text-foreground font-semibold text-xl">{title}</span>
					<p className="text-muted-foreground font-semibold text-sm">
						{description}
					</p>
				</div>
			</Link>
		</div>
	);
};

export default Card;
