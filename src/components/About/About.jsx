import React from 'react'
import { motion } from "framer-motion";
import Tilt from 'react-parallax-tilt';
import Typewriter from 'typewriter-effect';
import profileImage from '../../assets/profile.jpg'
const About = () => {
  return (
    <section id='about' className="px-[6vw] md:px-[5vw] lg:px-[12vw] font-sans mt-16 md:mt-24 lg:mt-32">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8 md:gap-16 lg:gap-20">
        {/* left side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold  mb-2 leading-tight">Hi, I am</h1>
          <motion.h2
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight bg-gradient-to-r from-[#fc466b] to-[#3f5efb] bg-clip-text text-transparent bg-[length:200%_200%]"
            style={{
              backgroundImage: 'linear-gradient(to right, #fc466b, #3f5efb)',
              backgroundSize: '200% 200%',
              display: 'inline-block',
            }}
          >
            Ashutosh Pradhan
          </motion.h2>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span>I am a </span>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(100) // Initial delay
                  .typeString('MERN Stack Developer')
                  .pauseFor(1000)
                  .deleteAll(15) // Delete speed = 15ms per character
                  .typeString('Full Stack Developer')
                  .pauseFor(1000)
                  .deleteAll(15)
                  .typeString('React Developer')
                  .pauseFor(1000)
                  .deleteAll(15)
                  .typeString('Programmer')
                  .pauseFor(1000)
                  .deleteAll(15)
                  .start();
              }}
              options={{
                delay: 100, // Typing speed = 100ms per char
                loop: true,
                cursor: '<span class="text-[#8245ec]">|</span>', // Custom cursor
                wrapperClassName: 'inline',
              }}
            />
          </h3>
          {/* About Me Paragraph */}
          <p className="text-base text-justify sm:text-lg md:text-lg text-gray-600 mb-10 mt-4 leading-relaxed indent-14">Versatile and technically proficient Computer Science graduate with hands-on experience building responsive web applications using React.js, Node.js, Express.js, MongoDB, Tailwind CSS and Bootstrap. Skilled in full-stack development, RESTful API integration and modern JavaScript libraries and frameworks. Committed to delivering clean, maintainable code in Agile environments and collaborating effectively within engineering teams to build pixel-perfect, scalable, user-centric solutions.</p>

        </div>

        {/* Right Side */}

        <div>
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] rounded-full"
            tiltMaxAngleX={12}
            tiltMaxAngleY={12}
            perspective={1000}
            scale={1.02}
            transitionSpeed={600}
            gyroscope={true}
          >
            {/* Lens wrapper */}
            <div className="lens-wrapper relative w-full h-full rounded-full overflow-hidden">
              {/*  Animated Gradient Border */}
              <div className="absolute inset-0 rounded-full border-gradient-ring pointer-events-none" />

              {/* SVG filter defs (for convex/specular effect) */}
              <svg width="0" height="0" className="absolute">
                <defs>
                  <filter id="convexLens" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="0.3" result="blur" />
                    <feSpecularLighting in="blur" surfaceScale="2" specularConstant="0.4" specularExponent="20" lightingColor="white" result="specOut">
                      <fePointLight x="-200" y="-100" z="400" />
                    </feSpecularLighting>
                    <feComposite in="specOut" in2="SourceGraphic" operator="arithmetic" k1="0" k2="1" k3="0" k4="0" />
                  </filter>
                </defs>
              </svg>

              {/* Animated image */}
              <motion.img
                src={profileImage}
                alt="Ashutosh Pradhan"
                className="w-full h-full object-cover rounded-full transform-gpu"
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                loading="lazy"
              />

              {/* Glossy top highlight */}
              <div className="absolute top-0 left-0 w-full h-1/2 pointer-events-none">
                <div className="lens-highlight w-full h-full rounded-full" />
              </div>

              {/* Inner shadow for depth */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="lens-inner-shadow w-full h-full rounded-full" />
              </div>

              {/* Light refraction layer */}
              <div aria-hidden="true" className="absolute inset-0 rounded-full lens-filter-layer" />
            </div>
          </Tilt>

          {/* CV Button & Contact Me Button */}
          <div className="mt-6 md:mt-14 w-full flex flex-col md:flex-row items-center justify-center md:justify-center gap-3 md:gap-4">
            {/* Primary button - DOWNLOAD CV */}
            <a
              href="https://drive.google.com/file/d/1JRbm_fBUaUAIoaOJ4LUnpqOYhVNmhjN0/view"
              target="_blank"
              rel="noopener noreferrer"
              role="button"
              aria-label="Download CV (opens in new tab)"
              className="inline-block text-white py-3 px-7 rounded-full mt-3 text-lg font-semibold transition duration-300 transform hover:scale-105 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-[#6f3de0] hover:to-[#9333ea]"
            >
              DOWNLOAD CV
            </a>

            {/* Secondary button - CONTACT ME */}
            <a
              href="#contact"
              role="button"
              aria-label="Contact me"
              className="inline-block text-white py-3 px-8 rounded-full mt-3 text-lg font-semibold transition duration-300 transform hover:scale-105 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-[#6f3de0] hover:to-[#9333ea]"
            >
              CONTACT ME
            </a>
          </div>


        </div>
      </div>
    </section>
  )
}
export default About  