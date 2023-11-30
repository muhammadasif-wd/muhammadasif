import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="google-site-verification"
          content="D2vuzXd_0-8Nl5ykCrGWu4C6ocVJ_EFZwNQXyCaGXi0"
        />
        <meta name="title" content="Muhammad A SI F" />
        <meta
          name="description"
          content="I'm Muhammad Asif, a highly skilled MERN stack developer with expertise in MongoDB, Mongoose, Express, React, Next.js, Typescript, and Node.js. I bring a commitment to design excellence and user-centered thinking to every project. Let's work together!"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://muhammadasif.vercel.app/" />
        <meta property="og:title" content="Muhammad A SI F" />
        <meta
          property="og:description"
          content="I'm Muhammad Asif, a highly skilled MERN stack developer with expertise in MongoDB, Mongoose, Express, React, Next.js, Typescript, and Node.js. I bring a commitment to design excellence and user-centered thinking to every project. Let's work together!"
        />
        <meta
          property="og:image"
          content="https://muhammadasif.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmuhammadasif_profetional_image.b1dbfd92.png&w=640&q=75"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://muhammadasif.vercel.app/"
        />
        <meta property="twitter:title" content="Muhammad A SI F" />
        <meta
          property="twitter:description"
          content="I'm Muhammad Asif, a highly skilled MERN stack developer with expertise in MongoDB, Mongoose, Express, React, Next.js, Typescript, and Node.js. I bring a commitment to design excellence and user-centered thinking to every project. Let's work together!"
        />
        <meta
          property="twitter:image"
          content="https://muhammadasif.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmuhammadasif_profetional_image.b1dbfd92.png&w=640&q=75"
        />
      </Head>
      <body>
        <Script id="theme-switcher" strategy="beforeInteractive">
          {` 
            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              document.documentElement.classList.add('dark')
            } else {
              document.documentElement.classList.remove('dark')
            }
          `}
        </Script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
