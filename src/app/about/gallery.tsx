"use client";
import React from "react";
import Image from "next/image";
import {useTheme} from "next-themes";
import {Button} from "@nextui-org/button";
import Link from "next/link";

import TextStroke from "@/hooks/text-stroke";
const Gallery = () => {
  const {theme} = useTheme();

  return (
    <div className="container mx-auto">
      <div className="grid xl:grid-cols-2 gap-10 place-content-center place-items-start">
        <Image
          alt="about-events"
          className="xl:h-[500px] h-fit w-full 2xl:order-1 xl:order-2 order-1"
          height={500}
          src={"/images/about/about-gallery.svg"}
          width={800}
        />
        <div className="2xl:order-2 xl:order-1 order-2">
          <article>
            <h1 className="text-4xl leading-relaxed text-light">
              My{" "}
              <span className="font-extrabold">
                <TextStroke
                  strokeColor={theme === "light" ? "#000000" : "#FFFFFF"}
                  strokeWidth="0px"
                  text="Gallery"
                  textColor={theme === "light" ? "#FFFFFF" : "#000000"}
                />
              </span>
            </h1>
            <article className="space-y-5 mt-10 leading-relaxed text-zinc-500">
              <p>{`Dive into my gallery, a vibrant showcase of my passion for photography! As an avid explorer, I seek to capture the beauty of the technical background, finding inspiration in every moment.`}</p>
              <p>{`In this collection, you’ll find a variety of images, from stunning landscapes to candid portraits, each telling a unique story. My technical background enhances my approach to photography, allowing me to experiment with innovative techniques.`}</p>
              <p>{`I invite you to explore my gallery and immerse yourself in my visual stories. Each image reflects my dedication to capturing the world and the intersection of art and technology. Enjoy your journey!`}</p>
            </article>
          </article>
          <Button
            as={Link}
            className="font-bold bg-light text-primary mt-5"
            href="/about/gallery"
            radius="sm"
            size="lg"
          >
            Get the Gallery
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
