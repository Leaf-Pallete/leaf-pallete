import type { ReactNode } from "react";

export interface NavLinkProps {
	link: HeaderLink;
	isActive: boolean;
}

export interface NavProps {
	currentPath: string;
}

export interface HeaderLink {
	id: number;
	href: string;
	title: string;
	text: string | ReactNode;
	mobileOnly?: boolean;
	excludeFromMobile?: boolean;
}

export interface LogoProps {
	logoSize?: number;
}

export interface SidebarLink {
	id: number;
	href: string;
	title: string;
	text: string | ReactNode;
	excludeFromMobile?: boolean;
}

export interface SidebarSection {
	title: string;
	links: SidebarLink[];
}

export interface CardProps {
	id: string;
	title: string;
	subTitle: string;
	imgLight: string;
	imgDark: string;
}

export interface UseCasesData {
	id: number;
	title: string;
	description: string;
}

export interface ImageSections {
	id: number;
	imgLight: string;
	imgDark: string;
	altText: string;
}

export interface RadioUseCase {
	id: number;
	text: string;
	description: string;
}

export interface ImageProps {
	description: string;
	imgLight: string;
	imgDark: string;
	width: number;
	height: number;
}
