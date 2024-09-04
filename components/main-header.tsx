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
  { name: "about", icon: <User2 />, link: "/about" },
  { name: "projects", icon: <Layers />, link: "/projects" },
  { name: "contact", icon: <Phone />, link: "/contact" },
];

function MainHeader() {
  const pathname = usePathname();

  return (
    <header>
      <nav>
        {MENU_ITEMS.map((item) => {
          return (
            <TooltipProvider key={item.name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={item.link}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "sm" }),
                      "hover:text-[#2f7df4]",
                      pathname === item.link && "text-[#2f7df4] bg-zinc-100"
                    )}
                  >
                    {item.icon}
                  </Link>
                </TooltipTrigger>
              </Tooltip>
            </TooltipProvider>
          );
        })}
      </nav>
    </header>
  );
}

export default MainHeader;
