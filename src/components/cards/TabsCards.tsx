import React from "react";
import { Tabs } from "../ui/tabs";
// import DummyContent from "./DummyContent";
import FrontendCard from "./FrontendCard";
import Backend from "./Backend";
import Database from "./Database";
import VersionControl from "./VersionControl";
import Languages from "./Languages";

const TabsCards = () => {
  const tabs = [
    {
      title: "Frontend",
      value: "frontend",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-4 sm:p-10 text-base sm:text-lg md:text-xl lg:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="text-center">Frontend Technology</p>
          <FrontendCard />
        </div>
      ),
    },
    {
      title: "Backend",
      value: "backend",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-4 sm:p-10 text-base sm:text-lg md:text-xl lg:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="text-center">Backend Technology</p>
          <Backend />
        </div>
      ),
    },
    {
      title: "Database",
      value: "database",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-4 sm:p-10 text-base sm:text-lg md:text-xl lg:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="text-center">Databases</p>
          <Database />
        </div>
      ),
    },
    {
      title: "Version Control",
      value: "version-control",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-4 sm:p-10 text-base sm:text-lg md:text-xl lg:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="text-center">Version Control</p>
          <VersionControl />
        </div>
      ),
    },
    {
      title: "Languages",
      value: "languages",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-4 sm:p-10 text-base sm:text-lg md:text-xl lg:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="text-center">Languages</p>
          <Languages />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[40rem] sm:h-[40rem] md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-20 sm:my-40">
      <Tabs tabs={tabs} />
    </div>
  );
};

export default TabsCards;
