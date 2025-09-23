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
      className="bg-gray-50 py-20 px-4 md:px-10 lg:px-20"
    >
      <div className=" mx-auto text-center">
        {/* <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-[heading] text-[#9781bc] mb-12"
        >
          Fertility Treatments We Offer
        </motion.h2> */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
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
              className="relative bg-white rounded-xl p-5 text-center transition duration-300 overflow-hidden group h-44 flex flex-col items-center justify-center"
            >
              {/* Animated border box */}
              <motion.div
                className="absolute inset-0 rounded-xl border-2 border-[#9781bc]"
                initial={{ opacity: 0, scale: 0.9 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              />

              <div className="relative z-10 flex flex-col items-center">
                <div className="mb-3">{treatment.icon}</div>
                <h3 className="text-base font-semibold text-gray-800 mb-1">
                  {treatment.title}
                </h3>
                <p className="text-gray-600 text-sm leading-snug">
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
