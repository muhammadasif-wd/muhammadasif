import {Button} from "@nextui-org/button";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/navbar";
import {motion} from "framer-motion";
import Link from "next/link";
import {useState} from "react";

import ThemeSwitcher from "@/app/theme-switcher";
import {APINavigation, APISocial} from "@/assets/api/navigation";
import IconClose from "@/assets/icons/close";
import {IconFacebook} from "@/assets/icons/facebook";
import IconGithub from "@/assets/icons/github";
import IconLinkedin from "@/assets/icons/linkedin";
import IconMenu from "@/assets/icons/menu";
import NavigationLink from "@/components/navigation-link";

export default function Navigation() {
  const [navbar, setNavbar] = useState<boolean>(false);

  return (
    <main>
      <Navbar isBordered shouldHideOnScroll className="fixed w-full">
        <NavbarContent justify="start">
          <NavbarBrand>
            <Link className="font-extrabold text-inherit" href={"/"}>
              ASIF
            </Link>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent className="gap-4 md:flex hidden" justify="center">
          {APINavigation.map(({id, name, url}) => (
            <NavbarItem key={id}>
              <NavigationLink href={url}>{name}</NavigationLink>
            </NavbarItem>
          ))}
        </NavbarContent>
        <NavbarContent className="md:flex hidden" justify="end">
          <NavbarItem className="flex items-center gap-1">
            {APISocial.map(({icon, id, url}) => (
              <Button
                key={id}
                isIconOnly
                as={Link}
                color="default"
                href={url}
                size="sm"
                target="_blank"
                variant="flat"
              >
                {icon === "github" && <IconGithub className="w-5 h-5" />}
                {icon === "linkedin" && <IconLinkedin className="w-5 h-5" />}
                {icon === "facebook" && <IconFacebook className="w-5 h-5" />}
              </Button>
            ))}
            <div>
              <ThemeSwitcher />
            </div>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent className="md:hidden flex" justify="end">
          <NavbarItem className="flex items-center gap-1">
            <Button
              isIconOnly
              color="default"
              size="sm"
              variant="flat"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? <IconClose className="w-5 h-5" /> : <IconMenu className="w-5 h-5" />}
            </Button>
          </NavbarItem>
        </NavbarContent>
        <section className="md:hidden flex">
          {navbar && (
            <motion.div
              animate={navbar ? {x: 0} : {x: "100%"}}
              className={`fixed top-16 right-0 bottom-0 z-50 min-w-72`}
              initial={{x: "100%"}}
              transition={{type: "spring", stiffness: 150, damping: 25}}
            >
              <div className="flex border-l border-t dark:border-dark flex-col min-h-screen bg-white dark:bg-black p-3">
                <div className="py-5">
                  <div className="flex flex-col gap-3">
                    {APINavigation.map(({id, name, url}) => (
                      <NavbarItem key={id} className="w-fit">
                        <NavigationLink href={url}>{name}</NavigationLink>
                      </NavbarItem>
                    ))}
                  </div>
                  <div className="py-5 flex">
                    <NavbarItem className="flex items-center gap-1">
                      {APISocial.map(({icon, id, url}) => (
                        <Button
                          key={id}
                          isIconOnly
                          as={Link}
                          color="default"
                          href={url}
                          size="sm"
                          target="_blank"
                          variant="flat"
                        >
                          {icon === "github" && <IconGithub className="w-5 h-5" />}
                          {icon === "linkedin" && <IconLinkedin className="w-5 h-5" />}
                          {icon === "facebook" && <IconFacebook className="w-5 h-5" />}
                        </Button>
                      ))}
                      <div>
                        <ThemeSwitcher />
                      </div>
                    </NavbarItem>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </section>
      </Navbar>
    </main>
  );
}
