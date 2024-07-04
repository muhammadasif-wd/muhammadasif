import React from "react";

import Banner from "@/components/home/banner";
import Skills from "@/components/about/skills";

const page = () => {
  return (
    <div className="space-y-20">
      <Banner />
      <Skills />
    </div>
  );
};

export default page;
