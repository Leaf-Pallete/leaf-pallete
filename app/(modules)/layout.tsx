import FooterModules from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import Sidebar from "@/components/shared/Sidebar";

export default function ModulesLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="flex flex-col max-w-[1440px] mx-auto ">
			<Header />
			<div className="flex-1 flex">
				<Sidebar />
				<div className="flex flex-col w-full">
					<main className="px-6 py-8 w-full h-full">{children}</main>
					<FooterModules />
				</div>
			</div>
		</div>
	);
}
