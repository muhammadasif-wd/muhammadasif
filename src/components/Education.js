import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

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
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-1">
        Education
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            type={"Web Development Basic"}
            time={"November 2021-July 2022"}
            place={"Programming Hero"}
            info={
              "I started my career at Programming Hero doing basic web development. They showed me the way to start my web development career by starting MERN Stack and doing some projects. Which has played a very good role for me and the future."
            }
          />
          <Details
            type={"Web Development Advanced"}
            time={"2023-April - Running"}
            place={"Programming Hero"}
            info={
              "Taking this course to improve my web development. Here I am very happy to learn more about my web testing and web hosting advanced data fetching. Also given the opportunity to work with MongoDB database SQL database and project I learned to perfect my work."
            }
          />
          <Details
            type={"Higher Secondary School Certificate (HSC)"}
            time={"January 2023 - Running"}
            place={"Khilgaon Model College"}
            info={
              "Khilgaon Model College Khilgaon is a private college in Dhaka, Bangladesh. Khilgaon Model College was established in 1970 with the tireless efforts of eminent individuals fond of education in the Khilgaon area. "
            }
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
