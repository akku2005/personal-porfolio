import React from 'react';
import Image from 'next/image';
import htmlIcon from '../../svg/html-5svg.svg';
import cssIcon from '../../svg/css-3svg.svg';
import jsIcon from '../../svg/javascriptsvg.svg';
import tailwindIcon from '../../svg/tailwindcsssvg.svg';
import reactIcon from '../../svg/reactjs.svg';
import nextjs from '../../svg/nextjs-icon-svgrepo-com.svg';

const FrontendCard = () => {
  const skills = [
    { name: 'HTML', icon: htmlIcon },
    { name: 'CSS', icon: cssIcon },
    { name: 'JavaScript', icon: jsIcon },
    { name: 'Tailwind', icon: tailwindIcon },
    { name: 'React Js', icon: reactIcon },
    { name: 'Next JS', icon: nextjs },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-5 flex justify-center items-center">
      <div className="text-center w-full">
        <h1 className="text-2xl font-bold mb-4 text-white">Frontend</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center p-4 bg-white/30 backdrop-blur-md rounded-xl shadow-md overflow-hidden"
            >
              <Image
                src={skill.icon}
                alt={skill.name}
                width={80}
                height={80}
                className="w-20 h-20"
              />
              <p className="mt-2 text-sm sm:text-lg text-white">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FrontendCard;
