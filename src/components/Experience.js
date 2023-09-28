import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
import Head from "next/head";

const Details = ({ position, company, companyLink, time, address, work }) => {
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
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position} &nbsp;{" "}
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="mt-3 w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};
const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <main>
      <Head>
        <meta name="description" content="I'm Muhammad Asif, a highly skilled MERN stack developer with expertise in MongoDB, Mongoose, Express, React, Next.js, Typescript, and Node.js. I bring a commitment to design excellence and user-centered thinking to every project. Let's work together!" />
        <meta name="keywords" content="Muhammad Asif, MERN stack developer, MongoDB, Mongoose, Express, React, Next.js, Typescript, Node.js, web development, mobile app development, user-centered design" />
        <meta name="author" content="Muhammad Asif" />
        <meta name="keywords" content="Muhammad Asif, muhammadasif-wd, muhammadasif.wd, Muhammad, Asif, MERN stack developer, MongoDB, Mongoose, Express, React, Next.js, Typescript, Node.js, web development, mobile app development, user-centered design" />
        <meta name="keywords" content="Muhammad Asif, muhammadasif-wd, web development, MERN stack developer, MongoDB, Mongoose, Express, React, Next.js, Typescript, Node.js, mobile app development, user-centered design, SEO strategy, Google ranking, first page, on-page optimization, page speed, backlinks, local SEO, schema markup, user experience, analytics, social signals, responsive design, quality content" />
        <meta name="keywords" content="Muhammad Asif portfolio, web developer, MERN stack, MongoDB, Express, React, Next.js, Typescript, Node.js, mobile app development, user-centered design, SEO strategy, Google ranking, on-page optimization, page speed, backlinks, local SEO, schema markup, user experience, analytics, social signals, responsive design, quality content, keyword research" />
        <meta name="description" content="Muhammad Asif is a skilled Frontend Developer at Interlink Technologies Limited, based in Dhaka. He has been contributing to the team since May 2023, specializing in React, Redux, JavaScript, and Tailwind CSS. Muhammad excels in API integration, ensuring seamless data retrieval from RESTful APIs. His work emphasizes cross-browser compatibility and optimized performance to provide users with an exceptional online experience. Collaborating closely with backend developers, he bridges the gap between frontend interfaces and server-side functionality, ensuring smooth and efficient web applications." />
        <meta name="keywords" content="Muhammad Asif, Frontend Developer, Interlink Technologies Limited, web development, React, Redux, JavaScript, Tailwind CSS, API Integration, cross-browser compatibility, optimized performance, server-side functionality, web applications" />
        <meta name="description" content="Muhammad Asif served as a dedicated MERN Stack Developer at Thinky Storm, a dynamic tech company based in Dhaka. From November 2022 to November 2023, he contributed to the development and maintenance of full-stack web applications. Muhammad was responsible for designing and implementing APIs to facilitate seamless data exchange between the frontend and backend components. He demonstrated proficiency in MongoDB for database management, schema design, and data manipulation. His expertise in React, Redux, JavaScript, HTML, and CSS allowed him to craft responsive and user-friendly interfaces. Additionally, Muhammad deployed applications on cloud platforms, optimizing performance and scalability for enhanced user experiences." />
        <meta name="keywords" content="Muhammad Asif, MERN Stack Developer, Thinky Storm, web development, API design, MongoDB, React, Redux, JavaScript, HTML, CSS, cloud deployment, performance optimization, scalability, full-stack web applications" />

      </Head>
      <div>
        <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-32">
          Experience
        </h2>

        <div ref={ref} className="w-[75%] mx-auto mb-32 relative lg:w-[90%] md:w-full">
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
          />
          <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
            <Details
              position={"Frontend Developer"}
              company={"Interlink Technologies Limited"}
              companyLink={"https://www.intertechbd.com/"}
              time={"2023-May - Running"}
              address={"Dhaka 1000 (Beside Rupayan Trade Centre-Banglamotor)."}
              work={
                `Frontend Development: React, Redux, JavaScript, Tailwind CSS
              API Integration: Fetching and displaying data from RESTful APIs
              Ensured cross-browser compatibility and optimized performance for a seamless user experience.
              Worked closely with backend developers to connect frontend interfaces with server-side functionality.
              `
              }
            />
            <Details
              position={"MERN Stack Developer"}
              company={"Thinky Storm"}
              companyLink={"https://www.thinkystorm.com/"}
              time={"2022-November - 2023-November"}
              address={
                "Dhaka-1216, Pallabi, House-15, Road-2, Block-B, Section-12"
              }
              work={
                `Developed and maintained full-stack web applications using the MERN stack.
             Designed and implemented APIs for seamless data exchange between the frontend and backend.
             Utilized MongoDB for database management, schema design, and data manipulation.
             Created responsive and user-friendly interfaces using React, Redux, JavaScript, HTML, CSS
             Deployed applications on cloud platforms and optimized performance and scalability.
             `
              }
            />
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Experience;
