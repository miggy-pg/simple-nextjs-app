"use client";

import Link from "next/link";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Home, Layers, Phone, User2 } from "lucide-react";
import { cn } from "../lib/utils";
import { usePathname } from "next/navigation";
import { buttonVariants } from "./ui/button";

const MENU_ITEMS = [
  { name: "Home", icon: <Home />, link: "/" },
  { name: "About", icon: <User2 />, link: "/about" },
  { name: "Projects", icon: <Layers />, link: "/projects" },
  { name: "Contacts", icon: <Phone />, link: "/contact" },
];

function MainHeader() {
  const pathname = usePathname();

  return (
    <header>
      <nav className="flex flex-row justify-center">
        <div className="fixed bottom-10 bg-[#3C3D37] rounded-3xl">
          {MENU_ITEMS.map((item) => {
            return (
              <TooltipProvider key={item.name}>
                <Tooltip>
                  <TooltipTrigger>
                    <TooltipContent>
                      <p>{item.name}</p>
                    </TooltipContent>
                    <Link
                      href={item.link}
                      className={cn(
                        buttonVariants({ size: "xs" }),
                        "hover:text-[#FADFA1] text-[#fff] mx-8",
                        pathname === item.link && "text-[#FADFA1]"
                      )}
                    >
                      <span>{item.icon}</span>
                    </Link>
                  </TooltipTrigger>
                </Tooltip>
              </TooltipProvider>
            );
          })}
        </div>
      </nav>
    </header>
  );
}

export default MainHeader;
