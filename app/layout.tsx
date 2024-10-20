import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ScrollSpy from "@/components/ScrollSpy/scroll-spy";
import Head from "next/head";
// theme provider
import ThemeProvider from "@/components/ThemeProvider/theme-provider";
import Header from "@/components/Header/header";
import Template from "../components/Template/template";
import MobileNav from "../components/MobileNav/mobile-nav";
import { cn } from "../lib/utils";

const signifierRegular = localFont({
  display: "swap",
  src: "../styles/fonts/TestSignifier-Regular.otf",
  variable: "--font-signifier-regular",
});

const signifierMedium = localFont({
  display: "swap",
  src: "../styles/fonts/TestSignifier-Medium.otf",
  variable: "--font-signifier-medium",
});

const signifierLight = localFont({
  display: "swap",
  src: "../styles/fonts/TestSignifier-Light.otf",
  variable: "--font-signifier-light",
});

const signifierBold = localFont({
  display: "swap",
  src: "../styles/fonts/TestSignifier-Bold.otf",
  variable: "--font-signifier-bold",
});
const signifierExtralight = localFont({
  display: "swap",
  src: "../styles/fonts/TestSignifier-Extralight.otf",
  variable: "--font-signfier-extralight",
});

const sohneRegular = localFont({
  display: "swap",
  src: "../styles/fonts/TestSohne-Buch.otf",
  variable: "--font-sohne-regular",
});

const sohneLight = localFont({
  display: "swap",
  src: "../styles/fonts/TestSohne-Leicht.otf",
  variable: "--font-sohne-light",
});

const sohneExtralight = localFont({
  display: "swap",
  src: "../styles/fonts/TestSohne-Extraleicht.otf",
  variable: "--font-sohne-extralight",
});

const sohneHalfFat = localFont({
  display: "swap",
  src: "../styles/fonts/TestSohne-Halbfett.otf",
  variable: "--font-sohne-halffat",
});

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
      <body
        className={cn(
          "antialiased overflow-hidden",
          signifierRegular.variable,
          signifierMedium.variable,
          signifierLight.variable,
          signifierBold.variable,
          signifierExtralight.variable,
          sohneRegular.variable,
          sohneLight.variable,
          sohneExtralight.variable,
          sohneHalfFat.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {/* <Header /> */}
          <Template>
            {/* <ScrollSpy /> */}
            {children}
          </Template>
          {/* <MobileNav /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
