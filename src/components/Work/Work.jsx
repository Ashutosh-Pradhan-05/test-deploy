import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoEye } from "react-icons/io5";
import { ImUndo2 } from "react-icons/im";
import { projects } from "../../constants";
import { LuExternalLink } from "react-icons/lu";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="work"
      className="py-24 pb-24 px-[6vw] md:px-[5vw] lg:px-[12vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">PROJECTS</h2>
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
          A curated selection of my personal projects that demonstrate my
          technical expertise, problem-solving abilities, critical thinking
          skills, real-world projects and hands-on experience across diverse
          technologies and development environments.{" "}
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 ">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border border-white bg-radial from-[#050414] from-50% to-[#2c076c] backdrop-blur-md rounded-2xl shadow-lg overflow-hidden hover:shadow-purple-500/90 hover:-translate-y-2 transition-transform duration-500"
          >
            <div className="p-4" onClick={() => handleOpenModal(project)}>
              <img
                src={project.image}
                alt={project.title}
                className="w-full max-h-80 object-cover rounded-xl cursor-pointer transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2 text-center">
                {project.title}
              </h3>
              <div className="w-full h-1 bg-gradient-to-r from-[#8245ec] to-[#ff7f50] mx-auto" />
              <p className="text-gray-400 mb-4 pt-4 line-clamp-3 text-justify">
                {project.description}
              </p>
              <div className="mb-4">
                <span className="font-medium text-white mb-2 h-4">
                  Used Tech Stacks:{" "}
                </span>
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1 mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {/* Full Project Button - Centered */}
              <div className="flex justify-center">
                <button
                  onClick={() => handleOpenModal(project)}
                  className="bg-purple-600 hover:bg-purple-800 text-white px-6 py-2 rounded-xl text-sm sm:text-base font-semibold flex items-center justify-center gap-2 cursor-pointer hover:scale-110 transition-all duration-200"
                >
                  <IoEye className="text-lg sm:text-xl" />
                  View Project
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Container */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
          <div className="bg-gray-900 rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative">
            <div className="flex justify-end p-4">
              <button
                onClick={handleCloseModal}
                className="bg-purple-600 hover:bg-purple-800 text-white px-3 py-1 rounded-xl text-sm sm:text-base font-semibold flex items-center justify-center gap-2 cursor-pointer"
              >
                <ImUndo2 className="text-lg sm:text-xl" />
                Back
              </button>
            </div>

            <div className="flex flex-col">
              <div className="w-full flex justify-center bg-gray-900 px-4">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="lg:w-full w-[95%] object-contain rounded-xl shadow-2xl"
                />
              </div>
              <div className="lg:p-8 p-6">
                <div className="flex items-center gap-2 md:gap-4 mb-4">
                  <h3 className="text-md lg:text-3xl font-bold text-white">
                    {selectedProject.title}
                  </h3>
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-600 hover:bg-purple-800 text-white text-xs lg:text-sm font-semibold px-1 py-0.5 rounded-lg transition duration-300 flex items-center gap-1"
                  >
                    View{" "}
                    <LuExternalLink className="text-white text-sm lg:text-base" />
                  </a>
                </div>

                <p className="text-gray-400 mb-6 lg:text-base text-xs text-justify indent-10">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <h5 className="font-medium text-white">Used Tech Stacks:</h5>
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
