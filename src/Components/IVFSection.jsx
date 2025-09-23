import React from "react";
import { motion } from "framer-motion";
import { Phone, Calendar } from "lucide-react";
import momBaby from "../Images/mother-with-baby-studio-portrait-concept.png"; // replace with your image path

export default function IVFSection() {
  return (
    <section className="relative bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 py-16 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">

        {/* Image side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true }}
          className="flex-shrink-0 w-full lg:w-1/2 flex justify-center"
        >
          <img
            src={momBaby}
            alt="Mother and Baby"
            className="w-[350px] md:w-[420px] lg:w-[480px] object-contain drop-shadow-xl"
          />
        </motion.div>

        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true }}
          className="lg:w-1/2 text-center lg:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-6">
            Why opt for In-Vitro Fertilization (IVF)?
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            In-Vitro fertilization (IVF) is the most effective fertility treatment available today.
            IVF treatments at NIF offer the highest success rates and quickest time-to-pregnancy in
            India. We’re one of the top IVF clinics in the world, after all!
          </p>

          <ul className="text-gray-800 space-y-2 mb-8">
            {[
              "Low sperm count",
              "Poor egg quality",
              "Uterus or Fallopian tube issues",
              "Ovulation problems",
              "Unidentified infertility issues",
            ].map((item, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-2"
              >
                <span className="h-2 w-2 bg-pink-500 rounded-full"></span>
                {item}
              </motion.li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="tel:+918049436667"
              className="inline-flex items-center gap-2 bg-white text-pink-600 px-5 py-3 rounded-full shadow hover:shadow-md transition"
            >
              <Phone className="w-5 h-5" /> +91 99999 99999
            </a>
            <button className="inline-flex items-center gap-2 bg-pink-600 text-white px-6 py-3 rounded-full shadow hover:bg-pink-700 transition">
              <Calendar className="w-5 h-5" /> Book An Appointment
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
