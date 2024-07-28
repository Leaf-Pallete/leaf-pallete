import {
	MagnifyingGlassIcon,
	PersonIcon,
	BellIcon,
} from "@radix-ui/react-icons";

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { Input } from "@/components/ui/input";

import { ModeToggle } from "./toogle";

import Link from "next/link";

const Header = () => {
	return (
		<header className="flex items-center justify-between px-8 pt-8">
			<Input
				className="relative border border-gray-300 pl-12 outline-gray-300 w-[528px] h-14 rounded-2xl"
				type="text"
				placeholder="Pesquise pelo conteúdo aqui..."
			/>
			<MagnifyingGlassIcon className="absolute h-6 w-6 left-12" />
			<NavigationMenu className="flex gap-4 items-center">
				<NavigationMenuItem>
          <NavigationMenuLink>
					  <ModeToggle />
          </NavigationMenuLink>
				</NavigationMenuItem>
        <NavigationMenuItem>
          <Link
            className="bg-white border rounded-lg hover:bg-gray-200 dark:bg-transparent dark:hover:bg-slate-800 p-4"
            href="#"
          >
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <BellIcon className="text-black dark:text-white w-6 h-6" />
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>      
          <Link
            className="bg-zinc-500 hover:bg-zinc-400 dark:bg-slate-800 dark:hover:bg-slate-600 p-4 rounded-full"
            href="#"
          >
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <PersonIcon className="text-white w-6 h-6" />
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
			</NavigationMenu>
		</header>
	);
};

export default Header;
