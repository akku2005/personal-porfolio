import React from 'react';
import Image from 'next/image';
import JavaIcon from '../../assets/java.png';

const FrontendCard = () => {
  const skills = [
    { name: 'HTML', icon: JavaIcon },
    { name: 'CSS', icon: JavaIcon },
    { name: 'JavaScript', icon: JavaIcon },
    { name: 'Tailwind', icon: JavaIcon },
    { name: 'React Js', icon: JavaIcon },
  ];

  return (
    <div className=" rounded-2xl p-5 m-5 flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4 text-white">Frontend</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center p-4 bg-white/30 backdrop-blur-md rounded-xl shadow-md">
              <Image src={skill.icon} alt={skill.name} width={40} height={40} className="w-10 h-10" />
              <p className="mt-2 text-lg text-white">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FrontendCard;
