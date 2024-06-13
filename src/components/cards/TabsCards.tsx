import React from "react";
import Image from "next/image";
import { Tabs } from "../ui/tabs";
import DummyContent from "./DummyContent"; 
import FrontendCard from "./FrontendCard";

const TabsDemo = () => {
  const tabs = [
    {
      title: "Frontend",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Product Tab</p>
          <FrontendCard />
          
        </div>
      ),
    },
    {
      title: "Backend",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Services Tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Database",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Playground Tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Version Control",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Content Tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Languages",
      value: "random",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Random Tab</p>
          <DummyContent />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
};

export default TabsDemo;
