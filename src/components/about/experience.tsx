import React from "react";
import Image from "next/image";
import Link from "next/link";

import {experience} from "@/assets/api/experience";

const Experience = () => {
  return (
    <div>
      <article>
        <h1 className="text-4xl leading-relaxed text-center text-light">
          My <span className="font-extrabold">Experience</span>
        </h1>
      </article>
      <div className="py-10">
        <article className="text-light space-y-8 ">
          {experience.map(({date, details, img, link, name}, index) => (
            <div
              key={name + index}
              className="hover:bg-zinc-800 hover:border-zinc-800 duration-300 ease-in-out border border-zinc-500 rounded-[10px] px-6 py-[30px]"
            >
              <div className="flex flex-wrap gap-y-5 justify-between items-center">
                <div className="flex items-center gap-7">
                  <Image
                    alt={name}
                    className="bg-light p-1 rounded"
                    height={32}
                    src={img}
                    width={32}
                  />
                  <Link href={link}>
                    <h2 className="text-xl font-bold">{name}</h2>
                  </Link>
                </div>
                <p className="text-zinc-300">{date}</p>
              </div>
              <p className="text-zinc-300 pt-7">{details}</p>
            </div>
          ))}
        </article>
      </div>
    </div>
  );
};

export default Experience;
