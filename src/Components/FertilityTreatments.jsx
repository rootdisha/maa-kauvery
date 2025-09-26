import React from "react";
import { motion } from "framer-motion";
import {
  Baby,
  FlaskConical,
  Syringe,
  TestTube,
  UserPlus,
  HeartPulse,
} from "lucide-react";

const fertilityTreatments = [
  {
    title: "IVF",
    description: "Eggs fertilized outside & transferred to uterus.",
    icon: <FlaskConical size={36} className="text-[#9781bc]" />,
  },
  {
    title: "IUI",
    description: "Washed sperm placed directly in the uterus.",
    icon: <Syringe size={36} className="text-[#9781bc]" />,
  },
  {
    title: "Ovulation Induction",
    description: "Medication to stimulate ovulation.",
    icon: <TestTube size={36} className="text-[#9781bc]" />,
  },
  {
    title: "Male Infertility",
    description: "Treatments for sperm count & motility issues.",
    icon: <UserPlus size={36} className="text-[#9781bc]" />,
  },
  {
    title: "Fertility Preservation",
    description: "Egg & sperm freezing for future use.",
    icon: <HeartPulse size={36} className="text-[#9781bc]" />,
  },
  {
    title: "Fertility Surgery",
    description: "Minimally invasive laparoscopic procedures.",
    icon: <Baby size={36} className="text-[#9781bc]" />,
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      type: "spring",
      stiffness: 120,
    },
  }),
};

const FertilityTreatments = () => {
  return (
    <section
      id="fertility-treatments"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 bg-[#9781bc]"
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-purple-100 mb-8 sm:mb-10 md:mb-12 font-[pop] px-4"
        >
          Fertility Treatments We Offer
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-5 md:gap-6">
          {fertilityTreatments.map((treatment, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariant}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 6px 20px rgba(151,129,188,0.35)",
              }}
              className="relative bg-purple-100 rounded-xl p-4 sm:p-5 text-center transition duration-300 overflow-hidden group h-40 sm:h-44 md:h-48 lg:h-44 flex flex-col items-center justify-center"
            >
              {/* Animated border box */}
              <motion.div
                className="absolute inset-0 rounded-xl border-2 border-[#9781bc]"
                initial={{ opacity: 0, scale: 0.9 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              />

              <div className="relative z-10 flex flex-col items-center space-y-2 sm:space-y-3">
                <div className="flex-shrink-0">
                  <div className="hidden sm:block">
                    {React.cloneElement(treatment.icon, {
                      size: 36,
                      className: "text-[#9781bc]"
                    })}
                  </div>
                  <div className="block sm:hidden">
                    {React.cloneElement(treatment.icon, {
                      size: 28,
                      className: "text-[#9781bc]"
                    })}
                  </div>
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 leading-tight">
                  {treatment.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-snug px-1">
                  {treatment.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FertilityTreatments;