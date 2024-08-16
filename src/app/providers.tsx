import {NextUIProvider} from "@nextui-org/system";
import {ThemeProvider} from "next-themes";
import React from "react";

import Footer from "@/components/footer";
import Navigation from "@/components/navigation";

export default async function Providers({children}: {children: React.ReactNode}) {
  return (
    <NextUIProvider>
      <ThemeProvider attribute="class" defaultTheme="light">
        <Navigation />
        <main className="my-10">{children}</main>
        <Footer />
      </ThemeProvider>
    </NextUIProvider>
  );
}
