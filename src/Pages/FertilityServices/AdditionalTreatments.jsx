import React from "react";
import { motion } from "framer-motion";
import { Heart, Users, Stethoscope, MessageCircle } from "lucide-react";
import { navBarHeight } from "../../utils/constants";

export default function AdditionalTreatments() {
  const treatments = [
    {
      title: "Fertility Preservation",
      icon: <Heart className="w-12 h-12 text-[#9781bc]" />,
      description: "Options for patients undergoing medical treatments that may affect fertility."
    },
    {
      title: "Third-Party Reproduction",
      icon: <Users className="w-12 h-12 text-[#9781bc]" />,
      description: "Guidance and services for egg/sperm donation and surrogacy."
    },
    {
      title: "Surgical Sperm Retrieval",
      icon: <Stethoscope className="w-12 h-12 text-[#9781bc]" />,
      description: "Minimally invasive procedures (TESA, PESA, TESE, MESA) to retrieve sperm when needed."
    },
    {
      title: "Counselling & Psychological Support",
      icon: <MessageCircle className="w-12 h-12 text-[#9781bc]" />,
      description: "Compassionate support throughout your fertility journey."
    }
  ];

  return (
    <div className={navBarHeight}>
    <div className="bg-gradient-to-br from-[#fdfbff] via-[#f7f1ff] to-[#e9dcff] min-h-screen">
      <section className="relative bg-[#9781bc] py-16 px-6 text-white">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center"
        >
          Additional Treatments & Support
        </motion.h1>
      </section>

      <section className="max-w-6xl mx-auto py-16 px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {treatments.map((treatment, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-[#9781bc]"
            >
              <div className="flex items-start gap-6">
                <div className="bg-purple-100 p-4 rounded-xl flex-shrink-0">
                  {treatment.icon}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-800 mb-3">
                    {treatment.title}
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {treatment.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
    </div>
  );
}
