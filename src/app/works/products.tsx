"use client";
import React from "react";
import {Card, CardBody, CardFooter} from "@nextui-org/card";
import {useTheme} from "next-themes";
import Image from "next/image";
import Link from "next/link";

import TextStroke from "@/hooks/text-stroke";

const Products = () => {
  const {theme} = useTheme();

  return (
    <div className="container">
      <article className="mb-10 md:mb-16">
        <h2 className="mb-4 text-center text-2xl font-bold text-zinc-800 md:mb-6 lg:text-3xl">
          My{" "}
          <TextStroke
            strokeColor={theme === "light" ? "#FFFFFF" : "#000000"}
            strokeWidth="0px"
            text="Products"
            textColor={theme === "light" ? "#000000" : "#FFFFFF"}
          />
        </h2>

        <p className="mx-auto max-w-screen-md text-center text-zinc-500 md:text-lg">
          Below are some products that I have developed, showcasing my skills and experience in
          Full-Stack. Each product reflects my commitment to innovation, quality, and delivering
          value to users.
        </p>
      </article>

      <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
        <Card>
          <CardBody
            as={Link}
            className="group relative mb-2 block min-h-80 min-w-96 overflow-hidden"
            href="/works/project"
          >
            <Image
              alt="muhammadasif-works-products"
              className="h-full w-full object-center transition duration-200 group-hover:scale-110"
              height={500}
              loading="lazy"
              src="/images/works/works-projects.svg"
              width={500}
            />

            <div className="absolute bottom-2 left-0 flex gap-2">
              <span className="rounded-r-lg bg-red-500 px-3 py-1.5 text-sm font-semibold uppercase tracking-wider text-white">
                -50%
              </span>
              <span className="rounded-lg bg-white px-3 py-1.5 text-sm font-bold uppercase tracking-wider text-zinc-800">
                New
              </span>
            </div>
          </CardBody>
          <CardFooter>
            <div className="flex items-start justify-between gap-2 px-2 w-full">
              <div className="flex flex-col">
                <Link
                  className="text-lg font-bold text-zinc-800 transition duration-100 hover:text-zinc-500 lg:text-xl"
                  href="#"
                >
                  Fancy Outfit
                </Link>
                <span className="text-zinc-500">by Fancy Brand</span>
              </div>

              <div className="flex flex-col items-end">
                <span className="font-bold text-zinc-600 lg:text-lg">$19.99</span>
                <span className="text-sm text-red-500 line-through">$39.99</span>
              </div>
            </div>
          </CardFooter>
        </Card>
        <Card>
          <CardBody
            as={Link}
            className="group relative mb-2 block min-h-80 min-w-96 overflow-hidden"
            href="/works/project"
          >
            <Image
              alt="muhammadasif-works-products"
              className="h-full w-full object-center transition duration-200 group-hover:scale-110"
              height={500}
              loading="lazy"
              src="/images/works/works-projects.svg"
              width={500}
            />

            <div className="absolute bottom-2 left-0 flex gap-2">
              <span className="rounded-r-lg bg-red-500 px-3 py-1.5 text-sm font-semibold uppercase tracking-wider text-white">
                -50%
              </span>
              <span className="rounded-lg bg-white px-3 py-1.5 text-sm font-bold uppercase tracking-wider text-zinc-800">
                New
              </span>
            </div>
          </CardBody>
          <CardFooter>
            <div className="flex items-start justify-between gap-2 px-2 w-full">
              <div className="flex flex-col">
                <Link
                  className="text-lg font-bold text-zinc-800 transition duration-100 hover:text-zinc-500 lg:text-xl"
                  href="#"
                >
                  Fancy Outfit
                </Link>
                <span className="text-zinc-500">by Fancy Brand</span>
              </div>

              <div className="flex flex-col items-end">
                <span className="font-bold text-zinc-600 lg:text-lg">$19.99</span>
                <span className="text-sm text-red-500 line-through">$39.99</span>
              </div>
            </div>
          </CardFooter>
        </Card>
        <Card>
          <CardBody
            as={Link}
            className="group relative mb-2 block min-h-80 min-w-96 overflow-hidden"
            href="/works/project"
          >
            <Image
              alt="muhammadasif-works-products"
              className="h-full w-full object-center transition duration-200 group-hover:scale-110"
              height={500}
              loading="lazy"
              src="/images/works/works-projects.svg"
              width={500}
            />

            <div className="absolute bottom-2 left-0 flex gap-2">
              <span className="rounded-r-lg bg-red-500 px-3 py-1.5 text-sm font-semibold uppercase tracking-wider text-white">
                -50%
              </span>
              <span className="rounded-lg bg-white px-3 py-1.5 text-sm font-bold uppercase tracking-wider text-zinc-800">
                New
              </span>
            </div>
          </CardBody>
          <CardFooter>
            <div className="flex items-start justify-between gap-2 px-2 w-full">
              <div className="flex flex-col">
                <Link
                  className="text-lg font-bold text-zinc-800 transition duration-100 hover:text-zinc-500 lg:text-xl"
                  href="#"
                >
                  Fancy Outfit
                </Link>
                <span className="text-zinc-500">by Fancy Brand</span>
              </div>

              <div className="flex flex-col items-end">
                <span className="font-bold text-zinc-600 lg:text-lg">$19.99</span>
                <span className="text-sm text-red-500 line-through">$39.99</span>
              </div>
            </div>
          </CardFooter>
        </Card>
        <Card>
          <CardBody
            as={Link}
            className="group relative mb-2 block min-h-80 min-w-96 overflow-hidden"
            href="/works/project"
          >
            <Image
              alt="muhammadasif-works-products"
              className="h-full w-full object-center transition duration-200 group-hover:scale-110"
              height={500}
              loading="lazy"
              src="/images/works/works-projects.svg"
              width={500}
            />

            <div className="absolute bottom-2 left-0 flex gap-2">
              <span className="rounded-r-lg bg-red-500 px-3 py-1.5 text-sm font-semibold uppercase tracking-wider text-white">
                -50%
              </span>
              <span className="rounded-lg bg-white px-3 py-1.5 text-sm font-bold uppercase tracking-wider text-zinc-800">
                New
              </span>
            </div>
          </CardBody>
          <CardFooter>
            <div className="flex items-start justify-between gap-2 px-2 w-full">
              <div className="flex flex-col">
                <Link
                  className="text-lg font-bold text-zinc-800 transition duration-100 hover:text-zinc-500 lg:text-xl"
                  href="#"
                >
                  Fancy Outfit
                </Link>
                <span className="text-zinc-500">by Fancy Brand</span>
              </div>

              <div className="flex flex-col items-end">
                <span className="font-bold text-zinc-600 lg:text-lg">$19.99</span>
                <span className="text-sm text-red-500 line-through">$39.99</span>
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Products;
