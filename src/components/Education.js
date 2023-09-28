import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
import Head from "next/head";

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
        <p className="w-full md:text-sm mt-3">{info}</p>
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
        <title>Muhammad A SI F</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="I'm Muhammad Asif, a highly skilled MERN stack developer with expertise in MongoDB, Mongoose, Express, React, Next.js, Typescript, and Node.js. I bring a commitment to design excellence and user-centered thinking to every project. Let's work together!" />
        <meta name="keywords" content="Muhammad Asif, MERN stack developer, MongoDB, Mongoose, Express, React, Next.js, Typescript, Node.js, web development, mobile app development, user-centered design" />
        <meta name="author" content="Muhammad Asif" />
        <meta name="keywords" content="Muhammad Asif, muhammadasif-wd, muhammadasif.wd, Muhammad, Asif, MERN stack developer, MongoDB, Mongoose, Express, React, Next.js, Typescript, Node.js, web development, mobile app development, user-centered design" />
        <meta name="keywords" content="Muhammad Asif, muhammadasif-wd, web development, MERN stack developer, MongoDB, Mongoose, Express, React, Next.js, Typescript, Node.js, mobile app development, user-centered design, SEO strategy, Google ranking, first page, on-page optimization, page speed, backlinks, local SEO, schema markup, user experience, analytics, social signals, responsive design, quality content" />
        <meta name="keywords" content="Muhammad Asif portfolio, web developer, MERN stack, MongoDB, Express, React, Next.js, Typescript, Node.js, mobile app development, user-centered design, SEO strategy, Google ranking, on-page optimization, page speed, backlinks, local SEO, schema markup, user experience, analytics, social signals, responsive design, quality content, keyword research" />
        <meta name="description" content="Muhammad Asif's education at Programming Hero was an enriching journey in web development. From November 2021 to July 2022, he rapidly progressed from a beginner to mastering the fundamentals and diving into the world of MERN Stack development. Through hands-on projects and expert guidance, he acquired essential skills and knowledge, establishing a robust foundation for his career as a web developer." />
        <meta name="keywords" content="Muhammad Asif, Programming Hero, web development education, MERN Stack development, hands-on projects, web development skills, beginner to advanced" />
        <meta name="description" content="Muhammad Asif's ongoing advanced web development journey at Programming Hero is focused on mastering various cutting-edge technologies. Starting in April 2023, he is committed to enhancing his web development career by learning and mastering technologies such as Typescript, Mongoose, Redux, Next.js, GraphQL, PostgreSQL, AWS, Docker, Unit Testing, and more. Join him on this journey of continuous learning and professional growth." />
        <meta name="keywords" content="Muhammad Asif, Programming Hero, advanced web development, Typescript, Mongoose, Redux, Next.js, GraphQL, PostgreSQL, AWS, Docker, Unit Testing, continuous learning, professional growth, web development career" />
        <meta name="description" content="Muhammad Asif is currently pursuing his Higher Secondary School Certificate (HSC) at Khilgaon Model College. His HSC program began in January 2023 and is ongoing. Khilgaon Model College (KMUC), inaugurated on 24 August 1970 by Father of the Nation Bangabandhu Sheikh Mujibur Rahman, provides a charming environment and supportive teachers to help him achieve his goal of passing HSC." />
        <meta name="keywords" content="Muhammad Asif, Higher Secondary School Certificate, HSC, Khilgaon Model College, education, science department, academic pursuit, Bangabandhu Sheikh Mujibur Rahman" />
        <meta name="description" content="Muhammad Asif's educational and professional journey includes web development studies at Programming Hero, advanced web development training, and ongoing Higher Secondary School Certificate (HSC) studies at Khilgaon Model College. Discover his commitment to learning web technologies like MERN Stack, Typescript, Mongoose, Redux, Next.js, GraphQL, PostgreSQL, AWS, Docker, Unit Testing, and more. Additionally, he is working towards achieving success in his HSC studies with the science department. Join him on this journey of continuous learning, professional growth, and academic excellence." />
        <meta name="keywords" content="Muhammad Asif, web development, Programming Hero, MERN Stack, Typescript, Mongoose, Redux, Next.js, GraphQL, PostgreSQL, AWS, Docker, Unit Testing, advanced web development, HSC, Khilgaon Model College, science department, continuous learning, professional growth, academic excellence" />
      </Head>
      <div>
        <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-1">
          Education
        </h2>

        <div ref={ref} className="w-[75%] mx-auto mb-32 relative lg:w-[90%] md:w-full">
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
          />
          <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
            <Details
              type={"Web Development"}
              time={"November 2021-July 2022"}
              place={"Programming Hero"}
              info={
                `At Programming Hero, I embarked on an enriching learning journey in web development. Starting as a beginner, I rapidly progressed through the fundamentals and delved into the world of MERN Stack development. Through hands-on projects and guidance, I acquired essential skills and knowledge, setting a strong foundation for my career as a web developer.`
              }
            />
            <Details
              type={"Advanced Web Development"}
              time={"2023-April - Running"}
              place={"Programming Hero"}
              info={
                `At Programming Hero, I embarked on an enriching advanced learning journey in web development. I am starting advanced development for the Web Developer superpower in you. I am finishing to Boost my web development Career by Learning and mastering Typescript, Mongoose, Redux, Next.js, GraphQL, PostgreSQL, AWS, Docker, Unit Testing, and many more.`
              }
            />
            <Details
              type={"Higher Secondary School Certificate (HSC)"}
              time={"January 2023 - Running"}
              place={"Khilgaon Model College"}
              info={
                `Khilgaon Model College (KMUC) was inaugurated on 24 August 1970 by Father of the Nation Bangabandhu Sheikh Mujibur Rahman. I am doing HSC here with the science department. I am trying to pass my HSC in a charming environment and good behavior of teachers.`
              }
            />
          </ul>
        </div>
      </div>
    </main>

  );
};

export default Education;
