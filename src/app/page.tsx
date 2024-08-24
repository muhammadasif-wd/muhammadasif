import React from "react";

import Banner from "@/components/home/banner";
import Skills from "@/components/about/skills";
import Experience from "@/components/about/experience";
import Testimonial from "@/components/home/testimonial";
import Contact from "@/components/home/contact";

async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/social`, {
    method: "GET",
    headers: {
      "x-api-key": process.env.NEXT_PUBLIC_X_API_KEY || "",
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
const page = async () => {
  let bannerData;
  let bannerError;
  let bannerLoading = true;

  try {
    bannerData = await getData();
  } catch (err) {
    bannerError = (err as Error).message;
  } finally {
    bannerLoading = false;
  }

  return (
    <div className="space-y-20">
      <div className="container space-y-20">
        <Banner
          bannerData={bannerData?.data}
          bannerError={bannerError}
          bannerLoading={bannerLoading}
        />
        <Skills />
      </div>
      <div className="bg-primary py-20">
        <div className="container">
          <Experience />
        </div>
      </div>
      <div className="container space-y-20">
        <Testimonial />
        <Contact />
      </div>
    </div>
  );
};

export default page;
