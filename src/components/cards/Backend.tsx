import React from 'react';
import Image from 'next/image';
import NodeJs from '../../svg/nodejs.svg';
import EcpressJs from '../../svg/express.svg';
import MongoDB from '../../svg/mongo-svg.svg';
import MySql from '../../svg/mysql.svg';
import RestApi from '../../svg/RestApisvg.svg';
import Graphql from '../../svg/graphql.svg';

const Backend = () => {
  const skills = [
    { name: 'Node.Js', icon: NodeJs },
    { name: 'Express', icon: EcpressJs },
    { name: 'MongoDB', icon: MongoDB },
    { name: 'MySQL', icon: MySql },
    { name: 'Rest APIs', icon: RestApi },
    { name: 'GraphQL', icon: Graphql },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-5 flex justify-center items-center">
      <div className="text-center w-full">
        <h1 className="text-2xl font-bold mb-4 text-white">Backend </h1>
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

export default Backend;
