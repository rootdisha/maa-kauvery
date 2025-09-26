import React from "react";
import { motion } from "framer-motion";
import { FaClinicMedical } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { GiBabyBottle } from "react-icons/gi";
import { Users, Award, Heart } from "lucide-react";

const statsData = [
  {
    number: "15+",
    label: "Years of Excellence",
    icon: <Award size={24} className="text-purple-200" />,
  },
  {
    number: "10,000+",
    label: "Happy Families",
    icon: <Users size={24} className="text-purple-200" />,
  },
  {
    number: "85%+",
    label: "Success Rate",
    icon: <Heart size={24} className="text-purple-200" />,
  },
  {
    number: "12",
    label: "Locations",
    icon: <MdLocationOn size={24} className="text-purple-200" />,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const statVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.1 + 0.8,
      duration: 0.5,
      ease: "backOut",
    },
  }),
};

export default function StatsSection() {
  return (
    <section className="bg-[#9781bc] text-purple-100 py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight"
          >
            Maa Kauvery is India&apos;s leading fertility care provider and the
            first to follow international protocols.
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            variants={itemVariants}
            className="max-w-5xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl text-purple-50 leading-relaxed mb-8 sm:mb-12 md:mb-16 px-4"
          >
            With highest success rates, an expert team of fertility specialists, trained embryologists,
            counsellors, fertility trained nurses we support you in each step of your fertility journey.
            We offer fertility treatment with uncompromising ethics, transparent pricing, patient-centric
            approach with highest quality of care.
          </motion.p>

          {/* Stats Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mt-8 sm:mt-12"
          >
            {statsData.map((stat, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={statVariants}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 text-center border border-white/20 hover:border-white/40 transition-all duration-300 group"
              >
                <div className="flex justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 sm:mb-2">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm md:text-base lg:text-lg text-purple-200 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom decorative element */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 sm:mt-16 md:mt-20 flex justify-center"
          >
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-transparent via-purple-200 to-transparent rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}