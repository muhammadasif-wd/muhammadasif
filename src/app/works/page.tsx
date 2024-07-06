import React from "react";

import Projects from "./projects";
import Banner from "./banner";
import Products from "./products";
import Discount from "./discount";
import Services from "./services";

import NewsLatter from "@/components/news-latter";

const Works = () => {
  return (
    <div className="space-y-20">
      <Banner />
      <Projects />
      <Products />
      <Discount />
      <Services />
      <NewsLatter />
    </div>
  );
};

export default Works;
