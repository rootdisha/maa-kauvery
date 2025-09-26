import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Calendar, CheckCircle } from "lucide-react";
import IVFImage from "../Images/charlesdeluvio-nENtqUAiNm8-unsplash.jpg"; 
import AppointmentForm from "../Components/AppointmentForm";
import { maakauveryPhone } from "../utils/constants";

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// Full width background image - Enhanced responsive version
export default function IVFSectionBackgroundImage() {
  const [showAppointmentForm, setShowAppointmentForm] = useState(false);

  const ivfReasons = [
    "Low sperm count",
    "Poor egg quality", 
    "Uterus or Fallopian tube issues",
    "Ovulation problems",
    "Unidentified infertility issues",
  ];

  return (
    <section className="relative w-full overflow-hidden min-h-[600px] sm:min-h-[700px] lg:min-h-[800px]">
      {/* Full-width background container */}
      <div className="relative w-full h-full">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={IVFImage}
            alt="Mother and Baby"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#876dad]/40 via-[#9781bc]/35 to-purple-100/30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
        </div>

        {/* Content Over Background */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-24">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="max-w-3xl lg:max-w-4xl"
            >
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight text-[#70308A]"
              >
                Why opt for In-Vitro Fertilization (IVF)?
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 md:mb-10 leading-relaxed text-[#70308A] max-w-2xl"
              >
                In-Vitro fertilization (IVF) is the most effective fertility treatment available today.
                IVF treatments offer the highest success rates and quickest time-to-pregnancy.
              </motion.p>

              <motion.ul 
                variants={listVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-3 sm:space-y-4 mb-8 sm:mb-10 md:mb-12"
              >
                {ivfReasons.map((item, idx) => (
                  <motion.li
                    key={idx}
                    variants={itemVariants}
                    className="flex items-center gap-3 sm:gap-4 text-base sm:text-lg md:text-xl text-[#70308A] group"
                  >
                    <div className="w-2 h-2 bg-[#876dad] rounded-full flex-shrink-0"></div>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6"
              >
                <a
                  href={`tel:${maakauveryPhone}`}
                  className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-white text-pink-600 
                  hover:bg-pink-50 px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full shadow-lg hover:shadow-xl 
                  transition-all duration-300 font-semibold text-sm sm:text-base md:text-lg group min-w-fit"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" /> 
                  <span className="hidden sm:inline">Call:</span> {maakauveryPhone}
                </a>
                <button 
                  className="inline-flex items-center justify-center gap-2 sm:gap-3 
                    bg-[#B83A63] text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full 
                    shadow-lg hover:shadow-xl hover:bg-pink-700 transition-all duration-300 font-semibold 
                    text-sm sm:text-base md:text-lg group"
                  onClick={() => setShowAppointmentForm(true)} 
                >
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" /> 
                  Book An Appointment
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <AppointmentForm 
        isOpen={showAppointmentForm} 
        onClose={() => setShowAppointmentForm(false)} 
      />
    </section>
  );
}

