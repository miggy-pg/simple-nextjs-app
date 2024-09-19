import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ScrollSpy from "@/components/ScrollSpy";

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
      <body className={inter.className}>
        <ScrollSpy />
        {children}
      </body>
    </html>
  );
}
