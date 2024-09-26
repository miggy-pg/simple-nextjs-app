"use client";

import Link from "next/link";
import React from "react";
import { Home, Layers, Phone, User2 } from "lucide-react";
import { cn } from "../../lib/utils";
import { usePathname } from "next/navigation";
import { buttonVariants } from "../ui/button";

const MENU_ITEMS = [
  { name: "Home", icon: <Home />, link: "/" },
  { name: "About", icon: <User2 />, link: "/about" },
  { name: "Projects", icon: <Layers />, link: "/projects" },
  { name: "Contacts", icon: <Phone />, link: "/contact" },
];

function ScrollSpy() {
  const pathname = usePathname();

  return (
    <header>
      <nav className="fixed inset-y-1/3 left-5 z-50">
        <div className="flex flex-col rounded-3xl">
          {MENU_ITEMS.map((item) => {
            return (
              <span
                key={item.name}
                className={cn(
                  buttonVariants({ variant: "link", size: "xs" }),
                  "hover:text-[#FADFA1] text-zinc-500 py-8 cursor-pointer pointer-events-auto",
                  pathname === item.link && "text-[#fabe31]"
                )}
              >
                <span className="cursor-pointer">{item.icon}</span>
              </span>
            );
          })}
        </div>
      </nav>
    </header>
  );
}

export default ScrollSpy;
