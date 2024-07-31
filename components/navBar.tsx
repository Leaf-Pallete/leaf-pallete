import * as I from "@radix-ui/react-icons";
import { ModeToggle } from "./toggle-mode-button";
import Link from "next/link";

const NavBar = () => {
  return ( 
    <nav className="flex gap-4 items-center">
				<ModeToggle />
				<Link
					className="bg-white border rounded-lg hover:bg-gray-200 dark:bg-transparent dark:hover:bg-slate-800 p-4"
					href="#"
				>
					<I.BellIcon className="w-4 h-4 md:w-6 md:h-6" />
				</Link>
				<Link
					className="bg-zinc-500 hover:bg-zinc-400 z dark:hover:bg-slate-600 p-4 rounded-full"
					href="#"
				>
					<I.PersonIcon className="text-white w-4 h-4 md:w-6 md:h-6" />
				</Link>
			</nav>
   );
}
 
export default NavBar;