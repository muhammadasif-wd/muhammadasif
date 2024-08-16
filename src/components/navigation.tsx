"use client";
import {useEffect, useState} from "react";
import Link from "next/link";
import {Button} from "@nextui-org/button";
import {motion} from "framer-motion";

import {IconDownload} from "@/assets/icons/download";
import IconMenu from "@/assets/icons/menu";
import IconClose from "@/assets/icons/close";
import ThemeSwitcher from "@/app/theme-switcher";
import {INavigationProps} from "@/types/navigation.type";
import SkeletonLoading from "@/shared/skeleton";
import Alert from "@/shared/alert";

const Navigation = ({navigationData, error}: INavigationProps) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    if (navigationData || error) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [navigationData, error]);

  if (loading) {
    return (
      <div className="py-6 container">
        <SkeletonLoading skeleton={1} style="h-14 w-full rounded" />
      </div>
    );
  }
  if (error) {
    return (
      <div className="py-6 container">
        <Alert message={error || "Something went wrong!"} style="py-2 px-4" type="danger" />
      </div>
    );
  }
  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <section className="py-6 container">
      <div className="flex items-center justify-between py-2">
        <div>
          <Link className="font-bold uppercase" href={"/"}>
            Asif
          </Link>
        </div>
        <div className="md:flex hidden gap-5 items-center font-bold">
          {navigationData &&
            navigationData?.map((nav) => (
              <Link key={nav._id} href={nav.url}>
                <p className="font-bold capitalize">{nav.name}</p>
              </Link>
            ))}
        </div>
        <div className="flex items-center gap-3">
          <div className="md:flex hidden">
            <ThemeSwitcher />
          </div>
          <Button
            className="font-bold md:flex hidden bg-primary text-light dark:bg-light dark:text-primary"
            radius="sm"
          >
            Resume <IconDownload height={15} width={15} />
          </Button>
          <Button
            isIconOnly
            className="font-bold md:hidden flex text-primary dark:text-light"
            color="primary"
            radius="sm"
            variant="light"
            onClick={toggleDrawer}
          >
            <IconMenu height={18} width={27} />
          </Button>
        </div>
      </div>
      {isDrawerOpen && (
        <>
          <motion.div
            animate={{x: 0}}
            className="fixed top-0 right-0 w-3/4 h-full dark:bg-primary bg-white shadow-lg z-50 md:hidden"
            exit={{x: "100%"}}
            initial={{x: "100%"}}
            transition={{type: "spring", stiffness: 300, damping: 30, mass: 1}}
          >
            <div className="flex flex-col space-y-1 container my-5">
              <div className="md:hidden flex justify-between items-center">
                <div className="md:hidden flex">
                  <ThemeSwitcher />
                </div>
                <Button
                  isIconOnly
                  className="font-bold bg-primary text-light dark:bg-light dark:text-primary"
                  radius="sm"
                  size="sm"
                  onClick={toggleDrawer}
                >
                  <IconClose height={15} width={15} />
                </Button>
              </div>
              {navigationData &&
                navigationData?.map((nav) => (
                  <Button key={nav._id} as={Link} href={nav.url} radius="sm">
                    {nav.name}
                  </Button>
                ))}
              <Button
                className="font-bold md:hidden flex bg-primary text-light dark:bg-light dark:text-primary"
                color="primary"
                radius="sm"
              >
                Resume <IconDownload height={15} width={15} />
              </Button>
            </div>
          </motion.div>
          <motion.div
            animate={{opacity: 1}}
            className="fixed inset-0 bg-primary bg-opacity-50 z-40"
            exit={{opacity: 0}}
            initial={{opacity: 0}}
            transition={{duration: 0.5, ease: "easeInOut"}}
            onClick={toggleDrawer}
          />
        </>
      )}
    </section>
  );
};

export default Navigation;
