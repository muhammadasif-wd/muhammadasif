"use client";

import {NextUIProvider} from "@nextui-org/system";
import {ThemeProvider} from "next-themes";
import React from "react";

export function Providers({children}: {children: React.ReactNode}) {
  return (
    <NextUIProvider>
      <ThemeProvider attribute="class" defaultTheme="dark">
        {children}
      </ThemeProvider>
    </NextUIProvider>
  );
}
