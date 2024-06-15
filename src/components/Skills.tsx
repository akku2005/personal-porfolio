import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import TabsDemo from "./cards/TabsCards"; 

const Skills: React.FC = () => {
  return (
    <section id="skills" className="hero text-white relative mt-0 sm:mt-[value]">
      <BackgroundBeams />
      <div className="container mx-auto px-4 ">
        <h1 className="text-3xl font-bold mb-0 text-center">Skills</h1>
        <TabsDemo />
      </div>
    </section>
  );
};

export default Skills;
