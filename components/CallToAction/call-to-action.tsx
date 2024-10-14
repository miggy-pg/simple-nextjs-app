"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import Autoplay from "embla-carousel-autoplay";
// import Autoplay from "embla-carousel-react";

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

function CallToAction() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <footer className="fixed bottom-0 flex sm:hidden">
      <Tabs defaultValue="services">
        <TabsList>
          <TabsTrigger value="services">Services</TabsTrigger>
          <TabsTrigger value="offices">Offices</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
          <TabsTrigger value="philosophy">Philosophy</TabsTrigger>
          <TabsTrigger value="spaces">Spaces</TabsTrigger>
        </TabsList>
        <TabsContent
          className="absolute right-0 left-0 m-0 h-0"
          value="services"
        >
          <Carousel
            plugins={[plugin.current]}
            className="max-w-xs h-24 mx-auto border-2 mt-12"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem className="border-2 border-green-400" key={index}>
                  <div className="p-1">
                    <Card className="border-2 border-red-400 p-0 m-0">
                      <CardContent className="flex aspect-square items-center justify-center">
                        <span className="text-4xl font-semibold">
                          {index + 1}
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* <CarouselPrevious /> */}
            {/* <CarouselNext /> */}
          </Carousel>
        </TabsContent>
        <TabsContent value="offices"></TabsContent>
        <TabsContent value="team"></TabsContent>
        <TabsContent value="philosophy">Change your password here.</TabsContent>
        <TabsContent value="spaces">Change your password here.</TabsContent>
      </Tabs>
    </footer>
  );
}

export default CallToAction;
