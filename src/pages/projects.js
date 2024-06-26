import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icon";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import customizeShopperBD from "../../public/images/projects/customize-shopper-bd-muhammadasif.png";
import mechanismTrade from "../../public/images/projects/mechanism-trade-muhammadasif.png";
import homeZ24 from "../../public/images/projects/home-z-24-muhammadasif.png";
import thinkyStorm from "../../public/images/projects/thinkystorm-muhammadasif.png";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FarmerImage = motion(Image);

const FeaturedProject = ({
  type,
  title,
  techStack,
  summary,
  img,
  link,
  github,
}) => {
  const [seeMore, setSeeMore] = useState(true);

  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light relative rounded-br-2xl lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FarmerImage
          src={img}
          alt={title}
          loading="eager"
          className="w-full h-80 object-cover object-center border-2 rounded-lg dark:border-primaryDark border-darkColor"
          priority
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="font-medium text-dark dark:text-light sm:text-sm">
          {techStack}
        </p>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {
            <>
              {seeMore ? summary : `${summary.slice(0, 210)}...`}
              {seeMore ? (
                <button
                  onClick={() => setSeeMore(false)}
                  className="ml-3 text-primary dark:text-primaryDark"
                >
                  hide
                </button>
              ) : (
                <button
                  onClick={() => setSeeMore(true)}
                  className="ml-3 text-primary dark:text-primaryDark"
                >
                  see more
                </button>
              )}
            </>
          }
        </p>
        <div className="mt-2 flex items-center ">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, techStack, summary, img, link, github }) => {
  const [seeMore, setSeeMore] = useState(false);
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FarmerImage
          src={img}
          alt={title}
          priority
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw"
          loading="eager"
          className="w-full h-80 object-cover object-center border-2 rounded-lg dark:border-primaryDark border-darkColor"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>
        <p className="font-medium text-dark dark:text-light sm:text-sm">
          {techStack}
        </p>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {
            <>
              {seeMore ? summary : `${summary.slice(0, 210)}...`}
              {seeMore ? (
                <button
                  onClick={() => setSeeMore(false)}
                  className="ml-3 text-primary dark:text-primaryDark"
                >
                  hide
                </button>
              ) : (
                <button
                  onClick={() => setSeeMore(true)}
                  className="ml-3 text-primary dark:text-primaryDark"
                >
                  see more
                </button>
              )}
            </>
          }
        </p>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

function projects() {
  return (
    <>
      <Head>
        <title>Muhammad A SI F | Projects</title>
        <meta name="title" content="Muhammad A SI F | Projects" />
        <meta
          name="description"
          content="Elevate your online presence with our cutting-edge SEO projects. From crafting captivating and responsive resume websites to optimizing marketplaces for mechanical components, we specialize in boosting visibility and enhancing user experiences. Explore our successes in powering leading manufacturers and seamlessly connecting buyers and sellers. Discover the impact of our SEO strategies on product quality, customer service, and secure transactions. Your journey to a dream home begins with our expertly designed Home Builder and Home Sale websites—effortless, user-friendly, and visually stunning. Explore the art of digital transformation with our SEO projects."
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://muhammadasif.vercel.app/projects"
        />
        <meta property="og:title" content="Muhammad A SI F | Projects" />
        <meta
          property="og:description"
          content="Elevate your online presence with our cutting-edge SEO projects. From crafting captivating and responsive resume websites to optimizing marketplaces for mechanical components, we specialize in boosting visibility and enhancing user experiences. Explore our successes in powering leading manufacturers and seamlessly connecting buyers and sellers. Discover the impact of our SEO strategies on product quality, customer service, and secure transactions. Your journey to a dream home begins with our expertly designed Home Builder and Home Sale websites—effortless, user-friendly, and visually stunning. Explore the art of digital transformation with our SEO projects."
        />
        <meta
          property="og:image"
          content="https://muhammadasif.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmuhammadasif_profetional_image.b1dbfd92.png&w=640&q=75"
        />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-32 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text={"Imagination Trumps Knowledge!"}
            className="mb-32 lg:!text-7xl sm:!mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title={"Customize Shopper BD"}
                img={customizeShopperBD}
                techStack={`React.js, Silk Slider, Responsive Tailwind CSS, AOS Animation, Node.js, Express, MongoDB`}
                summary={`Contributed to Customize Shopper BD, a leading manufacturer of premium custom products distributed nationwide in Bangladesh. Ensured product quality and provided exceptional customer service while facilitating secure transactions through Baksh Payment Gateway.`}
                link={"https://customizeshopperbd.com/"}
                github={
                  "https://github.com/muhammadasif-wd/customize-shopper-bd"
                }
                type={"E-commerce website"}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title={"Mechanism Trade"}
                img={mechanismTrade}
                techStack={`Tech Stack: React.js, Swiper.js, Tailwind CSS, Responsive Design`}
                summary={`A user-friendly online marketplace connecting buyers and sellers of mechanical components and machinery. Features include product listings, secure messaging, verified seller profiles, and responsive design.`}
                link={"https://mechanismtrade.netlify.app/"}
                github={"https://github.com/muhammadasif-wd/mechanismtrade"}
                type={"Mechanism Trade Project"}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title={"Home Z-24"}
                img={homeZ24}
                techStack={`Tech Stack: React.js, Swiper.js, Tailwind CSS, Responsive Design`}
                summary={`Explore our Home Builder and Home Sale website for a seamless journey to your dream home. Discover beautifully crafted homes, expertly designed and available for sale. Experience a smooth, user-friendly interface designed to help you find your perfect home effortlessly`}
                link={"https://homez-24.netlify.app/"}
                github={"https://github.com/muhammadasif-wd/homez-24/"}
                type={"Home builder and Home sale"}
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title={"Thinkystorm"}
                img={thinkyStorm}
                techStack={`Tech Stack: React.js, Swiper.js, Tailwind CSS, SMTP, Node.js, Express`}
                summary={`Elevate your online presence with our captivating and responsive Resume Website. Powered by cutting-edge tech, it offers a seamless user experience and effortless email communication.`}
                link={"https://www.thinkystorm.com/"}
                github={"https://github.com/muhammadasif-wd/thinkystorm"}
                type={"Branding portfolio website"}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}

export default projects;
