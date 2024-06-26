import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import article1 from "../../public/images/articles/pagination component in reactjs.jpg";
import article2 from "../../public/images/articles/create loading screen in react js.jpg";
import { motion, useMotionValue } from "framer-motion";
import article3 from "../../public/images/articles/create modal component in react using react portals.png";
import article4 from "../../public/images/articles/form validation in reactjs using custom react hook.png";
import article5 from "../../public/images/articles/smooth scrolling in reactjs.png";
import article6 from "../../public/images/articles/todo list app built using react redux and framer motion.png";
import TransitionEffect from "@/components/TransitionEffect";

const FarmerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);
  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }
  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FarmerImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.3 } }}
        src={img}
        alt={title}
        ref={imgRef}
        className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden"
      />
    </Link>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light relative">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <FarmerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          priority
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-primary dark:text-primaryDark font-semibold">
        {time}
      </span>
    </li>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light sm:flex-col"
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
    >
      <MovingImg title={title} img={img} link={link} />
      <span className="text-primary dark:text-primaryDark font-semibold pl-4 sm:self-start sm:pl-0 xs:text-sm">
        {date}
      </span>
    </motion.li>
  );
};
const articles = () => {
  return (
    <>
      <Head>
        <title>Muhammad A SI F | Article</title>
        <meta name="muhammadasif article" content="Muhammad A si f Content" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-32 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text={"Words Can Change The World!"}
            className="mb-32 lg:!text-7xl sm:!mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            <FeaturedArticle
              title={
                "Build A Custom Pagination Component In Reactjs From Scratch"
              }
              summary={`Learn how to build a custom pagination component in ReactJS from scratch. 
             Follow this step-by-step guide to integrate Pagination component in your ReactJS project.`}
              time={"30 min read"}
              link={
                "https://www.freecodecamp.org/news/build-a-custom-pagination-component-in-react/"
              }
              img={article1}
            />
            <FeaturedArticle
              title={"Build A Loading Screen In Reactjs From Scratch"}
              summary={`Learn how to build a custom pagination component in ReactJS from scratch. 
             Follow this step-by-step guide to integrate Pagination component in your ReactJS project.`}
              time={"9 min read"}
              link={
                "https://dev.to/beginarjun/how-to-create-a-simple-loading-screen-in-react-1md6"
              }
              img={article2}
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            All Articles
          </h2>
          <ul>
            <Article
              title={
                "How to add a dynamic title on your React app"
              }
              date={"Jun 20, 2023  (5 min read)"}
              link={"https://dev.to/luispa/how-to-add-a-dynamic-title-on-your-react-app-1l7k"}
              img={article3}
            />
            <Article
              title={
                "Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              }
              date={"Jun 20, 2023  (3 min read)"}
              link={"https://medium.com/@davidarmah2022/form-validation-in-reactjs-building-a-reusable-custom-hook-for-inputs-and-error-handling-dcffdeebe72f"}
              img={article4}
            />
            <Article
              title={
                "Smooth Scrolling with React & Framer Motion"
              }
              date={"Dec 16, 2020 (10 min avr.)"}
              link={"https://dev.to/ironcladdev/smooth-scrolling-with-react-framer-motion-dih"}
              img={article5}
            />
            <Article
              title={
                "How to Build a Solid To-Do App with React"
              }
              date={"MARCH 2, 2021 (30 min avr.)"}
              link={"https://www.freecodecamp.org/news/create-a-solid-to-do-app-with-react/"}
              img={article6}
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default articles;
