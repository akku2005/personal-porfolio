import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import Image from "next/image";
import profile from "../assets/profile.png";

const About: React.FC = () => {
  const resumeLink = "https://drive.google.com/file/d/1mGQ502fnGPVAtL15pqGFiZf392UnQVp6/view?usp=drive_link";

  return (
    <section id="about" className="text-white relative">
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
            I am a passionate full-stack developer with a strong focus on <span className="text-blue-500">Node.js</span> and <span className="text-teal-500">React.js</span>. I love creating seamless and interactive web experiences.
            <br/><br/>
            In my free time, I enjoy exploring new technologies, experimenting with different design patterns, and contributing to open-source projects.
            <br/><br/>
            My name is <span className="font-bold italic text-lime-500">Akashkumar Sahu</span>. I am a passionate Software Developer with a knack for creating elegant solutions and pushing the boundaries of technology. Skilled in <span className="text-yellow-500">Java</span>, <span className="text-red-500">JavaScript</span>, <span className="text-purple-500">MySQL</span>, <span className="text-indigo-500">HTML</span>, <span className="text-pink-500">CSS</span>, <span className="text-green-500">Tailwind CSS</span>, <span className="text-teal-500">React</span>, and <span className="text-green-500">Node.js</span>. I thrive in dynamic environments where I can apply my creativity and problem-solving abilities.
            <br/><br/>
            During my internship at <span className="text-pink-500 font-bold">FINTECK</span>, I worked on several projects, which included developing RESTful APIs using Node.js, creating interactive user interfaces with React.js, and managing databases with MongoDB. I gained valuable experience in both front-end and back-end development, and I am excited to bring this expertise to future projects.
          </p>
          <a
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block text-xl font-semibold text-black group"
            download
          >
            <span className="bg-green-400 rounded-xl h-14 w-48 flex items-center justify-center group-hover:bg-green-500 transition duration-300 ease-in-out">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <span className="ml-2 text-white">Resume</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
