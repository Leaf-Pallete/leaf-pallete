import {
  heroDesktop,
  heroDesktopDark,
  heroMobile,
  heroMobileDark,
} from "@/public/components-module/mobile-menu/images";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col gap-4">
      <h1 className="text-4xl sm:text-6xl font-semibold">Mobile Menu</h1>
      <p className="">
        A mobile menu is a navigation solution designed specifically for mobile
        devices, making it easy to access different parts of a website or app in
        a compact and efficient manner. Tailored for smaller screens, it
        typically features various styles, such as horizontal navigation bars,
        expandable menus, and floating buttons, ensuring users can explore
        content effortlessly and with an optimized experience.
      </p>
      <div className="">
        <Image
          src={heroMobile}
          alt=""
          className="block dark:hidden w-full mx-auto max-w-[491px] sm:hidden"
        />
        <Image
          src={heroDesktop}
          alt=""
          className="hidden sm:block mx-auto w-full max-w-[1047px] dark:hidden"
        />
        <Image
          src={heroMobileDark}
          alt=""
          className="hidden dark:block w-full mx-auto max-w-[491px] sm:dark:hidden"
        />
        <Image
          src={heroDesktopDark}
          alt=""
          className="hidden sm:dark:block mx-auto w-full max-w-[1047px]"
        />
      </div>
    </section>
  );
};

export default Hero;
