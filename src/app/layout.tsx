import type { Metadata } from "next";
import { Roboto_Slab } from "next/font/google";
import "../styles/globals.css";
import Provider from "./provider";

const roboto_slab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Muhammad Asif - Software Engineer",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto_slab.variable} antialiased`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
