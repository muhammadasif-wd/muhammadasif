/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import {useState} from "react";
import Link from "next/link";
import {Button} from "@nextui-org/button";
import {motion} from "framer-motion";
import {usePathname} from "next/navigation";
import {Dropdown, DropdownItem, DropdownMenu, DropdownTrigger} from "@nextui-org/dropdown";

import {IconDownload} from "@/assets/icons/download";
import IconMenu from "@/assets/icons/menu";
import IconClose from "@/assets/icons/close";
import ThemeSwitcher from "@/app/theme-switcher";
import {APINavigation} from "@/assets/api/navigation";
import {TNavigation, TSubmenuNavigation} from "@/types/navigation.type";

const Navigation = () => {
  const pathname = usePathname();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <section className="py-6 container">
      <div className="flex items-center justify-between py-2">
        <div>
          <Link className="font-bold uppercase" href={"/"}>
            Asif
          </Link>
        </div>
        <div className="md:flex hidden gap-5 items-center">
          {APINavigation.map(({submenu, url, name, _id}: TNavigation) => {
            const selectedSubmenu = submenu?.some(
              (data: TSubmenuNavigation) => data?.url === pathname,
            )
              ? "bg-secondary hover:bg-secondary text-light hover:text-light"
              : "";

            return (submenu ?? []).length > 0 ? (
              <Dropdown
                key={_id}
                className="dark:bg-secondary/30 backdrop-blur-sm"
                placement="bottom-start"
              >
                <DropdownTrigger>
                  <Button className={selectedSubmenu} size="sm" variant="light">
                    {name}
                  </Button>
                </DropdownTrigger>
                <DropdownMenu key={_id} aria-label={name ?? "Dropdown"}>
                  {(submenu ?? []).map(({name, url, _id}: TSubmenuNavigation) => (
                    <DropdownItem
                      key={name + _id}
                      as={Link}
                      className={
                        url === pathname
                          ? "bg-secondary hover:bg-secondary text-light hover:text-light"
                          : "hover:text-light"
                      }
                      href={url}
                    >
                      {name}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            ) : (
              <Button
                as={Link}
                className={url === pathname ? "bg-secondary hover:bg-secondary text-light" : ""}
                href={url}
                size="sm"
                variant="light"
              >
                {name}
              </Button>
            );
          })}
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
            className="fixed top-0 right-0 w-56 h-full dark:bg-primary bg-white shadow-lg z-50 md:hidden"
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

              <div className="flex flex-col gap-1 py-10">
                {APINavigation.map(({submenu, url, name, _id}: TNavigation) => {
                  const selectedSubmenu = submenu?.some(
                    (data: TSubmenuNavigation) => data?.url === pathname,
                  )
                    ? "bg-secondary hover:bg-secondary text-light hover:text-light"
                    : "";

                  return (submenu ?? []).length > 0 ? (
                    <Dropdown
                      key={_id}
                      className="dark:bg-secondary bg-white"
                      placement="bottom-start"
                    >
                      <DropdownTrigger>
                        <Button className={selectedSubmenu} size="sm" variant="light">
                          {name}
                        </Button>
                      </DropdownTrigger>
                      <DropdownMenu key={_id} aria-label={name ?? "Dropdown"}>
                        {(submenu ?? []).map(({name, url, _id}: TSubmenuNavigation) => (
                          <DropdownItem
                            key={name + _id}
                            as={Link}
                            className={
                              url === pathname
                                ? "bg-secondary hover:bg-secondary text-light hover:text-light"
                                : "hover:text-light"
                            }
                            href={url}
                          >
                            {name}
                          </DropdownItem>
                        ))}
                      </DropdownMenu>
                    </Dropdown>
                  ) : (
                    <Button
                      as={Link}
                      className={
                        url === pathname ? "bg-secondary hover:bg-secondary text-light" : ""
                      }
                      href={url}
                      size="sm"
                      variant="light"
                    >
                      {name}
                    </Button>
                  );
                })}
              </div>
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
