"use client";
import React from "react";
import Image from 'next/image';
import { BackgroundBeams } from "./ui/background-beams";
import { TracingBeam } from "./ui/tracing-beam";
import { PinContainer } from "./ui/3d-pin";
import { projects } from "@/components/data/projectData";
import { SparklesCore } from "./ui/sparkles";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="hero text-white bg-transparent relative">
      <BackgroundBeams className="absolute inset-0 w-full h-full" />
      <div className="h-[10rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md relative z-1">
        <h1 className="md:text-2xl text-3xl lg:text-5xl font-bold text-center text-white relative z-1">
          Projects
        </h1>
        <div className="w-[40rem] h-40 relative z-10">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>
      <TracingBeam className="px-8 relative z-1">
        <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
          {projects.map((item) => (
            <div
              className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
              key={item.id}
            >
              <PinContainer title={item.title} href={item.link}>
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                  <div
                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <Image
                      src={item.img}
                      alt={item.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                  <Image
                    src={item.img}
                    alt="cover"
                    layout="fill"
                    objectFit="cover"
                    className="z-10 absolute bottom-0"
                    style={{ objectFit: 'cover', borderRadius: '1rem' ,backgroundRepeat: 'no-repeat'}}
                  />
                </div>

                <h1 className="font-bold lg:text-xl md:text-xl text-base line-clamp-1">
                  {item.title}
                </h1>

                <p
                  className="lg:text-sm lg:font-normal font-light text-sm line-clamp-3 flex-wrap"
                  style={{ color: "#BEC1DD", margin: "1vh 0" }}
                >
                  {item.des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <Image
                          src={icon}
                          alt={`icon ${index}`}
                          width={44}
                          height={44}
                          className="p-2"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center items-center hover:text-rose-500 ">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex lg:text-xl md:text-xs text-sm text-purple"
                    >
                      Check Live Site
                    </a>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </div>
                </div>
              </PinContainer>
            </div>
          ))}
        </div>
      </TracingBeam>
    </section>
  );
};

export default Projects;
