import React from "react";
import { BackgroundBeams } from "./background-beams";
import { FlipWords } from "./flip-words";
import Image from "next/image";
import profile from "../../assets/profile.png";

export function BackgroundBeamsDemo() {
  const words = ["Software Developer", "Web Developer"];

  return (
    <div id="home" className="min-h-screen flex flex-col ">
      {/* Main content area */}
      <div className="flex flex-col lg:flex-row items-center justify-between flex-grow mt-1 space-y-4 lg:space-y-0 lg:space-x-8 px-4">
        {/* Profile image section */}
        <div className="flex justify-center items-center w-full lg:order-2 mt-16">
          <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96">
            <Image
              src={profile}
              alt="profile image"
              width={400}
              height={400}
              layout="responsive"
            />
          </div>
        </div>

        {/* Text section */}
        <div className="w-full lg:order-1">
          <div className="text-center lg:text-left text-2xl sm:text-4xl font-normal text-slate-300 dark:text-neutral-400 p-2 sm:p-4 lg:p-0">
            <span className="text-gray-600 m-0">Hi, I am</span>
            <h1 className="text-2xl sm:text-4xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold m-0">
              Akashkumar Sahu
            </h1>
            <span className="text-lg sm:text-2xl md:text-4xl">
              I am a <span className="inline-block"><FlipWords words={words} /></span>
            </span>
          </div>
        </div>

        {/* BackgroundBeams */}
        <div className="w-2 lg:ml-32">
          <BackgroundBeams />
        </div>
      </div>
    </div>
  );
}

export default BackgroundBeamsDemo;
