import Footer from "@/components/Footer";
import MessengerChat from "@/components/MessengerChat";
import NavBar from "@/components/NavBar";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { JetBrains_Mono } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const jetBrain = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [mode, setMode] = useState();
  useEffect(() => {
    let theme = window.localStorage.getItem("theme");
    setMode(theme);
  }, []);
  const page_id = process.env.SECRET_MESSENGER_PAGE_ID
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="I'm Muhammad Asif, a seasoned full-stack web developer specializing in web design, web development, and converting Figma designs to React and Next.js. Let's turn your vision into digital reality." />
        <meta name="keywords" content="Figma to React, PSD to React, PDF to React, JPG to React, WordPress to React, CMS to React, Performant Web, React Next, TypeScript Tailwind, MERN Stack, React Web Applications, Next.js Node.js" />
        <meta name="author" content="Muhammad Asif" />
        <meta name="keywords" content="Muhammad Asif, muhammadasif-wd, muhammadasif.wd, Muhammad, Asif, MERN stack developer, MongoDB, Mongoose, Express, React, Next.js, Typescript, Node.js, web development, mobile app development, user-centered design" />
        <meta name="keywords" content="Muhammad Asif, muhammadasif-wd, web development, MERN stack developer, MongoDB, Mongoose, Express, React, Next.js, Typescript, Node.js, mobile app development, user-centered design, SEO strategy, Google ranking, first page, on-page optimization, page speed, backlinks, local SEO, schema markup, user experience, analytics, social signals, responsive design, quality content" />
        <meta name="keywords" content="Muhammad Asif portfolio, web developer, MERN stack, MongoDB, Express, React, Next.js, Typescript, Node.js, mobile app development, user-centered design, SEO strategy, Google ranking, on-page optimization, page speed, backlinks, local SEO, schema markup, user experience, analytics, social signals, responsive design, quality content, keyword research" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main
        className={`${jetBrain.variable} ${mode === "dark" ? "background_main_dark" : "background_main"
          } font-mont w-full min-h-screen`}
      >
        <NavBar />
        <AnimatePresence mode="wait">
          <Component key={router.asPath} {...pageProps} />
          <MessengerChat
            pageId={page_id}
          />
        </AnimatePresence>
        <Footer />
      </main>
    </>
  );
}
