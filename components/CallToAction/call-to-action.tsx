import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function CallToAction() {
  return (
    <div>
      <Tabs defaultValue="services" className="flex md:hidden w-[400px]">
        <TabsList>
          <TabsTrigger value="services">Services</TabsTrigger>
          <TabsTrigger value="offices">Offices</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
          <TabsTrigger value="philosophy">Philosophy</TabsTrigger>
          <TabsTrigger value="spaces">Spaces</TabsTrigger>
        </TabsList>
        <TabsContent value="services">
          <Carousel>
            <CarouselContent>
              <CarouselItem>Test</CarouselItem>
              <CarouselItem>...</CarouselItem>
              <CarouselItem>...</CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </TabsContent>
        <TabsContent value="offices"></TabsContent>
        <TabsContent value="team"></TabsContent>
        <TabsContent value="philosophy">Change your password here.</TabsContent>
        <TabsContent value="spaces">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
}

export default CallToAction;
