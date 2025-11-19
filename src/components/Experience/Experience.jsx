import React from "react";
import { motion } from "framer-motion";
import { BsBuildings } from "react-icons/bs";
import { experiences } from "../../constants";
import { IoLocationOutline, IoCalendarOutline } from "react-icons/io5";
import { HiExternalLink, HiOutlineBriefcase } from "react-icons/hi";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 pb-24 px-[6vw] md:px-[5vw] lg:px-[12vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">EXPERIENCE</h2>
        {/* <div className="w-72 h-3 bg-gradient-to-r from-[#fc466b] to-[#3f5efb] mx-auto mt-2"></div> */}
        <motion.div
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-72 h-3 mx-auto mt-2 bg-gradient-to-r from-[#fc466b] to-[#3f5efb] bg-[length:200%_200%]"
          style={{
            backgroundImage: "linear-gradient(to right, #fc466b, #3f5efb)",
            backgroundSize: "200% 200%",
            backgroundRepeat: "no-repeat",
          }}
        />
        <p className="text-gray-600 mt-4 text-lg font-semibold text-justify sm:text-lg md:text-center">
          A glimpse of my work experience and the roles & responsibilities I
          have undertaken with these tech organizations.
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="relative min-h-screen">
        {/* Vertical line */}
        <div className="absolute left-1 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-gray-400 h-full z-0"></div>

        {/* Experience Entries */}
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
            }`}
          >
            {/* Timeline Circle */}
            <div className="absolute left-4 md:hidden transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 rounded-full flex justify-center items-center z-10">
              <img
                src={experience.img}
                alt={experience.company}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Content Section */}
            <div
              className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl border border-white bg-radial from-[#050414] from-50% to-[#2c076c] backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.7)] ${
                index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
              } sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105`}
            >
              {/* Flex container for image and text */}
              <div className="flex items-center space-x-2">
                {/* Company Logo/Image */}
                <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Role, Company Name, and Date */}
                <div className="flex flex-col justify-between">
                  <div className="flex items-center space-x-1">
                    <HiOutlineBriefcase className="text-white text-xl" />
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">
                      {experience.role}
                    </h3>
                    {/* Certificate Link */}
                    <a
                      href={experience.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <HiExternalLink className="text-white text-xl sm:text-2xl hover:text-[#8245ec]" />
                    </a>
                  </div>
                  <div className="flex items-center gap-1 flex-wrap">
                    <BsBuildings className="text-gray-300 text-sm sm:text-base" />
                    <h4 className="text-sm text-gray-300">
                      {experience.company}
                    </h4>
                    <a
                      href={experience.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <HiExternalLink className="text-gray-300 text-base sm:text-lg hover:text-[#8245ec]" />
                    </a>
                  </div>

                  <div className="flex items-center space-x-1 mt-1">
                    <IoLocationOutline className="text-gray-300" />
                    <p className="text-sm text-gray-300">
                      {experience.location}
                    </p>
                  </div>
                  {/* Date at the bottom */}
                  <div className="flex items-center space-x-1 mt-1">
                    <IoCalendarOutline className="text-gray-300" />
                    <p className="text-sm text-gray-300">{experience.date}</p>
                  </div>
                </div>
              </div>

              <p className="mt-4 text-gray-400 text-justify indent-10">
                {experience.desc}
              </p>
              <div className="mt-4">
                <span className="font-medium text-white h-4">
                  Used Tech Stacks:
                  <ul className="flex flex-wrap mt-2">
                    {experience.skills.map((skill, index) => (
                      <li
                        key={index}
                        className="bg-[#8245ec] text-gray-300 px-2 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400 text-center"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
