"use client";
import React from "react";
import {NextPage} from "next";

import AnimatedNumber from "@/hooks/animated-number";
import {TAchievement} from "@/types/achievements.type";

interface Props {
  data: TAchievement[];
}

const Achievements: NextPage<Props> = ({data}) => {
  return (
    <div className="text-light container">
      <article>
        <h1 className="text-4xl leading-relaxed text-center">
          My <span className="font-extrabold">Achievements</span>
        </h1>
        <p className="lg:w-2/3 mx-auto md:text-center text-zinc-500 mt-5">{`Throughout my career, I've consistently delivered high-quality solutions across diverse projects, ensuring client satisfaction and driving successful outcomes. My approach blends creativity with technical expertise, fostering innovative solutions that meet unique project requirements.`}</p>
      </article>
      <div className="mt-20 grid md:grid-cols-3 grid-cols-1 gap-5">
        {data.map(({name, value, id}: TAchievement) => {
          return (
            <div key={id} className="group">
              <div className="border border-zinc-500 p-10 rounded text-center group-hover:bg-light group-hover:text-primary min-h-48">
                <h1 className="font-extrabold flex justify-center items-center gap-3 text-4xl">
                  <AnimatedNumber duration={10} finalNumber={parseInt(value)} /> +
                </h1>
                <p className="font-semibold pt-5">{name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Achievements;
