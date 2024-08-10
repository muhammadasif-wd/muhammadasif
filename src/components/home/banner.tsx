"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {Button} from "@nextui-org/button";
import {useTheme} from "next-themes";

import TextStroke from "@/hooks/text-stroke";
import {APISocial} from "@/assets/api/navigation";
import IconGithub from "@/assets/icons/github";
import IconLinkedin from "@/assets/icons/linkedin";
import {IconFacebook} from "@/assets/icons/facebook";
import {IconWhatsapp} from "@/assets/icons/whatsapp";

const Banner = () => {
  const {theme} = useTheme();

  return (
    <section className="grid lg:grid-cols-2 place-content-center lg:place-items-end place-items-center gap-y-10">
      <div className="lg:order-1 order-2">
        <article>
          <h1 className="text-4xl leading-relaxed">
            Hello I’am <span className="font-extrabold">Asif.</span>
          </h1>
        </article>
        <article>
          <h1 className="text-4xl font-extrabold leading-relaxed">
            Software{" "}
            <TextStroke
              strokeColor={theme === "light" ? "#000000" : "#FFFFFF"}
              strokeWidth="0px"
              text="Engineer"
              textColor={theme === "light" ? "#FFFFFF" : "#000000"}
            />
            <br />
          </h1>
          <h1 className="text-4xl leading-relaxed">
            Based In <span className="font-extrabold">Bangladesh</span>
          </h1>
        </article>
        <article className="mt-10">
          <p>
            {`As an experienced software engineer, I excel in converting innovative concepts into
          high-quality software solutions. With a dedication to excellence and a passion for
          technology, I encourage you to delve into my extensive portfolio, highlighting my skills
          in software architecture, programming, and problem-solving. Let's embark on a path to
          transform visionary ideas into tangible, cutting-edge software.`}
          </p>
        </article>
        <div className="flex gap-3 items-center font-bold mt-10">
          {APISocial.map(({icon, _id, url}) => (
            <Button
              key={_id}
              isIconOnly
              as={Link}
              className="border dark:text-light dark:hover:bg-white dark:hover:text-primary text-primary hover:bg-primary hover:text-light"
              href={url}
              radius="sm"
              size="lg"
              target="_blank"
              variant="bordered"
            >
              {icon === "github" && <IconGithub className="w-6 h-6" />}
              {icon === "linkedin" && <IconLinkedin className="w-6 h-6" />}
              {icon === "facebook" && <IconFacebook className="w-6 h-6" />}
              {icon === "whatsapp" && <IconWhatsapp className="w-6 h-6" />}
            </Button>
          ))}
        </div>
      </div>
      <div className="lg:order-2 order-1 flex justify-center">
        <Image
          alt="portfolio-banner-image"
          className="md:max-w-[575px] lg:min-w-[720px] xl:min-w-[889px] w-full mx-auto -z-50"
          height={596}
          src={"/images/home/home-banner.svg"}
          width={889}
        />
      </div>
    </section>
  );
};

export default Banner;
