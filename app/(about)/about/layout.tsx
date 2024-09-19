import Header from "@/components/shared/Header";

interface AboutLayoutProps {
	children: React.ReactNode;
}

export default function AboutLayout({ children }: AboutLayoutProps) {
	return (
		<div className="flex flex-col max-w-[1440px] mx-auto">
			<Header />
			<div className="flex-1 flex">
				<div className="flex flex-col w-full">
					<main className="px-6 py-8 w-full h-full">{children}</main>
				</div>
			</div>
		</div>
	);
}
