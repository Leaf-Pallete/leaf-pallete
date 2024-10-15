import {
  bestPracticesBad,
  bestPracticesBadDark,
  bestPracticesGood,
  bestPracticesGoodDark,
} from "@/public/components-module/mobile-menu/images";
import Image from "next/image";
import React from "react";

const BestPractices = () => {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-2xl font-semibold">Best Practices</h2>
      <p>
        The default is to display the mobile menu in a compact and accessible
        way, usually as a hamburger menu or a slide-out menu. Image 1 (Correct)
        shows the recommended way to display the mobile menu, while Image 2
        (Error) shows a position or style that is not recommended.
      </p>
      <div>
        <Image
          src={bestPracticesGood}
          alt="An image showing the best practice for a mobile menu: the hamburger menu should be to the left aligned to the text"
          className="mx-auto max-w-[146px] w-full block dark:hidden sm:mx-0"
        />
        <Image
          src={bestPracticesGoodDark}
          alt="An image showing the best practice for a mobile menu: the hamburger menu should be to the left aligned to the text"
          className="mx-auto max-w-[146px] w-full hidden dark:block sm:mx-0"
        />
      </div>
      <p>
        Other options that should <strong className="font-semibold">NOT</strong>{" "}
        be used with the mobile menu:
      </p>
      <div>
        <Image
          src={bestPracticesBad}
          alt="An image showing what you shouldn't do for a mobile menu: the hamburger menu should NOT be to the right unaligned to the text in the left"
          className="mx-auto max-w-[146px] w-full block dark:hidden sm:mx-0"
        />
        <Image
          src={bestPracticesBadDark}
          alt="An image showing what you shouldn't do for a mobile menu: the hamburger menu should NOT be to the right unaligned to the text in the left"
          className="mx-auto max-w-[146px] w-full hidden dark:block sm:mx-0"
        />
      </div>
    </section>
  );
};

export default BestPractices;
