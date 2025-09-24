import React from "react";
import { motion } from "framer-motion";
import { navBarHeight } from "../../utils/constants";

export default function AboutFertility() {
  return (
    <div className={`bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 min-h-screen ${navBarHeight}`}>
      <section className="relative bg-[#9781bc] py-16 px-6 text-white">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center"
        >
          About Maa Kauvery Fertility Centre
        </motion.h1>
      </section>

      <section className="max-w-6xl mx-auto py-16 px-6 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-pink-50 rounded-2xl p-8 shadow-lg"
        >
          <h2 className="text-2xl font-bold text-[#9781bc] mb-4">Our Mission</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            At Kauvery Hospital, we understand that parenthood is a dream come true – yet for some couples, 
            the road to conceiving can be challenging. Whether you're seeking advanced infertility treatments 
            or personalized fertility care, our Fertility Centre is dedicated to supporting you at every step.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-purple-50 rounded-2xl p-8 shadow-lg"
        >
          <h2 className="text-2xl font-bold text-[#9781bc] mb-4">Our Approach</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            With state‐of‐the‐art technology, a compassionate team of experts, and a holistic approach to treatment, 
            we tailor our care to your unique needs.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="bg-blue-50 rounded-2xl p-8 shadow-lg"
        >
          <h2 className="text-2xl font-bold text-[#9781bc] mb-4">Our Infrastructure</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            At Kauvery Hospital, our modern facilities and advanced equipment are dedicated to ensuring you receive 
            the highest quality care. Our specialized labs and diagnostic centres provide a robust foundation for 
            delivering complex infertility treatments with precision and safety.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
