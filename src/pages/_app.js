import Footer from "@/components/Footer";
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
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
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
      <main
        className={`${jetBrain.variable} ${
          mode === "dark" ? "background_main_dark" : "background_main"
        } font-mont w-full min-h-screen`}
      >
        <NavBar />
        <AnimatePresence mode="wait">
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
        <Footer />
      </main>
    </>
  );
}
