import React from "react";
import { BackgroundBeams } from "./background-beams";
import { FlipWords } from "./flip-words";
import Image from "next/image";
import profile from "../../assets/profile.png";
import Navbar from "../Navbar"; 


export function BackgroundBeamsDemo() {
  const words = ["Software Developer", "Web Developer", "Designer"];

  return (
    <div className="h-screen flex flex-col">
     <div className="m-20">
     <Navbar />
     </div>
      

      {/* Main content area */}
      <div className="flex flex-col lg:flex-row items-center justify-between flex-grow mt-1"> {/* Add mt-16 to offset the fixed navbar */}
        {/* Top section with profile image for small screens, right side for large screens */}
        <div className="flex justify-center items-center w-full lg:order-2">
          <div className="w-48 h-48 md:w-96 md:h-96"> {/* Responsive size */}
            <Image
              src={profile}
              alt="profile image"
              width={400} 
              height={400} 
              layout="responsive"
            />
          </div>
        </div>

        {/* Bottom section with text for small screens, left side for large screens */}
        <div className="w-full lg:order-1">
          <div className="text-4xl font-normal text-slate-300 dark:text-neutral-400 p-4 lg:p-0">
            <span className="text-gray-600 m-0">Hi, I am</span>
            <h1 className="text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold m-0">Akashkumar Sahu</h1>
            <span>I am a <span className="inline-block"><FlipWords words={words} /></span> </span>
          </div>
        </div>

        {/* BackgroundBeams, positioned based on screen size */}
        <div className="w-full lg:w-2 lg:ml-32">
          <BackgroundBeams />
        </div>
      </div>
    </div>
  );
}
