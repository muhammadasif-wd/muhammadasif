import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "../../components/LiIcon";
import Head from "next/head";
import TransitionEffect from "@/components/TransitionEffect";
import CommonCard from "@/components/CommonCard";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg text-primary dark:text-primaryDark">
          {type}
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="w-full md:text-sm mt-3 dark:text-light/90 text-dark/90">
          {info}
        </p>
      </motion.div>
    </li>
  );
};
const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <main>
      <Head>
        <title>Muhammad A SI F | Education</title>
        <meta name="title" content="Muhammad A SI F | Education" />
        <meta
          name="description"
          content="Learning Journey: Web Development at Programming Hero (Nov '21 -
                Jul '22), ongoing Advanced Web Development, and pursuing Higher
                Secondary Certificate in Science at Khilgaon Model College."
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://muhammadasif.vercel.app/about/education"
        />
        <meta property="og:title" content="Muhammad A SI F | Education" />
        <meta
          property="og:description"
          content="Learning Journey: Web Development at Programming Hero (Nov '21 -
                Jul '22), ongoing Advanced Web Development, and pursuing Higher
                Secondary Certificate in Science at Khilgaon Model College."
        />
        <meta
          property="og:image"
          content="https://muhammadasif.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmuhammadasif_profetional_image.b1dbfd92.png&w=640&q=75"
        />
      </Head>
      <TransitionEffect />
      <div>
        <h2 className="font-bold text-8xl sm:my-10 my-16 w-full text-center md:text-6xl xs:text-4xl dark:text-light text-dark">
          Education
        </h2>
        <div
          ref={ref}
          className="w-[75%] mx-auto mb-32 sm:mb-10 relative lg:w-[90%] md:w-full"
        >
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
          />
          <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
            <Details
              type={"Web Development"}
              time={"November 2021-July 2022"}
              place={"Programming Hero"}
              info={`At Programming Hero, I embarked on an enriching learning journey in web development. Starting as a beginner, I rapidly progressed through the fundamentals and delved into the world of MERN Stack development. Through hands-on projects and guidance, I acquired essential skills and knowledge, setting a strong foundation for my career as a web developer.`}
            />
            <Details
              type={"Advanced Web Development"}
              time={"2023-April - Running"}
              place={"Programming Hero"}
              info={`At Programming Hero, I embarked on an enriching advanced learning journey in web development. I am starting advanced development for the Web Developer superpower in you. I am finishing to Boost my web development Career by Learning and mastering Typescript, Mongoose, Redux, Next.js, GraphQL, PostgreSQL, AWS, Docker, Unit Testing, and many more.`}
            />
            <Details
              type={"Higher Secondary School Certificate (HSC)"}
              time={"January 2023 - Running"}
              place={"Khilgaon Model College"}
              info={`Khilgaon Model College (KMUC) was inaugurated on 24 August 1970 by Father of the Nation Bangabandhu Sheikh Mujibur Rahman. I am doing HSC here with the science department. I am trying to pass my HSC in a charming environment and good behavior of teachers.`}
            />
          </ul>
        </div>
      </div>
      <div className="py-20 sm:py-5">
        <CommonCard />
      </div>
    </main>
  );
};

export default Education;
