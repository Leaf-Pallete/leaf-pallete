import {
  Anatomy,
  BestPractices,
  Hero,
  UseCases,
} from "@/components/components-module/mobile-menu";
import React from "react";

const MobileMenu = () => {
  return (
    <div className="flex flex-col gap-8">
      <Hero />
      <UseCases />
      <Anatomy />
      <BestPractices />
    </div>
  );
};

export default MobileMenu;
