import React from "react";

import Banner from "@/components/home/banner";
import Skills from "@/components/about/skills";
import Experience from "@/components/about/experience";

const page = () => {
  return (
    <div className="space-y-20">
      <div className="container space-y-20">
        <Banner />
        <Skills />
      </div>
      <div className="bg-black py-20">
        <div className="container">
          <Experience />
        </div>
      </div>
    </div>
  );
};

export default page;
