import React from "react";
import { BackgroundBeams } from "../components/ui/background-beams";
import Image from "next/image";
import profile from "../assets/profile.png";

const About: React.FC = () => {
  return (
    <section className="text-white relative">
      <BackgroundBeams />
      <h1 className="text-center text-2xl font-bold text-gray-300">About</h1>
      <div className="container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center justify-between">
        {/* Image section */}
        <div className="flex justify-center items-center w-full lg:w-1/2 mb-10 lg:mb-0">
          <div className="w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden">
            <Image src={profile} alt="profile image" layout="responsive" />
          </div>
        </div>

        {/* Bio section */}
        <div className="w-full lg:w-1/2 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold m-0">
          <p className="text-lg md:text-xl mb-8">
            I am a passionate frontend developer with a strong focus on <span className="text-blue-500">React.js</span>. I love creating beautiful and interactive web experiences.
            <br/><br/>
            In my free time, I enjoy exploring new technologies, experimenting with different design patterns, and contributing to open-source projects.
            <br/><br/>
            
            <br/><br/>
            My name is <span className="font-bold italic text-lime-500">Akashkumar Sahu</span>. I am a passionate Software Developer with a knack for creating elegant solutions and pushing the boundaries of technology. Skilled in <span className="text-yellow-500">Java</span>, <span className="text-red-500">JavaScript</span>, <span className="text-purple-500">MySQL</span>, <span className="text-indigo-500">HTML</span>, <span className="text-pink-500">CSS</span>, <span className="text-green-500">Tailwind CSS</span>, and <span className="text-teal-500">React</span>. I thrive in dynamic environments where I can apply my creativity and problem-solving abilities.
          </p>
          <button
  type="button"
  className=" text-center w-48 rounded-2xl h-14 relative font-sans text-black text-xl font-semibold group bg-transparent"
>
  <div
    className="bg-green-400 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-1 duration-500"
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

  </div>
  <p className="translate-x-2 text-white hover:opacity-0 transition-opacity">Resume</p>
</button>

        </div>
      </div>
    </section>
  );
};

export default About;
