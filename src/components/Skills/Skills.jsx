// Path main/src/components/Skills/Skills.jsx
import React from "react";
import { motion } from 'framer-motion';

import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";
const Skills = () => (
  <section
    id="skills"
    className="py-24 pb-24 px-[6vw] md:px-[5vw] lg:px-[12vw] font-sans bg-skills-gradient clip-path-custom"
  >
    {/* Section Title */}
    <div className="text-center mb-8">
      <h2 className="text-3xl sm:text-4xl font-bold">TECH &nbsp;STACKS</h2>
      {/* <div className="w-72 h-3 bg-gradient-to-r from-[#fc466b] to-[#3f5efb] mx-auto mt-2"></div> */}
      <motion.div
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="w-72 h-3 mx-auto mt-2 bg-gradient-to-r from-[#fc466b] to-[#3f5efb] bg-[length:200%_200%]"
        style={{
          backgroundImage: 'linear-gradient(to right, #fc466b, #3f5efb)',
          backgroundSize: '200% 200%',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <p className="text-gray-600 mt-4 text-lg font-semibold text-justify sm:text-lg md:text-center">
        A showcase of my technical competencies and expertise, developed through hands-on experience across diverse projects and real-world applications.      </p>
    </div>
    {/* Skill Categories */}
    <div className="flex flex-wrap gap-1 lg:gap-5 py-10 justify-between">
      {SkillsInfo.map((category) => (
        <div key={category.title}
          className="bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white 
          shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]">
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-1 text-center">
            {category.title}
          </h3>
          {/* //Horizontal line */}
          <div className="w-full h-1 bg-gradient-to-r from-[#8245ec] to-[#ff7f50] mx-auto mb-10"></div>
          {/* Skill Items - 2 items per row on larger screen */}
          <Tilt
            key={category.title}
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <div className="grid grid-cols-2 md:grid-cols-2 gap-3 w-full">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-center space-x-2 bg-transparent border-2 border-[#8245ec] rounded-3xl py-2 px-2 sm:py-2 sm:px-2 text-center"
                >
                  <motion.img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-6 h-6 sm:w-8 sm:h-8"
                    animate={{
                      scale: [1, 1.2, 1], // scales up and returns
                    }}
                    transition={{
                      duration: 1,          // duration of one full scale cycle
                      repeat: Infinity,     // repeat forever
                      ease: 'easeInOut',    // smooth ease
                    }}
                  />

                  <span className="text-xs sm:text-sm text-gray-300">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </Tilt>
        </div>
      ))}
    </div>
  </section>
);
export default Skills;