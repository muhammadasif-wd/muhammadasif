import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedInIcon,
  MoonIcon,
  SunIcon,
  TwitterIcon,
} from "./Icon";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[2px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        } dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();
  const handleClick = () => {
    toggle();
    router.push(href);
  };
  return (
    <button
      href={href}
      className={`${className} relative group text-[#e2e8f0] dark:text-dark my-2`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-[2px] inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        }  dark:bg-dark`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();

  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full px-32 text-lg pt-8 pb-1 font-medium flex items-center justify-between dark:text-[#e2e8f0] relative lg:px-16 md:px-12 sm:px-8">
      <button
        className="flex-col justify-center items-center hidden lg:flex"
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-140"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      <div className="w-full flex justify-between items-center lg:hidden bg-white/10 backdrop-blur-md p-5 rounded-xl dark:shadow dark:border-none shadow-md border">
        <nav>
          <CustomLink href={"/"} title={"Home"} className="mr-4" />
          <CustomLink href={"/about"} title={"About"} className="mx-4" />
          <CustomLink href={"/projects"} title={"Projects"} className="mx-4" />
          <CustomLink href={"/articles"} title={"Articles"} className="mx-4" />
        </nav>

        <nav className="flex gap-x-3 items-center justify-center">
          <motion.a
            href={"https://github.com/muhammadasif-wd"}
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-8"
          >
            <GithubIcon className={""} />
          </motion.a>
          <motion.a
            href={"https://www.linkedin.com/in/muhammadasif-wd/"}
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-8"
          >
            <LinkedInIcon className={"text-[#0072b1] dark:text-[#e2e8f0]"} />
          </motion.a>
          <motion.a
            href={"https://www.facebook.com/muhammadasif.coder"}
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-8"
          >
            <FacebookIcon className={"text-[#4267B2] dark:text-[#1877F2]"} />
          </motion.a>
          <motion.a
            href={"https://twitter.com/muhammadasif_wd"}
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-8"
          >
            <TwitterIcon className={"text-[#1DA1F2] dark:text-[#1DA1F2]"} />
          </motion.a>
          <motion.a
            href={"https://www.instagram.com/muhammadasif.wd/"}
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-8"
          >
            <InstagramIcon className={"text-[#e77943]"} />
          </motion.a>
          <button
            onClick={() => {
              setMode(mode === "light" ? "dark" : "light"),
                window.location.reload();
            }}
            className={`ml-3 flex items-center justify-center rounded-full p-1 ${
              mode === "light" ? "bg-dark text-[#e2e8f0]" : "bg-light text-dark"
            }`}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-light"} />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Nav */}

      {isOpen ? (
        <motion.div
          className="min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <div className="lg:bg-dark -mt-20 rounded-full w-20 h-20 mx-auto my-auto">
            <Logo mode={mode} toggle={handleClick} />
          </div>
          <nav className="flex items-center flex-col justify-center my-2">
            <CustomMobileLink
              href={"/"}
              title={"Home"}
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href={"/about"}
              title={"About"}
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href={"/projects"}
              title={"Projects"}
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href={"/articles"}
              title={"Articles"}
              className=""
              toggle={handleClick}
            />
          </nav>

          <nav
            className={`w-11/12 flex gap-1 justify-between items-center ${
              mode === "dark" ? "bg-light/10" : "bg-light"
            }  backdrop-blur-md shadow border p-3 rounded-xl`}
          >
            <motion.a
              href={"https://github.com/muhammadasif-wd"}
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-8"
            >
              <GithubIcon className={"text-dark"} />
            </motion.a>
            <motion.a
              href={"https://www.linkedin.com/in/muhammadasif-wd/"}
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-8"
            >
              <LinkedInIcon className={"text-[#0072b1]"} />
            </motion.a>
            <motion.a
              href={"https://www.facebook.com/muhammadasif.coder"}
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-8"
            >
              <FacebookIcon className={"text-[#4267B2] dark:text-[#1877F2]"} />
            </motion.a>
            <motion.a
              href={"https://twitter.com/muhammadasif_wd"}
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-8"
            >
              <TwitterIcon className={"text-[#1DA1F2] dark:text-[#1DA1F2]"} />
            </motion.a>
            <motion.a
              href={"https://www.instagram.com/muhammadasif.wd/"}
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-8"
            >
              <InstagramIcon className={"text-[#e77943]"} />
            </motion.a>
            <button
              onClick={() => {
                setMode(mode === "light" ? "dark" : "light"),
                  window.location.reload();
              }}
              className={`ml-3 flex items-center justify-center rounded-full p-1 ${
                mode === "light"
                  ? "bg-dark text-[#e2e8f0]"
                  : "bg-light text-dark"
              }`}
            >
              {mode === "dark" ? (
                <SunIcon className={"fill-dark"} />
              ) : (
                <MoonIcon className={"fill-light"} />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}

      <div className="absolute left-[50%] lg:hidden top-12 translate-x-[-50%]">
        <Logo mode={mode} />
      </div>
    </header>
  );
};

export default NavBar;
