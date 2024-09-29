import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

function CallToAction() {
  return (
    <section>
      <Tabs defaultValue="services" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="services">Account</TabsTrigger>
          <TabsTrigger value="offices">Password</TabsTrigger>
          <TabsTrigger value="team">Password</TabsTrigger>
          <TabsTrigger value="philosophy">Password</TabsTrigger>
          <TabsTrigger value="spaces">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="services">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="offices">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="team">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="philosophy">Change your password here.</TabsContent>
        <TabsContent value="spaces">Change your password here.</TabsContent>
      </Tabs>
    </section>
  );
}

export default CallToAction;
