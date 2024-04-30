"use client";
import {Button} from "@nextui-org/button";
import {Dropdown, DropdownItem, DropdownMenu, DropdownTrigger} from "@nextui-org/dropdown";
import {useTheme} from "next-themes";
import {ReactNode, useEffect, useState} from "react";
import {IconDevice} from "../assets/icons/device";
import {IconMoon} from "../assets/icons/moon";
import {IconSun} from "../assets/icons/sun";

export function ThemeSwitcher(): ReactNode {
  const [mounted, setMounted] = useState(false);
  const {theme, setTheme} = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
  };

  return (
    <Dropdown placement="bottom-start" size="sm">
      <DropdownTrigger>
        <Button isIconOnly variant="flat">
          {theme === "light" ? <IconSun /> : <IconMoon />}
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Dropdown menu with themes" variant="flat">
        <DropdownItem
          key="dark"
          className={theme === "dark" ? "active" : ""}
          endContent={<IconMoon />}
          onClick={() => handleThemeChange("dark")}
        >
          Dark
        </DropdownItem>
        <DropdownItem
          key="light"
          className={theme === "light" ? "active" : ""}
          endContent={<IconSun />}
          onClick={() => handleThemeChange("light")}
        >
          Light
        </DropdownItem>
        <DropdownItem
          key="system"
          className={theme === "system" ? "active" : ""}
          endContent={<IconDevice />}
          onClick={() => handleThemeChange("system")}
        >
          System
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
