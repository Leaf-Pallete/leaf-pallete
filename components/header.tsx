import * as I from "@radix-ui/react-icons";

import { Input } from "@/components/ui/input";
import NavBar from "./navBar";
import Sidebar from "./siderBar";

const Header = () => {
	return (
		<header className="flex items-center md:items-start gap-1 md:gap-8 justify-between p-6 md:px-4 md:py-8">
			<Sidebar />
			<div className="relative flex gap-4 justify-between md:w-full">
				<Input
					id="placeholder"
					className="border opacity-0 md:opacity-100 focus:opacity-50 focus:placeholder-transparent md:focus:placeholder-muted-foreground border-border outline-border md:text-base pl-2 md:pl-12 w-[130px] md:w-[528px] h-10 md:h-14 rounded-2xl cursor-pointer"
					type="text"
					placeholder="Pesquise pelo conteúdo aqui..."
				/>
				<label htmlFor="placeholder">
					<I.MagnifyingGlassIcon className="text-muted-foreground absolute top-1 md:top-4 h-7 w-7 left-24 md:left-4 cursor-pointer" />
				</label>
			</div>
			<NavBar />
		</header>
	);
};

export default Header;
