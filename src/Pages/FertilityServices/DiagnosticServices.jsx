import React from "react";
import { motion } from "framer-motion";
import { Activity, Dna, ClipboardList } from "lucide-react";
import { navBarHeight } from "../../utils/constants";

export default function DiagnosticServices() {
  const services = [
    {
      title: "Comprehensive Infertility Evaluation",
      icon: <ClipboardList className="w-12 h-12 text-[#9781bc]" />,
      description: "Detailed testing including blood, urine, immunological, and culture diagnostics."
    },
    {
      title: "Preimplantation Genetic Testing (PGT)",
      icon: <Dna className="w-12 h-12 text-[#9781bc]" />,
      description: "Identifies genetic abnormalities to enhance treatment outcomes."
    },
    {
      title: "Endometrial Receptivity Testing",
      icon: <Activity className="w-12 h-12 text-[#9781bc]" />,
      description: "Ensures the best timing for embryo transfer."
    }
  ];

  return (
    <div className={navBarHeight}>
    <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 min-h-screen">
      <section className="relative bg-[#9781bc] py-16 px-6 text-white">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center"
        >
          Diagnostic & Genetic Services
        </motion.h1>
      </section>

      <section className="max-w-6xl mx-auto py-16 px-6">
        <div className="space-y-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-[#9781bc]"
            >
              <div className="flex items-start gap-6">
                <div className="bg-purple-100 p-4 rounded-xl flex-shrink-0">
                  {service.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">
                    {service.title}
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {service.description}
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