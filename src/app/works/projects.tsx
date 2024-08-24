"use client";

import React from "react";
import {Button} from "@nextui-org/button";
import {Card, CardBody} from "@nextui-org/card";
import {useTheme} from "next-themes";
import Image from "next/image";
import Link from "next/link";

import {projects} from "@/assets/api/projects";
import {IconLink} from "@/assets/icons/link";
import TextStroke from "@/hooks/text-stroke";

const Projects = () => {
  const {theme} = useTheme();

  return (
    <div className="bg-primary py-20">
      <div className="container">
        <article className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-light md:mb-6 lg:text-3xl">
            My{" "}
            <TextStroke
              strokeColor={theme === "light" ? "#000000" : "#FFFFFF"}
              strokeWidth="0px"
              text="Projects"
              textColor={theme === "light" ? "#FFFFFF" : "#000000"}
            />
          </h2>

          <p className="mx-auto max-w-screen-md text-center text-zinc-500 md:text-lg">
            Below are some key projects showcasing my skills and experience in Full-Stack. Each
            project reflects my dedication to innovation, problem-solving, and achieving exceptional
            results.
          </p>
        </article>
        <section className="space-y-20">
          {projects.map(({details, img, link, name, serial}, index) => (
            <div
              key={index}
              className={`flex flex-col md:grid md:grid-cols-2 lg:gap-20 gap-5 place-items-center ${index % 2 === 1 ? "" : "flex-col-reverse md:grid-cols-2-reverse"}`}
            >
              <div className={`${index % 2 === 1 ? "" : "order-last"} space-y-5`}>
                <h1 className="text-4xl font-extrabold text-light leading-relaxed">{serial}</h1>
                <h1 className="text-3xl font-extrabold text-light leading-relaxed">
                  Crypto Screener Application
                </h1>
                <p className="text-zinc-500 leading-relaxed">{details}</p>
                <Button isIconOnly as={Link} href={link} radius="sm">
                  <IconLink height={20} width={20} />
                </Button>
              </div>
              <Card className="w-full bg-zinc-900 shadow-none">
                <CardBody>
                  <Image
                    alt={name}
                    className="h-[397px] w-[530px] mx-auto object-cover object-center"
                    height={530}
                    loading="lazy"
                    src={img}
                    width={397}
                  />
                </CardBody>
              </Card>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Projects;
