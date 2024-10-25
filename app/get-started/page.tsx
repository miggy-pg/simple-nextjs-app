"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Home, Layers, Phone, User2 } from "lucide-react";
import { cn } from "../../lib/utils";
import { usePathname } from "next/navigation";
import { buttonVariants } from "@/components/ui/button";

const MENU_ITEMS = [
  { name: "Home", icon: <Home />, link: "/" },
  { name: "About", icon: <User2 />, link: "/about" },
  { name: "Projects", icon: <Layers />, link: "/projects" },
  { name: "Contacts", icon: <Phone />, link: "/contact" },
];

function Page() {
  const pathname = usePathname();

  return (
    <div className="container">
      <div className="fixed w-full bottom-0 z-50">
        <div className="flex flex-row px-1 items-center justify-center rounded-3xl">
          {MENU_ITEMS.map((item) => {
            return (
              <div
                key={item.name}
                className={cn(
                  buttonVariants({ variant: "link", size: "xs" }),
                  "hover:text-[#FADFA1] text-zinc-500 py-8 px-5 cursor-pointer pointer-events-auto",
                  pathname === item.link && "text-[#fabe31]"
                )}
              >
                <span className="cursor-pointer">{item.icon}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Page;
