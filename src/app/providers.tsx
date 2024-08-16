import {NextUIProvider} from "@nextui-org/system";
import {ThemeProvider} from "next-themes";
import React from "react";

import Footer from "@/components/footer";
import Navigation from "@/components/navigation";
import config from "@/config";

async function getData() {
  const res = await fetch(`${config.baseURL}/navigation`, {
    method: "GET",
    headers: {
      "x-api-key": config.xApiKey || "",
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Providers({children}: {children: React.ReactNode}) {
  let data;
  let error;
  let loading = true;

  try {
    data = await getData();
  } catch (err) {
    error = (err as Error).message;
  } finally {
    loading = false;
  }

  return (
    <NextUIProvider>
      <ThemeProvider attribute="class" defaultTheme="light">
        <Navigation error={error} loading={loading} navigationData={data.data} />
        <main className="my-10">{children}</main>
        <Footer />
      </ThemeProvider>
    </NextUIProvider>
  );
}
