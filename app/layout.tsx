import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ScrollSpy from "@/components/ScrollSpy/scroll-spy";
import Head from "next/head";
// theme provider
import ThemeProvider from "@/components/ThemeProvider/theme-provider";
import Header from "@/components/Header/header";
import Template from "../components/Template/template";
import MobileNav from "../components/MobileNav/mobile-nav";

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
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <Template>
            {/* <ScrollSpy /> */}
            {children}
          </Template>
          <MobileNav />
        </ThemeProvider>
      </body>
    </html>
  );
}
