import * as I from "@radix-ui/react-icons";

import { Input } from "@/components/ui/input"
import NavBar from "./navBar";
import Sidebar from "./siderBar";



const Header = () => {
	return (
		<header className="flex items-start gap-8 md:gap-8 justify-between px-2 md:pr-8 pt-8">
			<Sidebar />
			<div className=" relative flex justify-between w-full">
				<Input
					className="border border-gray-300 pl-12 outline-gray-300 w-full md:w-[528px] h-14 rounded-2xl"
					type="text"
					placeholder="Pesquise pelo conteúdo aqui..."
				/>
				<I.MagnifyingGlassIcon className="absolute top-4 h-6 w-6 left-5 md:left-4" />
				<NavBar />
			</div>
		</header>
	);
};

export default Header;
