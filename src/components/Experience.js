import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

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
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
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
              "Interlink Technologies Limited is a leading provider of innovative technology solutions to businesses across industries. Since its founding in 2013, the company has established a reputation for excellence in software development, web development, mobile application development, e-commerce solutions, and cloud-based solutions. Interlink Technologies Limited is headquartered in Dubai, United Arab Emirates, with additional offices in the United Kingdom and the Bangladesh."
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
              "Inspire and enable businesses to accelerate and bring ideas to life through technology and software development, maximizing the potential of all stakeholders – clients, partners, and employees.​ Our Values: - Passion​ - Curiosity​ - Integrity​ - Hunger​ - Deadline"
            }
          />
          <Details
            position={"Project Manager"}
            company={"Thinky Storm"}
            companyLink={"https://www.thinkystorm.com/"}
            time={"2023-January - 2023-May"}
            address={
              "Dhaka-1216, Pallabi, House-15, Road-2, Block-B, Section-12"
            }
            work={
              "Worked on a team responsible for developing new features for Thinkystorm. Managing all projects of think storm, optimizing their team, and solving team problems. Managed the whole team's GitHub and worked on the development"
            }
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
