"use client";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type CardProps = {
	title: string;
	description: string;
	imgsrc?: string;
	imgDarkSrc?: string;
	className?: string;
};

const Card = ({
	title,
	description,
	imgsrc,
	imgDarkSrc,
	className,
}: CardProps) => {
	const { resolvedTheme } = useTheme();
	const imageSrc = resolvedTheme === "dark" && imgDarkSrc ? imgDarkSrc : imgsrc;

	return (
		<div
			className={cn("border border-border rounded-md shadow-sm ", className)}
		>
			<Link href="#">
				{imageSrc && (
					<div className="flex justify-center relative w-full h-[125px]">
						<Image
							className="p-6 pb-3 object-contain"
							src={imageSrc}
							alt={`Image for ${title}`}
							fill
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							priority
						/>
					</div>
				)}
				<div
					className={cn("border-t border-border px-6 py-3", className, {
						"p-6 pt-3": imageSrc,
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
