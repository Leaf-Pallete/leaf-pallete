"use client";

import { useClient } from "@/hook/useClient";
import { useTheme } from "next-themes";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

export interface CardData {
  id: number;
  title: string;
  description: string;
  imgsrc?: string;
  imgDarkSrc?: string;
}

const cardsData = [
  {
    id: 1,
    title: "Button",
    description: "Create intuitive, accessible buttons that drive action.",
    imgsrc: "/components-module/component-module-1.svg",
    imgDarkSrc: "/components-module/component-module-1-dark.svg",
  },
  {
    id: 2,
    title: "Text Field",
    description: "Create intuitive, accessible buttons that drive action.",
    imgsrc: "/components-module/component-module-2.svg",
    imgDarkSrc: "/components-module/component-module-2-dark.svg",
  },
  {
    id: 3,
    title: "Select",
    description: "Create intuitive, accessible buttons that drive action.",
    imgsrc: "/components-module/component-module-3.svg",
    imgDarkSrc: "/components-module/component-module-3-dark.svg",
  },
  {
    id: 4,
    title: "Radio Button",
    description: "Create intuitive, accessible buttons that drive action.",
    imgsrc: "/components-module/component-module-4.svg",
    imgDarkSrc: "/components-module/component-module-4-dark.svg",
  },
  {
    id: 5,
    title: "Calender",
    description: "Create intuitive, accessible buttons that drive action.",
    imgsrc: "/components-module/component-module-5.svg",
    imgDarkSrc: "/components-module/component-module-5-dark.svg",
  },
  {
    id: 6,
    title: "Menu Mobile",
    description: "Create intuitive, accessible buttons that drive action.",
    imgsrc: "/components-module/component-module-6.svg",
    imgDarkSrc: "/components-module/component-module-6-dark.svg",
  },
];

export const ComponentsCard = () => {
  return (
    <section className="pt-6 sm:pt-8 md:pt-8 w-full max-w-[1240px]">
      <CardGrid />
    </section>
  );
};

const CardGrid = () => {
  const { isClient } = useClient();
  const { resolvedTheme } = useTheme();

  if (!isClient) {
    return <ComponentsCardFallback />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6 md:gap-6">
      {cardsData.map(({ id, imgDarkSrc, imgsrc, title, description }) => (
        <Card key={id} className="bg-card">
          <div className="relative w-full h-[125px] border-b">
            <Image
              src={resolvedTheme === "dark" ? imgDarkSrc : imgsrc}
              alt={`Image for ${title}`}
              fill
              className="object-contain bg-"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </div>
          <CardHeader className="px-6 pb-2 pt-3">
            <CardTitle className="text-foreground text-xl">{title}</CardTitle>
          </CardHeader>
          <CardContent className="px-6 pb-9">
            <p className="text-muted-foreground text-base">{description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

const ComponentsCardFallback = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6 md:gap-6">
      {[1, 2, 3, 4, 5, 6].map((num) => (
        <Card key={`skeleton-${num}`}>
          <Skeleton className="h-[125px] w-full" />
          <CardHeader className="pl-4">
            <Skeleton className="h-4 w-2/3" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-5 w-full mb-1" />
            <Skeleton className="h-4 w-5/6 pb-7" />
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
