"use client";
import React from "react";
import Image from "next/image";
import {useTheme} from "next-themes";
import {Button} from "@nextui-org/button";

import TextStroke from "@/hooks/text-stroke";
const Events = () => {
  const {theme} = useTheme();

  return (
    <div className="grid xl:grid-cols-2 gap-10 place-content-center place-items-start">
      <div className="xl:order-1 order-2">
        <article>
          <h1 className="text-4xl leading-relaxed">
            My{" "}
            <span className="font-extrabold">
              Events &{" "}
              <TextStroke
                strokeColor={theme === "light" ? "#000000" : "#FFFFFF"}
                strokeWidth="0px"
                text="Conferences"
                textColor={theme === "light" ? "#FFFFFF" : "#000000"}
              />
            </span>
          </h1>
          <article className="space-y-5 mt-10 leading-relaxed text-zinc-500">
            <p>{`I'm passionate about staying at the forefront of industry advancements, which is why I actively participate in various events and conferences. Recently, I've had the opportunity to attend several insightful gatherings`}</p>
            <p>{`I participated in discussions on emerging trends and their implications for the future of software development. Another event focused on best practices in project management and team collaboration, which resonated deeply with my approach to work. Additionally, I attended a conference that explored innovative strategies for fostering creativity and innovation within tech teams.`}</p>
            <p>{`These experiences have not only broadened my perspective but also energized my commitment to continuous learning and professional growth.`}</p>
          </article>
        </article>
        <Button
          className="font-bold bg-primary text-light dark:bg-light dark:text-primary mt-5"
          radius="sm"
          size="lg"
        >
          Events & Conferences
        </Button>
      </div>
      <Image
        alt="about-events"
        className="xl:h-[500px] h-fit w-full -z-50 xl:order-2 order-1"
        height={500}
        src={"/images/about/about-events.svg"}
        width={800}
      />
    </div>
  );
};

export default Events;
