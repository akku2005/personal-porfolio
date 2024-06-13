import React from "react";
import { BackgroundBeams } from "../components/ui/background-beams";
import TabsDemo from "./cards/TabsCards"; // Update the import path if necessary

const Skills: React.FC = () => {
  return (
    <section className="hero text-white relative">
      <BackgroundBeams />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-3xl font-bold mb-6 text-center">Skills</h1>
        <TabsDemo />
        </div>
    </section>
  );
};

export default Skills;
