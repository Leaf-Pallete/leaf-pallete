import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import * as I from "@radix-ui/react-icons";

import NavBar from "./navBar";

export default function Header() {
	return (
		<header className="flex items-center md:items-start gap-1 md:gap-8 justify-between p-6 md:px-4 md:py-8">
			<div className="relative flex gap-4 ml-10 md:ml-0 md:w-full">
				<Input
					id="placeholder"
					className="border opacity-0 md:opacity-100 focus:opacity-50 focus:placeholder-transparent md:focus:placeholder-muted-foreground border-border outline-border md:text-base ml-10 md:ml-0 md:pl-12 w-[120px] md:w-[528px] h-10 md:h-14 rounded-2xl cursor-pointer"
					type="text"
					placeholder="Pesquise pelo conteúdo aqui..."
				/>
				<Label htmlFor="placeholder">
					<I.MagnifyingGlassIcon className="text-muted-foreground absolute top-1 md:top-4 h-7 w-7 left-32 md:left-4 cursor-pointer" />
				</Label>
			</div>
			<NavBar />
		</header>
	);
}
