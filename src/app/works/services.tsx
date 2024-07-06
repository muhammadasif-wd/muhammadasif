"use client";
import React from "react";
import {Card, CardFooter} from "@nextui-org/card";
import {useTheme} from "next-themes";
import Image from "next/image";
import {Button} from "@nextui-org/button";

import TextStroke from "@/hooks/text-stroke";

const Services = () => {
  const {theme} = useTheme();

  return (
    <section className="bg-primary text-light py-20">
      <div className="container">
        <article className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold md:mb-6 lg:text-3xl">
            My{" "}
            <TextStroke
              strokeColor={theme === "light" ? "#000000" : "#FFFFFF"}
              strokeWidth="0px"
              text="Services"
              textColor={theme === "light" ? "#FFFFFF" : "#000000"}
            />
          </h2>

          <p className="mx-auto max-w-screen-md text-center text-zinc-500 md:text-lg">
            Below are some key projects showcasing my skills and experience in Full-Stack. Each
            project reflects my dedication to innovation, problem-solving, and achieving exceptional
            results.
          </p>
        </article>

        <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
          <Card isFooterBlurred className="border-none min-h-72" radius="lg">
            <Image
              alt="services-image"
              className="object-cover"
              height={500}
              src="/images/works/works-projects.svg"
              width={500}
            />
            <CardFooter className="justify-between dark:bg-zinc-900 bg-light border-primary/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <p className="text-tiny font-bold text-primary dark:text-light">Frontend Design</p>
              <Button
                className="text-tiny text-primary dark:text-light bg-primary/20"
                color="default"
                radius="lg"
                size="sm"
                variant="flat"
              >
                Notify me
              </Button>
            </CardFooter>
          </Card>
          <Card isFooterBlurred className="border-none min-h-72" radius="lg">
            <Image
              alt="services-image"
              className="object-cover"
              height={500}
              src="/images/works/works-projects.svg"
              width={500}
            />
            <CardFooter className="justify-between dark:bg-zinc-900 bg-light border-primary/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <p className="text-tiny font-bold text-primary dark:text-light">Backend Service</p>
              <Button
                className="text-tiny text-primary dark:text-light bg-primary/20"
                color="default"
                radius="lg"
                size="sm"
                variant="flat"
              >
                Notify me
              </Button>
            </CardFooter>
          </Card>
          <Card isFooterBlurred className="border-none min-h-72" radius="lg">
            <Image
              alt="services-image"
              className="object-cover"
              height={500}
              src="/images/works/works-projects.svg"
              width={500}
            />
            <CardFooter className="justify-between dark:bg-zinc-900 bg-light border-primary/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <p className="text-tiny font-bold text-primary dark:text-light">Full Stack Project</p>
              <Button
                className="text-tiny text-primary dark:text-light bg-primary/20"
                color="default"
                radius="lg"
                size="sm"
                variant="flat"
              >
                Notify me
              </Button>
            </CardFooter>
          </Card>
          <Card isFooterBlurred className="border-none min-h-72" radius="lg">
            <Image
              alt="services-image"
              className="object-cover"
              height={500}
              src="/images/works/works-projects.svg"
              width={500}
            />
            <CardFooter className="justify-between dark:bg-zinc-900 bg-light border-primary/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <p className="text-tiny font-bold text-primary dark:text-light">Branding Projects</p>
              <Button
                className="text-tiny text-primary dark:text-light bg-primary/20"
                color="default"
                radius="lg"
                size="sm"
                variant="flat"
              >
                Notify me
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
