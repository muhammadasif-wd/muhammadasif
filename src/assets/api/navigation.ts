import {TNavigation, TSocialNavigation} from "@/types/navigation.type";

export const APINavigation: TNavigation[] = [
  {
    _id: "about",
    name: "About",
    url: "/about",
  },
  {
    _id: "works",
    name: "Works",
    url: "/works",
  },
  {
    _id: "worlds",
    name: "Worlds",
    url: "/worlds",
  },
];
export const APISocial: TSocialNavigation[] = [
  {
    _id: "whatsapp",
    name: "Whatsapp",
    url: "https://wa.me/+8801830018193/?text=Hello A SI F!",
    icon: "whatsapp",
  },
  {
    _id: "github",
    name: "Github",
    url: "https://github.com/muhammadasif-wd",
    icon: "github",
  },
  {
    _id: "linkedin",
    name: "Linkedin",
    url: "https://www.linkedin.com/in/muhammadasif-wd/",
    icon: "linkedin",
  },

  {
    _id: "facebook",
    name: "Facebook",
    url: "https://www.facebook.com/muhammadasif.wd",
    icon: "facebook",
  },
];
