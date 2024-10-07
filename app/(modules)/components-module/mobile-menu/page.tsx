import React from "react";
import {
  Hero,
  UseCases,
  Anatomy,
  BestPractices,
} from "@/components/components-module/mobile-menu";

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
