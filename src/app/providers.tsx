"use client";

import {NextUIProvider} from "@nextui-org/system";
import {ThemeProvider} from "next-themes";
import React from "react";

import Footer from "@/components/footer";
import Navigation from "@/components/navigation";

export default function Providers({children}: {children: React.ReactNode}) {
  return (
    <NextUIProvider>
      <ThemeProvider attribute="class" defaultTheme="light">
        <Navigation />
        <main className="my-10 max-w-screen-2xl mx-auto container">{children}</main>
        <Footer />
      </ThemeProvider>
    </NextUIProvider>
  );
}
