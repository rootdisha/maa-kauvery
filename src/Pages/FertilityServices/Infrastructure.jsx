import React from "react";
import { motion } from "framer-motion";
import { Building2, Microscope, Cpu, Shield } from "lucide-react";

export default function Infrastructure() {
  const features = [
    {
      title: "Advanced Technology & Infrastructure",
      items: [
        "Cutting-edge IVF laboratories equipped with the latest diagnostic and imaging tools",
        "High-tech incubators, AI-based sperm analysis, 3D ultrasound scanning, and more"
      ]
    }
  ];

  const highlights = [
    {
      title: "Laboratory Excellence",
      icon: <Microscope className="w-12 h-12 text-[#9781bc]" />,
      desc: "State-of-the-art IVF laboratories with controlled environments and advanced equipment for optimal treatment outcomes."
    },
    {
      title: "Diagnostic Precision",
      icon: <Cpu className="w-12 h-12 text-[#9781bc]" />,
      desc: "Advanced imaging and diagnostic tools to provide accurate assessments and personalized treatment plans."
    },
    {
      title: "World-Class Facilities",
      icon: <Building2 className="w-12 h-12 text-[#9781bc]" />,
      desc: "Modern facilities designed to provide comfort and the highest quality care throughout your journey."
    },
    {
      title: "Safety & Quality",
      icon: <Shield className="w-12 h-12 text-[#9781bc]" />,
      desc: "Strict quality control measures and international safety standards in all our procedures."
    }
  ];

  return (
    <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 min-h-screen">
      <section className="relative bg-[#9781bc] py-16 px-6 text-white">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center"
        >
          Technology & Infrastructure
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-4 text-lg max-w-3xl mx-auto"
        >
          At Kauvery Hospital, our modern facilities and advanced equipment are dedicated to ensuring you receive the highest quality care.
        </motion.p>
      </section>

      <section className="max-w-6xl mx-auto py-16 px-6">
        {/* Main Feature */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-8 mb-12 shadow-lg"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            {features[0].title}
          </h2>
          <ul className="space-y-4">
            {features[0].items.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#9781bc] rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 text-lg">{item}</p>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {highlights.map((highlight, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + (idx * 0.1) }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="bg-purple-100 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                {highlight.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {highlight.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {highlight.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
