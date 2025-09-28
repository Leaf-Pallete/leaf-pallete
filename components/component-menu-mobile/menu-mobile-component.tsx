import { imageSections } from "@/config/component-menu-mobile/imageSections";
import { data } from "@/config/component-menu-mobile/useCasesData";
import Image from "next/image";

export const MenuMobileComponent = () => {
  return (
    <div className="max-w-full sm:max-w-[1200px">
      <div>
        <h2 className="text-3xl sm:text-6xl text-foreground font-semibold">
          Menu Mobile
        </h2>
        <p className="text-lg sm:text-xl text-foreground p-2 sm:p-3">
          A mobile menu is a navigation solution designed specifically for
          mobile devices, making it easy to access different parts of a website
          or app in a compact and efficient manner. Tailored for smaller
          screens, it typically features various styles, such as horizontal
          navigation bars, expandable menus, and floating buttons, ensuring
          users can explore content effortlessly and with an optimized
          experience.
        </p>
        {imageSections
          .filter((item) => item.id === 1)
          .map((item) => (
            <div key={item.id} className="pt-4 sm:pt-8">
              <Image
                className="block dark:hidden"
                src={item.imgLight}
                width={1074}
                height={372}
                alt={item.altText}
              />
              <Image
                className="hidden dark:block"
                src={item.imgDark}
                width={1047}
                height={372}
                alt={item.altText}
              />
            </div>
          ))}
      </div>
      <div className="pt-4 sm:pt-8">
        <h3 className="text-xl sm:text-2xl text-foreground font-semibold">
          Use Cases
        </h3>
        <p className="text-lg sm:text-xl text-foreground py-2 sm:py-3">
          A mobile menu is a navigation tool designed for smartphones and
          tablets, allowing users to access different sections of a website or
          app in a compact and user-friendly manner. It adapts to small screens
          and typically includes various styles such as:
        </p>
      </div>
      <ul className="text-lg pt-4 sm:pt-8">
        {data.map((data) => (
          <li
            className="text-lg text-foreground pt-6 sm:text-xl sm:pt-8"
            key={data.id}
          >
            <span className="font-semibold">{`${data.id} - ${data.title}:`}</span>{" "}
            {data.description}
          </li>
        ))}
      </ul>
      <div className="w-full pb-24 sm:pb-8">
        <div>
          <h3 className="text-xl sm:text-2xl text-foreground font-semibold pt-8">
            Anatomy
          </h3>
          {imageSections
            .filter((item) => item.id === 2)
            .map((item) => (
              <div key={item.id} className="pt-4 sm:pt-8">
                <Image
                  className="block dark:hidden"
                  src={item.imgLight}
                  width={304}
                  height={184}
                  alt={item.altText}
                />
                <Image
                  className="hidden dark:block"
                  src={item.imgDark}
                  width={304}
                  height={184}
                  alt={item.altText}
                />
              </div>
            ))}
        </div>
        <h4 className="text-lg sm:text-xl text-foreground pt-4 sm:pt-8">
          Contained menu mobile
        </h4>
        <ul>
          <li className="text-lg sm:text-xl text-foreground">
            <span className="font-semibold">1.</span> Container
          </li>
          <li className="text-lg sm:text-xl text-foreground">
            <span className="font-semibold">2.</span> List elements (including
            label text and optionally etc)
          </li>
          <li className="text-lg sm:text-xl text-foreground">
            <span className="font-semibold">3.</span> Divider (optional)
          </li>
        </ul>
      </div>
      <div className="w-full max-auto">
        <div>
          <h3 className="text-xl sm:text-2xl text-foreground text-center sm:text-start font-semibold pt-4 sm:pt-8">
            Best Practices
          </h3>
          <p className="pb-8 text-lg sm:text-xl text-foreground pt-4 sm:pt-8">
            The default is to display the mobile menu in a compact and
            accessible way, usually as a hamburger menu or a slide-out menu.
            Image 1 (Correct) shows the recommended way to display the mobile
            menu, while Image 2 (Error) shows a position or style that is not
            recommended.
          </p>
          {imageSections
            .filter((item) => item.id === 3)
            .map((item) => (
              <div key={item.id}>
                <Image
                  className="mx-auto sm:mx-0 block dark:hidden"
                  src={item.imgLight}
                  width={344}
                  height={184}
                  alt={item.altText}
                />
                <Image
                  className="mx-auto sm:mx-0 hidden dark:block"
                  src={item.imgDark}
                  width={344}
                  height={184}
                  alt={item.altText}
                />
              </div>
            ))}
        </div>
        <div>
          <p className="text-lg sm:text-xl text-foreground py-4 sm:py-8">
            Other options that should NOT be used with the mobile menu:
          </p>
          {imageSections
            .filter((item) => item.id === 4)
            .map((item) => (
              <div key={item.id}>
                <Image
                  className="mx-auto sm:mx-0 block dark:hidden"
                  src={item.imgLight}
                  width={344}
                  height={184}
                  alt={item.altText}
                />
                <Image
                  className="mx-auto sm:mx-0 hidden dark:block"
                  src={item.imgDark}
                  width={344}
                  height={184}
                  alt={item.altText}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
