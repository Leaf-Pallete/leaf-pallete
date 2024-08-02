import * as I from "@radix-ui/react-icons";
import { ModeToggle } from "./toggle-mode-button";
import Link from "next/link";

const NavBar = () => {
  return ( 
    <nav className="flex gap-4 items-center">
				<ModeToggle className="border w-12 h-12 md:w-14 md:h-14" />
				<Link
					className="hidden md:block bg-background border rounded-lg hover:bg-muted p-4"
					href="#"
				>
					<I.BellIcon className="w-4 h-4 md:w-6 md:h-6" />
				</Link>
				<Link
					className="group bg-muted-foreground hover:bg-muted p-4 rounded-full"
					href="#"
				>
					<I.PersonIcon className="text-background group-hover:text-foreground w-4 h-4 md:w-6 md:h-6" />
				</Link>
			</nav>
   );
}
 
export default NavBar;