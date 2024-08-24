"use client";
import {motion} from "framer-motion";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useState} from "react";

import {INavigationLinkProps} from "@/interfaces/navigation.interface";

export default function NavigationLink({
  href,
  exact = false,
  children,
  className = "",
}: INavigationLinkProps) {
  const [isAnimate, setIsAnimate] = useState(false);

  const pathname = usePathname();
  const active = "text-dark font-bold transition-colors duration-500 ease-in-out active nav-link";
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  if (isAnimate) {
    className += active;
  }

  return (
    <section>
      <motion.div
        className={`${className} relative text-dark dark:text-light transition-all duration-700 ease-in`}
        initial={{color: "inherit"}}
        whileHover={{color: "inherit"}}
        onMouseEnter={() => setIsAnimate(true)}
        onMouseLeave={() => setIsAnimate(false)}
      >
        <Link href={href}>{children}</Link>
        <motion.span
          animate={isAnimate || isActive ? {scaleX: 1} : {scaleX: 0}}
          className={`absolute inset-x-0 bottom-0 h-0.5 bg-dark dark:bg-light`}
          initial={{scaleX: 0}}
          transition={{duration: 0.3, ease: "easeInOut"}}
        />
      </motion.div>
    </section>
  );
}
