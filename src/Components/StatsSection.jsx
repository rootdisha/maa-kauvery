import React from "react";
import { motion } from "framer-motion";
import { FaClinicMedical } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { GiBabyBottle } from "react-icons/gi";

export default function StatsSection() {
  const stats = [
    { icon: <FaClinicMedical className="text-4xl text-[#9C2F4B]" />, number: "102", label: "Centers" },
    { icon: <MdLocationOn className="text-4xl text-[#9C2F4B]" />, number: "63", label: "Cities" },
    { icon: <GiBabyBottle className="text-4xl text-[#9C2F4B]" />, number: "89357+", label: "IVF Pregnancies" },
  ];

  return (
    <section className="bg-[#B83A63] text-purple-100 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Top Stats */}
        {/* <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 mb-12">
          {stats.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="relative bg-white rounded-full border-4 border-white p-8 flex flex-col items-center shadow-lg w-48 h-48 justify-center"
            >
              {item.icon}
              <p className="text-3xl font-bold text-[#3498b1] mt-2">{item.number}</p>
              <p className="text-black font-semibold">{item.label}</p>
            </motion.div>
          ))}
        </div> */}

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold mb-4"
        >
          Maa Kauvery is India&apos;s leading fertility care provider and the
          first to follow international protocols.
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-sm md:text-base text-gray-100 leading-relaxed"
        >
          With highest success rates, an expert team of fertility specialists, trained embryologists,
          counsellors, fertility trained nurses we support you in each step of your fertility journey.
          We offer fertility treatment with uncompromising ethics, transparent pricing, patient-centric
          approach with highest quality of care.
        </motion.p>
      </div>
    </section>
  );
}
