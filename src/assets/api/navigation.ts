import {TNavigation, TSocialNavigation} from "@/types/navigation.type";

export const APINavigation: TNavigation[] = [
  {
    _id: "about",
    name: "About",
    url: "/about",
    submenu: [
      {
        _id: "about",
        name: "About",
        url: "/about",
      },
      {
        _id: "events",
        name: "Events",
        url: "/about/events",
      },
      {
        _id: "gallery",
        name: "Gallery",
        url: "/about/gallery",
      },
    ],
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
    submenu: [
      {
        _id: "aider",
        name: "Aider",
        url: "/worlds/aider",
      },
      {
        _id: "societal",
        name: "Societal",
        url: "/worlds/societal",
      },
      {
        _id: "bargain",
        name: "Bargain",
        url: "/worlds/bargain",
      },
    ],
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
