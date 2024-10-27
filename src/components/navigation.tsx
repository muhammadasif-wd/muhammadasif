/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import {useState} from "react";
import Link from "next/link";
import {Button} from "@nextui-org/button";
import {motion} from "framer-motion";
import {usePathname} from "next/navigation";
import {Dropdown, DropdownItem, DropdownMenu, DropdownTrigger} from "@nextui-org/dropdown";
import {Icon} from "@iconify/react";

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
    <section className="container py-6">
      <div className="flex items-center justify-between py-2">
        <div>
          <Link className="font-bold uppercase" href={"/"}>
            Asif
          </Link>
        </div>
        <div className="md:flex items-center hidden gap-5">
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
                    <Icon height={16} icon="mingcute:down-fill" width={16} />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu key={_id} aria-label={name ?? "Dropdown"}>
                  {(submenu ?? []).map(({name, url, _id}: TSubmenuNavigation) => (
                    <DropdownItem
                      key={_id}
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
                key={_id}
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
            className="md:flex bg-primary text-light dark:bg-light dark:text-primary hidden font-bold"
            radius="sm"
          >
            Resume <IconDownload height={15} width={15} />
          </Button>
          <Button
            isIconOnly
            className="md:hidden text-primary dark:text-light flex font-bold"
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
            className="dark:bg-primary md:hidden fixed top-0 right-0 z-50 w-56 h-full bg-white shadow-lg"
            exit={{x: "100%"}}
            initial={{x: "100%"}}
            transition={{type: "spring", stiffness: 300, damping: 30, mass: 1}}
          >
            <div className="container flex flex-col my-5 space-y-1">
              <div className="md:hidden flex items-center justify-between">
                <div className="md:hidden flex">
                  <ThemeSwitcher />
                </div>
                <Button
                  isIconOnly
                  className="bg-primary text-light dark:bg-light dark:text-primary font-bold"
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
                          {name} <Icon height={16} icon="mingcute:down-fill" width={16} />
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
                className="md:hidden bg-primary text-light dark:bg-light dark:text-primary flex font-bold"
                color="primary"
                radius="sm"
              >
                Resume <IconDownload height={15} width={15} />
              </Button>
            </div>
          </motion.div>
          <motion.div
            animate={{opacity: 1}}
            className="bg-primary fixed inset-0 z-40 bg-opacity-50"
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
