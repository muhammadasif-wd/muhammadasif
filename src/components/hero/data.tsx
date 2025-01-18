import { Github, Linkedin } from 'lucide-react';

export const title = {
  plainText: 'Hey',
  glowText: 'Muhammad Asif',
  subTitle:
    'Building innovative and scalable software solutions with precision and passion',
  highlight: ['innovative', 'scalable'],
};

export const profileCard = {
  title: 'Jacob Pixler',
  subTitle: 'Fullstack Software Developer',
  body: `Passionate about building scalable, user-friendly web applications. Always exploring new technologies and best practices to improve development processes. And I like cats.`,
  socialUrls: [
    {
      url: 'https://www.linkedin.com/in/jacob-pixler-094348219/',
      icon: <Linkedin size={20} />,
    },
    {
      url: 'https://github.com/yoyocharlie',
      icon: <Github size={20} />,
    },
  ],
  tooltip: {
    imagePath: '/img/muhammadasif.webp',
    title: 'Hey...',
    subTitle: "That's me!",
  },
};
