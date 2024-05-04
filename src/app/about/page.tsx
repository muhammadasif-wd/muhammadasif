"use client";
import {useTheme} from "next-themes";

import AboutSkill from "./about-skill";
import {about_tabs} from "./about-tabs";

import {SparklesCore} from "@/components/ui/sparkles";
import {Tabs} from "@/components/ui/tabs";

const About = () => {
  const {resolvedTheme} = useTheme();

  const particleColor = resolvedTheme === "dark" ? "#fff" : "#000";

  return (
    <section className="min-h-screen">
      <div className="h-80 w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
        <h1 className="md:text-3xl text-xl lg:text-4xl xl:text-5xl font-bold text-center dark:text-white text-dark relative z-20 lg:w-2/3 mb-3">
          First, solve the problem. Then, write the code.
        </h1>
        <div className="w-[40rem] h-40 relative">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-default to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-default to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-primary to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-primary to-transparent h-px w-1/4" />

          {/* Core component */}
          <SparklesCore
            background="transparent"
            className="w-full h-full"
            maxSize={1}
            minSize={0.4}
            particleColor={particleColor}
            particleDensity={1200}
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full dark:bg-black bg-white [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]" />
        </div>
      </div>
      <div className="min-h-screen lg:mb-0 md:mb-[10rem] mb-[48rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start">
        <Tabs tabs={about_tabs} />
      </div>
      <div>
        <AboutSkill />
      </div>
    </section>
  );
};

export default About;
