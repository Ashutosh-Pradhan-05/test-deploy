import React from 'react'
import { motion } from 'framer-motion';
import { education } from "../../constants";
import { GiMedallist } from "react-icons/gi";
import { FaSchoolFlag } from "react-icons/fa6";
import { FaUserGraduate } from "react-icons/fa";
import { IoLocation, IoCalendar } from "react-icons/io5";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[6vw] md:px-[5vw] lg:px-[12vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">EDUCATION</h2>
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
        <p className="text-gray-600 mt-4 text-lg font-semibold text-justify sm:text-lg md:text-center">An overview of my academic background, reflecting a continuous journey of learning, growth, and intellectual development.</p>
      </div>

      {/* Education Timeline */}
      <div className="relative min-h-screen">
        {/* Vertical line */}
        <div className="absolute left-1 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-gray-400 h-full z-0"></div>

        {/* Education Entries */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
              }`}
          >
            {/* Timeline Circle */}
            <div className="absolute left-4 md:hidden transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 rounded-full flex justify-center items-center z-10">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Content Section */}
            <div className={`w-full sm:max-w-md p-4 sm:p-6 rounded-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.7)]  ${index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"} sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105`}>
              {/* Flex container for image and text */}
              <div className="flex items-center space-x-1 md:space-x-3">
                {/* Academy Logo/Image */}
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Degree, School Name, Location and Date */}
                <div className="flex flex-col justify-between space-y-1">
                  <div className="flex items-center space-x-1 text-white text-sm sm:text-base">
                    <FaUserGraduate />
                    <h3 className="font-semibold">{edu.degree}</h3>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-300 text-sm sm:text-base">
                    <FaSchoolFlag />
                    <h4>{edu.school}</h4>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-300 text-sm sm:text-base">
                    <IoLocation />
                    <p>{edu.location}</p>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-300 text-sm sm:text-base">
                    <IoCalendar />
                    <p>{edu.date}</p>
                  </div>
                </div>
              </div>

              {/* Score */}
              <div className="flex items-center space-x-1 text-white font-semibold text-sm sm:text-base mt-4">
                <GiMedallist size={20} />
                <p>{edu.grade}</p>
              </div>

              {/* Description */}
              <p className="mt-2 text-gray-400 text-sm text-justify indent-10">{edu.desc}</p>
            </div>

          </div>
        ))}
      </div>
    </section>
  )
}
export default Education