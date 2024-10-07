"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import logo from "@/assets/logo-vector.webp";
import { MenuItemProps } from "@/types";

import {
  Building,
  House,
  LightbulbIcon,
  PersonStanding,
  Settings,
} from "lucide-react";

const menuItems: MenuItemProps[] = [
  {
    name: "Office",
    path: "/offices",
    icon: <Building />,
  },
  {
    name: "Services",
    path: "/services",
    icon: <Settings />,
  },
  {
    name: "Team",
    path: "/team",
    icon: <PersonStanding />,
  },
  {
    name: "Philosophy",
    path: "/philosophy",
    icon: <LightbulbIcon />,
  },
  {
    name: "Spaces",
    path: "/spaces",
    icon: <House />,
  },
];

function MobileNav() {
  return (
    <div className="w-dvw bg-red-200 rounded-xl p-4 fixed bottom-1 flex gap-10 justify-center sm:hidden">
      {menuItems.map((menu, idx) => (
        <span key={idx}>{menu.icon}</span>
      ))}
    </div>
  );
}

export default MobileNav;
