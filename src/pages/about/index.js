import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";
import Link from "next/link";
import CommonCard from "@/components/CommonCard";

const AnimatedNumber = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const carousels_data = [
  {
    key: "me",
    title: "About Me",
    content:
      "I'm Muhammad Asif, a seasoned Full-Stack Developer specializing in the MERN stack. My journey in web development has been an exciting exploration of code, design, and problem-solving. With extensive expertise in various technologies, I bring a wealth of skills to every project. I'm passionate about crafting exceptional user experiences that seamlessly blend aesthetics with functionality. My dedication to innovation and learning drives me to stay at the forefront of web development trends, ensuring that I deliver cutting-edge solutions to my clients.\n\nAs a developer, I thrive on challenges and relish the opportunity to tackle complex problems. I have a track record of transforming ideas into high-quality, scalable web applications that exceed client expectations. My commitment to excellence is unwavering, and I take pride in consistently delivering projects on time and within budget. I'm not just a coder; I'm a digital problem solver, and I'm here to bring your ideas to life.\n\n",
  },
  {
    key: "frontend",
    title: "Frontend Mastery",
    content:
      "In my frontend toolkit, you'll find proficiency in HTML, CSS, Bootstrap, and the dynamic versatility of Tailwind CSS. I have a strong command of JavaScript and TypeScript, allowing me to build interactive and responsive interfaces with ease. I'm well-versed in popular frontend libraries and frameworks such as React, Next.js, Vue.js, and Redux. My approach to frontend development goes beyond visuals; it prioritizes intuitive and user-centric design principles. I believe that a well-crafted frontend is the key to engaging user experiences.\n\nUser interface design is an art form, and I take great care in crafting pixel-perfect layouts that not only look stunning but also function flawlessly across devices and browsers. Whether it's creating smooth animations, optimizing performance, or ensuring accessibility, I pay meticulous attention to every detail. I understand that the frontend is the face of your application, and I'm committed to making it shine.\n\n",
  },
  {
    key: "backend",
    title: "Backend Wizardry",
    content:
      "On the backend, I wield the power of Node.js and Express.js to create robust server-side applications. Crafting RESTful and GraphQL APIs is second nature to me, and I'm equally comfortable working with databases like MySQL, PostgreSQL, MongoDB, and other NoSQL variants. My expertise extends to server management and deployment, where I leverage tools such as Docker, Nginx, and AWS to ensure seamless functionality and scalability. I thrive on the challenge of architecting backend solutions that form the backbone of web applications, delivering both speed and security.\n\n",
  },
  {
    key: "problem",
    title: "Problem Solver Extraordinaire",
    content:
      "I take immense pride in my knack for solving complex problems and optimizing code for peak performance. Collaboration is at the heart of my approach, and I excel at effective communication and teamwork. Whether it's coordinating with designers to achieve pixel-perfect designs or collaborating with fellow developers to implement the latest features, I am committed to delivering outstanding results. My strong foundation in Git and Git workflows ensures smooth code collaboration and management, contributing to streamlined development processes.\n\nTroubleshooting and debugging are second nature to me, and I approach every challenge with a methodical and analytical mindset. I understand the importance of creating clean and maintainable code, and I adhere to best practices to ensure code quality and longevity. I'm not just a developer; I'm a problem solver extraordinaire.\n\n",
  },
  {
    key: "tools",
    title: "Tools and Methodologies",
    content:
      "I am well-versed in agile development methodologies and proficient in project management tools like Jira and Trello. Implementing CI/CD pipelines for automated testing and deployment is a standard practice in my workflow, guaranteeing the reliability and efficiency of the projects I undertake. I firmly believe that design transcends aesthetics. It's about creating digital solutions that solve real-world problems and provide users with seamless, enjoyable experiences. Whether it's a website, a mobile app, or any other digital product, I am dedicated to achieving design excellence and maintaining a user-centered approach. I am excited about the prospect of collaborating with you on your next project, leveraging my skills, passion, and dedication to deliver exceptional results. Let's bring your vision to life, one line of code at a time.\n\n",
  },
];

