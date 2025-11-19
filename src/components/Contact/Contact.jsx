import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { IoSend } from "react-icons/io5";
import { VscCode } from "react-icons/vsc";
import "react-toastify/dist/ReactToastify.css";
import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault(); //To prevent the default form submission behavior & page would not reload.

    emailjs
      .sendForm(
        "service_stsn0kk", // EmailJS Service ID
        "template_net32nr", // EmailJS Template ID
        form.current,
        "5zfV29eC4XjFhMKch" //EmailJS Public Key
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset(); // Reset the form fields after you sending your data.
          toast.success("Your message sent successfully! ✅", {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("❌ Failed to send your message..Please try again.", {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[6vw] md:px-[5vw] lg:px-[12vw]"
    >
      {/* Toast Container */}
      <ToastContainer />

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">CONTACT</h2>
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
        <p className="text-gray-600 mt-4 text-lg font-semibold">
          Interested in working together or have a question? Don't hesitate to
          reach out.
        </p>
      </div>

      {/* Contact Form */}
      <div className="mt-8 w-full max-w-lg bg-radial from-[#050414] from-50% to-[#2c076c] p-6 rounded-lg shadow-lg border border-gray-700">
        <h3 className="text-xl font-semibold text-white text-center flex items-center justify-center gap-1">
          GET IN TOUCH&nbsp; <VscCode className="text-[#0d6efd]" size={36} />
        </h3>
        <div className="w-56 h-1 bg-gradient-to-r from-[#8245ec] to-[#ff7f50] mx-auto mt-0 mb-5"></div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="mt-4 flex flex-col space-y-4"
        >
          <input
            required
            type="text"
            name="user_name"
            pattern="[A-Za-z\s.]{2,50}"
            placeholder="Your Name *"
            className="w-full p-3 rounded-md text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <input
            required
            type="email"
            name="user_email"
            placeholder="Your Email *"
            pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
            title="Please enter a valid email address"
            className="w-full p-3 rounded-md text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <input
            required
            type="text"
            name="subject"
            placeholder="Subject *"
            className="w-full p-3 rounded-md text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <textarea
            rows="5"
            name="message"
            placeholder="Message (Optional)"
            className="w-full p-3 rounded-md text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />

          {/* Send Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#6d28d9] to-[#a855f7] py-3 text-white font-semibold rounded-md hover:from-[#7c3aed] hover:to-[#c084fc] transition duration-500 hover:cursor-pointer hover:scale-105 flex items-center justify-center gap-2"
          >
            Send <IoSend className="text-md" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
