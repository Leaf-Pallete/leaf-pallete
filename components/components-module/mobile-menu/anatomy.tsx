import {
  anatomy,
  anatomyDark,
} from "@/public/components-module/mobile-menu/images";
import type { NumberedList } from "@/types";
import Image from "next/image";
import React from "react";

const anatomyItems: NumberedList[] = [
  {
    id: 1,
    description: "Container",
  },
  {
    id: 2,
    description: "List elements (including label text and optionally etc)",
  },
  {
    id: 3,
    description: "Divider (optional)",
  },
];

const Anatomy = () => {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="font-semibold text-2xl">Anatomy</h2>
      <Image
        src={anatomy}
        alt="Anatomy of a mobile menu pointing out its aspects"
        className="block dark:hidden mx-auto w-full max-w-[228px] md:max-w-[279px] sm:mx-0"
      />
      <Image
        src={anatomyDark}
        alt="Anatomy of a mobile menu pointing out its aspects"
        className="hidden dark:block mx-auto w-full max-w-[228px] md:max-w-[279px] sm:mx-0"
      />
      <ul>
        {anatomyItems.map((item) => (
          <li key={item.id}>
            {item.id}. {item.description}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Anatomy;
