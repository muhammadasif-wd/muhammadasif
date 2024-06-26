import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "../../components/LiIcon";
import Head from "next/head";
import TransitionEffect from "@/components/TransitionEffect";
import CommonCard from "@/components/CommonCard";

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
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg dark:text-light/90 text-dark/90">
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
        <p className="mt-3 w-full md:text-sm dark:text-light/90 text-dark/90">
          {work}
        </p>
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
        <title>Muhammad A SI F | Experience</title>
        <meta name="title" content="Muhammad A SI F | Experience" />
        <meta
          name="description"
          content="Proven track record in transforming ideas into high-quality,
                scalable web applications; excelling in problem-solving,
                innovative thinking, and consistently delivering projects on
                time and within budget."
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://muhammadasif.vercel.app/about/experience"
        />
        <meta property="og:title" content="Muhammad A SI F | Experience" />
        <meta
          property="og:description"
          content="Proven track record in transforming ideas into high-quality,
                scalable web applications; excelling in problem-solving,
                innovative thinking, and consistently delivering projects on
                time and within budget."
        />
        <meta
          property="og:image"
          content="https://muhammadasif.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmuhammadasif_profetional_image.b1dbfd92.png&w=640&q=75"
        />
      </Head>
      <TransitionEffect />
      <div className="my-16">
        <h2 className="font-bold text-8xl sm:my-10 my-16 w-full text-center md:text-6xl xs:text-4xl dark:text-light text-dark">
          Experience
        </h2>

        <div
          ref={ref}
          className="w-[75%] mx-auto relative lg:w-[90%] md:w-full"
        >
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
              work={`Frontend Development: React, Redux, JavaScript, Tailwind CSS
              API Integration: Fetching and displaying data from RESTful APIs
              Ensured cross-browser compatibility and optimized performance for a seamless user experience.
              Worked closely with backend developers to connect frontend interfaces with server-side functionality.
              `}
            />
            <Details
              position={"MERN Stack Developer"}
              company={"Thinky Storm"}
              companyLink={"https://www.thinkystorm.com/"}
              time={"2022-November - 2023-November"}
              address={
                "Dhaka-1216, Pallabi, House-15, Road-2, Block-B, Section-12"
              }
              work={`Developed and maintained full-stack web applications using the MERN stack.
             Designed and implemented APIs for seamless data exchange between the frontend and backend.
             Utilized MongoDB for database management, schema design, and data manipulation.
             Created responsive and user-friendly interfaces using React, Redux, JavaScript, HTML, CSS
             Deployed applications on cloud platforms and optimized performance and scalability.
             `}
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

export default Experience;
