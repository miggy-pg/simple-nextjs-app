import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ScrollSpy from "@/components/ScrollSpy/scroll-spy";
import Head from "next/head";
import icon from "../public/favicon.ico";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lorraine Wolf",
  description: "Your technology lawyer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className={inter.className}>
        <ScrollSpy />
        {children}
      </body>
    </html>
  );
}
