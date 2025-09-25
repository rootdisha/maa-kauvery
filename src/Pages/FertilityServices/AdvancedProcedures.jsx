import React from "react";
import { motion } from "framer-motion";
import { Snowflake, Zap, TestTube } from "lucide-react";
import { navBarHeight } from "../../utils/constants";

export default function AdvancedProcedures() {
  const procedures = [
    {
      title: "In Vitro Maturation (IVM)",
      icon: <TestTube className="w-12 h-12 text-[#9781bc]" />,
      description: "Eggs are matured outside the body and then used in conjunction with IVF."
    },
    {
      title: "Laser-Assisted Hatching",
      icon: <Zap className="w-12 h-12 text-[#9781bc]" />,
      description: "A precise laser technique to assist the embryo in the hatching process, improving implantation success."
    },
    {
      title: "Cryopreservation",
      icon: <Snowflake className="w-12 h-12 text-[#9781bc]" />,
      description: "Safe freezing and storage of eggs, sperm, or embryos for future use."
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
          Advanced Fertility Procedures
        </motion.h1>
      </section>

      <section className="max-w-6xl mx-auto py-16 px-6">
        <div className="space-y-8">
          {procedures.map((proc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-[#9781bc]"
            >
              <div className="flex items-start gap-6">
                <div className="bg-purple-100 p-4 rounded-xl flex-shrink-0">
                  {proc.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">
                    {proc.title}
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {proc.description}
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