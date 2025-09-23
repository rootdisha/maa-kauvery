import React from "react";
import { motion } from "framer-motion";
import { FaCaretRight } from "react-icons/fa";
import LabImg from "../Images/young-hispanic-man-wearing-doctor-uniform-analysing-urine-test-tube-clinic.jpg"; // replace with your image path

export default function FertilityServices() {
  const services = [
    "INFERTILITY ASSESSMENT",
    "IN-VITRO FERTILISATION – INTRA CYTOPLASMIC SPERM INJECTION (IVF-ICSI)",
    "FERTILITY ENHANCING SURGERIES",
    "GENETIC TESTING (PGT)",
    "FREEZING – EGG, SPERM, EMBRYOS",
    "PRESERVATION FOR CANCER PATIENTS",
  ];

  return (
    <section className="bg-[#9781bc] py-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src={LabImg}
            alt="Lab Technician"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </motion.div>

        {/* Right Services */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Fertility Services
          </h2>

          <ul className="space-y-3">
            {services.map((item, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center justify-between rounded-md px-4 py-3 shadow-sm
                  ${idx % 2 === 0 ? "bg-white/20" : "bg-white/10"} 
                  text-white`}
              >
                <div className="flex items-center gap-3">
                  <FaCaretRight className="text-white text-lg" />
                  <span className="font-medium">{item}</span>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
    