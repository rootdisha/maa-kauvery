import React from "react";
import { motion } from "framer-motion";
import { FaUser, FaPhone } from "react-icons/fa";
import BgImg from "../Images/8682612.jpg"; // check path
import bby from "../assets/Baby.json"
import Lottie from "lottie-react";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-[#9781bc] to-white overflow-hidden">
      <Lottie animationData={bby} className="w-150 absolute"/>
      {/* subtle overlay pattern */}
      <div className="absolute inset-0 bg-[url('/patterns/dots.svg')] opacity-10" />

      <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-0 items-stretch">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-7 bg-white p-10 md:p-12 rounded-xl shadow-2xl flex flex-col justify-center"
        >
          <h1 className="text-4xl md:text-5xl font-[hng] text-purple-800 leading-tight tracking-wide">
            Build the Family <br /> You Dream Of
          </h1>
          <p className="text-gray-700 text-lg">
            Compassionate IVF care with personalized treatment plans for every journey.
          </p>

          {/* FREE OFFER BOX */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative border border-purple-700 rounded-xl p-6 bg-white shadow-md"
          >
            <span className="absolute -top-4 left-4 bg-purple-700 text-white px-4 py-1 rounded-md font-semibold shadow">
              FREE
            </span>
            <p className="text-gray-800 mt-4 font-medium">
              Consultation | Ultrasound | Registration | Semen Analysis
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Tailored IVF treatment packages for your needs
            </p>
          </motion.div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative flex items-center justify-center p-6 md:p-8"
          style={{
            backgroundImage: `url(${BgImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 w-full max-w-md">
            <h2 className="text-2xl font-semibold text-purple-800 mb-6 text-center">
              Book a Free Consultation
            </h2>
            <form className="space-y-4">
              <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-700 focus:outline-none transition">
                <option value="">Select Location</option>
                <option>Chennai - Vadapalani</option>
                <option>Chennai - Radial Road</option>
                <option>Chennai – Alwarpet</option>
                <option>Trichy – Cantonment</option>
                <option>Trichy – Heart City</option>
                <option>Trichy – Tennur</option>
                <option>Tirunelveli</option>
                <option>Salem</option>
                <option>Hosur</option>
                <option>Bengaluru – Electronic City</option>
                <option>Bengaluru – Marathahalli</option>
                <option>MAA Kauvery Trichy</option>
              </select>

              <div className="relative">
                <FaUser className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full pl-10 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-700 focus:outline-none transition"
                />
              </div>

              <div className="relative">
                <FaPhone className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="tel"
                  placeholder="Your Phone Number"
                  className="w-full pl-10 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-700 focus:outline-none transition"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-purple-700 text-white font-semibold py-3 rounded-lg hover:bg-purple-800 active:scale-95 transition transform"
              >
                SEND REQUEST
              </button>
              <p className="text-xs text-gray-600 mt-2 text-center">
                By submitting you accept our{" "}
                <a
                  href="#"
                  className="underline text-purple-700 hover:text-purple-800"
                >
                  Privacy Policy
                </a>.
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
