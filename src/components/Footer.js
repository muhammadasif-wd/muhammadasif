import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base">
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-16">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center lg:py-2">
          Build with{" "}
          <span className="text-primary dark:text-primaryDark text-2xl px-1">
            &#9825;
          </span>{" "}
          by&nbsp;
          <a
            className="underline underline-offset-2"
            href="https://wa.me/+8801830018193/?text=Hello A SI F!"
            target="_blank"
          >
            Muhammad A SI F
          </a>
        </div>
        <Link href={"https://t.me/muhammadasif_wd"} target="_blank">
          Message on (Telegram)
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
