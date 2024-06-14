import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
import profile from "../assets/Gitaa.jpg";
import collageImage from "../assets/sharwashreeCollage.jpg"
import schoolImage from "../assets/agarkarVidyaBhawan.jpeg"

const Education: React.FC = () => {
  const content = [
    {
      title: "Graduation",
      description: `Currently pursuing a Bachelor's degree in Computer Science from Gandhi Institute Of Technology and Advancement (GITA).
        Expected to graduate in 2025.
        GRADE: 8.45 CGPA`,
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
         <Image src={profile} alt="profile"  layout="responsive"/>
        </div>
      ),
    },
    {
      title: "12th Grade",
      description: `Completed 12th from HSC (Maharashtra State Board) with a focus on Physics, Chemistry, and Mathematics. 2020-21.
        GRADE: 88%`,
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src={collageImage}
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
      description: `Completed 10th SSC (Maharashtra State Board) from Agarkar Vidya Bhawan - 2019.
        GRADE: 69.60%`,
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          <Image
            src={schoolImage}
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
  ];

  return (
    <section id="education" className="hero text-white relative mt-8">
      <BackgroundBeams />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-3xl font-bold mb-6 text-center">Education</h1>
        <StickyScroll content={content} />
      </div>
    </section>
  );
};

export default Education;
