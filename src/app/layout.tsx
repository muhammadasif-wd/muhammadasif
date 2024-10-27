import type {Metadata} from "next";

import React from "react";
import "../styles/globals.css";
import {Toaster} from "sonner";
import {Sora} from "next/font/google";

import Providers from "./providers";

const sora = Sora({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Muhammad Asif",
  description:
    "Experienced Full-Stack Developer skilled in HTML/CSS, Tailwind CSS, JavaScript, TypeScript, React, Next.js, responsive design, WebPack, Git/GitHub, Node.js, Express.js, API development, SQL/NoSQL databases, authentication/authorization, server management (Docker, Nginx, AWS), and best development practices. Proven track record in crafting dynamic web applications with a focus on user experience and collaboration. Ready to drive innovation and tackle complex challenges in a forward-thinking team.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sora.className}>
        <Providers>{children}</Providers>
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
