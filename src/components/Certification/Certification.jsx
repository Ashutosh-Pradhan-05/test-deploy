import React from "react";
import { motion } from "framer-motion";
import { certifications } from "../../constants";
import { RiPassValidFill } from "react-icons/ri";
import { PiCertificateFill } from "react-icons/pi";
import { FaCalendarCheck, FaIdCard } from "react-icons/fa";
import { FaRegCalendarDays, FaFileCircleCheck } from "react-icons/fa6";

const Certification = () => {
  const handleOpenModal = (cert) => {
    if (cert?.image) window.open(cert.image, "_blank", "noopener,noreferrer");
  };

  const handleOpenVerify = (cert) => {
    const verifyUrl = cert?.verifyLink;
    if (verifyUrl) window.open(verifyUrl, "_blank", "noopener,noreferrer");
    else alert("Verification link not available.");
  };

  return (
    <section
      id="certifications"
      className="py-24 px-[6vw] md:px-[5vw] lg:px-[12vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">CERTIFICATIONS</h2>
        <motion.div
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-80 h-3 mx-auto mt-2 bg-gradient-to-r from-[#fc466b] to-[#3f5efb] bg-[length:200%_200%]"
          style={{
            backgroundImage: "linear-gradient(to right, #fc466b, #3f5efb)",
            backgroundSize: "200% 200%",
            backgroundRepeat: "no-repeat",
          }}
        />
        <p className="text-gray-600 mt-4 text-lg font-semibold text-justify sm:text-lg md:text-center">
          A collection of globally recognized certifications showcasing my
          continuous learning, technical expertise, and commitment.
        </p>
      </div>

      {/* Certification Grid */}
      <div className="grid gap-20 md:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="relative overflow-visible border border-white/10 bg-radial from-[#050414] from-50% to-[#2c076c] rounded-2xl shadow-xl transition-transform transform hover:-translate-y-2 duration-300"
          >
            {/* Logo (square-like, wider, half outside) */}
            <div
              className="absolute left-1/2 -translate-x-1/2 -top-10 sm:-top-12 lg:-top-14 z-20"
              aria-hidden="true"
            >
              <div className="w-44 sm:w-48 lg:w-52 h-20 sm:h-22 lg:h-24 bg-white rounded-2xl border-4 border-purple-600 overflow-hidden shadow-xl flex items-center justify-center">
                <img
                  src={cert.orglogo}
                  alt={`${cert.organization} logo`}
                  className="w-60 h-80 object-contain"
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder-logo.png";
                  }}
                />
              </div>
            </div>

            {/* Card Body */}
            <div className="pt-16 sm:pt-20 lg:pt-24 px-5 pb-6">
              {/* Certificate Image */}
              <div
                className="flex items-center justify-center cursor-pointer"
                onClick={() => handleOpenModal(cert)}
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-auto max-h-[300px] rounded-xl object-contain transition-transform duration-300 hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder-certificate.png";
                  }}
                />
              </div>

              {/* Certificate Content */}
              <div className="mt-6">
                <h5 className="text-xl font-semibold text-white mb-2 text-left md:text-center">
                  {cert.title}
                </h5>

                <div className="w-full h-1 bg-gradient-to-r from-[#8245ec] to-[#ff7f50] mb-4" />
                {/* Line-by-line details (left-aligned) */}
                <div className="text-gray-300 text-sm space-y-2 text-left">
                  <div className="flex items-center gap-2">
                    {/* Company logo instead of icon */}
                    <div className="w-9 h-9 sm:w-9 sm:h-9 rounded-md overflow-hidden flex-shrink-0">
                      <img
                        src={cert.logo}
                        alt={`${cert.organization} logo`}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = "/placeholder-logo.png";
                        }}
                      />
                    </div>
                    {/* Organization name */}
                    <h4 className="text-3xl sm:text-3xl font-medium text-gray-200">
                      {cert.organization}
                    </h4>
                  </div>

                  <div className="flex items-center gap-2">
                    <FaCalendarCheck size={20} className="text-purple-400" />
                    <span>
                      Issued:{" "}
                      <span className="text-gray-300 font-bold">
                        {cert.issueddate}
                      </span>
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <RiPassValidFill size={20} className="text-purple-400" />
                    <span>
                      Score:{" "}
                      <span className="text-gray-300 font-bold">
                        {cert.score}
                      </span>
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <FaIdCard size={20} className="text-purple-400" />
                    <span>
                      Credential ID:{" "}
                      <span className="text-gray-300 font-bold">
                        {cert.cid}
                      </span>
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <FaRegCalendarDays size={20} className="text-purple-400" />
                    <span>
                      Valid:{" "}
                      <span className="text-gray-300 font-bold">
                        {cert.valid}
                      </span>
                    </span>
                  </div>
                </div>

                {/* Buttons - stacked layout (full width on all devices, wider on laptops) */}
                <div className="flex flex-col justify-center items-center gap-3 w-full mt-5">
                  <button
                    onClick={() => handleOpenModal(cert)}
                    className="w-full hover:cursor-pointer sm:w-4/5 lg:w-[85%] xl:w-[90%] bg-gradient-to-r from-pink-500 to-purple-600 hover:from-[#6f3de0] hover:to-[#9333ea] text-white px-6 py-2.5 rounded-xl text-sm sm:text-base font-semibold flex items-center justify-center gap-3 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-110"
                  >
                    <PiCertificateFill size={28} />
                    <span className="text-sm">View Credential</span>
                  </button>

                  <button
                    onClick={() => handleOpenVerify(cert)}
                    className="w-full hover:cursor-pointer sm:w-4/5 lg:w-[85%] xl:w-[90%] bg-gradient-to-r from-purple-600 to-pink-500 hover:from-[#6f3de0] hover:to-[#9333ea] hover:bg-white/5 text-white px-6 py-2.5 rounded-xl text-sm sm:text-base font-semibold flex items-center justify-center gap-3 shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300"
                  >
                    <FaFileCircleCheck size={26} />
                    <span className="text-sm">Verify Credential</span>
                  </button>
                </div>

                {/* End buttons */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certification;