const about = () => {
  const [viewData, setViewData] = useState("me");

  return (
    <>
      <Head>
        <title>Muhammad A SI F | About</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="I'm Muhammad Asif, a highly skilled MERN stack developer with expertise in MongoDB, Mongoose, Express, React, Next.js, Typescript, and Node.js. I bring a commitment to design excellence and user-centered thinking to every project. Let's work together!"
        />
        <meta
          name="keywords"
          content="Muhammad Asif, MERN stack developer, MongoDB, Mongoose, Express, React, Next.js, Typescript, Node.js, web development, mobile app development, user-centered design"
        />

        <meta name="author" content="Muhammad Asif" />
        <meta
          name="keywords"
          content="Muhammad Asif, muhammadasif-wd, muhammadasif.wd, Muhammad, Asif, MERN stack developer, MongoDB, Mongoose, Express, React, Next.js, Typescript, Node.js, web development, mobile app development, user-centered design"
        />
        <meta
          name="keywords"
          content="Muhammad Asif, muhammadasif-wd, web development, MERN stack developer, MongoDB, Mongoose, Express, React, Next.js, Typescript, Node.js, mobile app development, user-centered design, SEO strategy, Google ranking, first page, on-page optimization, page speed, backlinks, local SEO, schema markup, user experience, analytics, social signals, responsive design, quality content"
        />
        <meta
          name="keywords"
          content="Muhammad Asif portfolio, web developer, MERN stack, MongoDB, Express, React, Next.js, Typescript, Node.js, mobile app development, user-centered design, SEO strategy, Google ranking, on-page optimization, page speed, backlinks, local SEO, schema markup, user experience, analytics, social signals, responsive design, quality content, keyword research"
        />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-10">
          <AnimatedText
            text={"Passion Fuels Purpose!"}
            className="lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          ></AnimatedText>
          <div className="my-16 w-fit flex flex-wrap gap-1 items-center bg-white/10 backdrop-blur-md p-1 rounded-xl dark:shadow dark:border-none shadow-md border">
            <button
              onClick={() => setViewData("me")}
              className={`w-fit p-2 hover:text-primaryDark duration-300 ${
                viewData === "me" && "text-primaryDark"
              }`}
            >
              About Me
            </button>
            <button
              onClick={() => setViewData("frontend")}
              className={`w-fit p-2 hover:text-primaryDark duration-300 ${
                viewData === "frontend" && "text-primaryDark"
              }`}
            >
              Frontend
            </button>
            <button
              onClick={() => setViewData("backend")}
              className={`w-fit p-2 hover:text-primaryDark duration-300 ${
                viewData === "backend" && "text-primaryDark"
              }`}
            >
              Backend
            </button>
            <button
              onClick={() => setViewData("problem")}
              className={`w-fit p-2 hover:text-primaryDark duration-300 ${
                viewData === "problem" && "text-primaryDark"
              }`}
            >
              Problem Solving
            </button>
            <button
              onClick={() => setViewData("tools")}
              className={`w-fit p-2 hover:text-primaryDark duration-300 ${
                viewData === "tools" && "text-primaryDark"
              }`}
            >
              Tools
            </button>
          </div>
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8 mb-32">
            <div className="col-span-6 flex flex-col items-start justify-start md:col-span-8 md:order-2 sm:col-span-8 font-medium">
              {carousels_data
                .filter((data) => data.key === viewData)
                .map(({ title, content }, index) => {
                  return (
                    <div className="mt-3" key={index}>
                      <h1 className="text-2xl font-bold">{title}</h1> <br />
                      <article className="font-medium leading-normal dark:text-darkColor text-justify">
                        {content}
                      </article>
                    </div>
                  );
                })}
            </div>
            <div className="col-span-2 flex gap-10 flex-col items-end justify-between md:col-span-8 md:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumber value={26}></AnimatedNumber>+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light xl:text-center md:text-lg sm:text-base xs:text-sm">
                  satisfied clients
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  {" "}
                  <AnimatedNumber value={43}></AnimatedNumber>+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light xl:text-center md:text-lg sm:text-base xs:text-sm">
                  projects completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumber value={2}></AnimatedNumber>+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light xl:text-center md:text-lg sm:text-base xs:text-sm">
                  years of Experience
                </h2>
              </div>
            </div>
          </div>
          <CommonCard />
        </Layout>
      </main>
    </>
  );
};

export default about;
