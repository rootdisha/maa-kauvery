import React from "react";
import { motion } from "framer-motion";
import { FlaskConical, Microscope, Syringe } from "lucide-react";
import { navBarHeight } from "../../utils/constants";

export default function ARTServices() {
  const services = [
    {
      title: "In Vitro Fertilization (IVF)",
      icon: <FlaskConical className="w-12 h-12 text-[#9781bc]" />,
      description: "Healthy eggs are retrieved and fertilized with sperm in our advanced IVF labs, followed by careful embryo transfer."
    },
    {
      title: "Intracytoplasmic Sperm Injection (ICSI)",
      icon: <Microscope className="w-12 h-12 text-[#9781bc]" />,
      // description: "A single sperm is injected directly into an egg, ideal for couples facing severe <a href='https://www.kauveryhospital.com/blog/family-and-general-medicine/male-fertility-myths-and-facts/'> male factor infertility </a>."
      description: "A single sperm is injected directly into an egg, ideal for couples facing severe male factor infertility."
    },
    {
      title: "Intrauterine Insemination (IUI)",
      icon: <Syringe className="w-12 h-12 text-[#9781bc]" />,
      description: "Concentrated sperm is introduced directly into the uterus to improve the chances of conception."
    }
  ];

  return (
    <div className={navBarHeight}>
    <div className="bg-gradient-to-br from-[#fdfbff] via-[#f7f1ff] to-[#e9dcff] min-h-screen">
      {/* Banner */}
      <section className="relative bg-[#9781bc] py-16 px-6 text-white">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center"
        >
          Assisted Reproductive Technologies (ART)
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mt-4 text-lg max-w-3xl mx-auto"
        >
          Advanced fertility treatments with the highest success rates
        </motion.p>
      </section>

      {/* Services */}
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
