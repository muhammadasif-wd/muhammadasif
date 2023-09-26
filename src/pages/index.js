import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Layout from "@/components/Layout";
import portfolio from "../../public/images/profile/muhammadasif_profetional_image.webp";
// import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icon";
import HireMe from "@/components/HireMe";
import TransitionEffect from "@/components/TransitionEffect";
import MessengerChatButton from "@/components/MessengerChatButton";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Muhammad A SI F</title>
        <meta
          name="description"
          content="I'm Muhammad Asif, a seasoned full-stack web developer specializing in web design, web development, and converting Figma designs to React and Next.js. Let's turn your vision into digital reality."
        />
        <meta
          name="keywords"
          content="Figma to React, PSD to React, PDF to React, JPG to React, WordPress to React, CMS to React, Performant Web, React Next, TypeScript Tailwind, MERN Stack, React Web Applications, Next.js Node.js"
        />
        <meta name="author" content="Muhammad Asif" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <TransitionEffect></TransitionEffect>
      <main className="font-mont flex items-center text-dark w-full dark:text-light">
        <Layout className="pt-16 md:p-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="mt-16 col-span-3 relative mx-auto h-max rounded-2xl border-2 border-solid border-dark/70 dark:bg-dark dark:border-light bg-light xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                loading="eager"
                src={portfolio}
                alt="muhammad asif"
                className="w-full my-auto max-h-96 rounded-xl drop-shadow-2xl"
                priority
                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center mt-10">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />

              <p className="my-4 text-lightColor dark:text-darkColor text-base font-medium md:text-sm sm:text-xs">
                As a seasoned full-stack web developer, I specialize in
                transforming visionary ideas into captivating online solutions.
                With a strong focus on craftsmanship and innovation, I invite
                you to explore my diverse portfolio of projects, showcasing my
                expertise in React.js and web development. Join me on this
                journey of turning dreams into digital reality.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href={"/Resume.pdf"}
                  target="_blank"
                  className="flex items-center transition-all duration-300 ease-in-out bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base"
                  download={true}
                >
                  Resume
                  <LinkArrow className={"w-6 ml-1"}></LinkArrow>
                </Link>
                <Link
                  href={"mailto:muhammadasif.wd@gmail.com"}
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe></HireMe>
        {/* <MessengerChatButton /> */}

        {/* <div className="absolute right-0 bottom-0 inline-block w-24 md:hidden">
          <Image src={lightBulb} alt="Light bulb" className="w-full h-auto" />
        </div> */}
      </main>
    </>
  );
}
