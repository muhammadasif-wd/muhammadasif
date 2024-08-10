import React from "react";
import Image from "next/image";

import {skills} from "@/assets/api/skills";

const Skills = () => {
  return (
    <div>
      <article>
        <h1 className="text-4xl leading-relaxed text-center">
          My <span className="font-extrabold">Skills</span>
        </h1>
      </article>
      <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3 md:gap-14 mt-10">
        {skills.map(({img, name}, index) => (
          <div
            key={index}
            className="border-2 rounded border-primary dark:border-zinc-500 p-6 dark:hover:bg-light hover:bg-primary dark:hover:text-primary hover:text-light duration-300 ease-in-out"
          >
            <Image
              alt={name + img}
              className="w-14 h-14 bg-light p-1 my-auto mx-auto"
              height={56}
              src={img}
              width={56}
            />
            <p className="text-center pt-5"> {name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
