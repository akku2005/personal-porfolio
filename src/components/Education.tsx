import React from "react";
import { BackgroundBeams } from "../components/ui/background-beams";
import { StickyScroll } from "../components/ui/sticky-scroll-reveal";
import Image from "next/image";
import profile from "../assets/profile.png"

const Education: React.FC = () => {
  const content = [
    {
      title: "Graduation",
      description:
        "Currently pursuing a Bachelor's degree in Computer Science from Gandhi Institute Of Technology and Advancement (GITA). Expected to graduate in 2025.Expected 2025",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white ">
          Graduation
        </div>
      ),
    },
    {
      title: "12th Grade",
      description:
        "Completed 12th grade from HSC Senior Secondary School with a focus on Physics, Chemistry, and Mathematics.2020-21",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/linear.webp"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "10th Grade",
      description:
        "Currently pursuing a Bachelor's degree in Computer Science from Gandhi Institute Of Technology and Advancement (GITA). Expected to graduate in 2025.Expected 2025",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          10th Grade
        </div>
      ),
    }
  ];
  return (
    <section className="hero text-white relative mt-8">
      <BackgroundBeams /> 
      <div className="container mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold mb-6 text-center">Education</h1>
      <StickyScroll content={content} />
      </div>

    </section>
  );
};

export default Education;
