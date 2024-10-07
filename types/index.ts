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

export type NumberedList = {
  id: number;
  title?: string;
  description: string;
}
