import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import FertilityImg from "../Images/logo.png"; // update path if needed

const faqs = [
  {
    question: "What is fertility treatment?",
    answer:
      "Fertility treatment includes a variety of medical methods to help individuals or couples conceive a child. This may involve medications, procedures like IUI or IVF, and lifestyle changes.",
  },
  {
    question: "How do I know if I need to see a fertility specialist?",
    answer:
      "If you've been trying to conceive for over a year (or 6 months if over age 35), it's a good idea to consult a fertility specialist for evaluation and options.",
  },
  {
    question: "Is IVF the only treatment option?",
    answer:
      "No, IVF is one of many fertility treatments. Others include ovulation induction, IUI, fertility preservation, and more — depending on the diagnosis.",
  },
  {
    question: "Does fertility treatment hurt?",
    answer:
      "Most treatments involve minimal discomfort. Procedures like egg retrieval or embryo transfer are done with anesthesia or mild sedation.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative bg-[#f7f1ff] py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Background Glows - Responsive */}
      <div className="absolute -top-8 sm:-top-12 md:-top-16 -left-8 sm:-left-12 md:-left-16 w-32 h-32 sm:w-48 sm:h-48 md:w-72 md:h-72 bg-pink-300/30 rounded-full blur-2xl sm:blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-purple-400/20 rounded-full blur-2xl sm:blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-start">
          {/* FAQ Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#6b4fa0] mb-6 sm:mb-8 md:mb-10 text-center lg:text-left"
            >
              Frequently Asked Questions
            </motion.h2>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="space-y-3 sm:space-y-4 md:space-y-5"
            >
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="bg-white/80 backdrop-blur-lg border border-white/50 rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(i)}
                    className="w-full flex justify-between items-center p-4 sm:p-5 md:p-6 text-left group hover:bg-white/20 transition-colors duration-200"
                    aria-expanded={activeIndex === i}
                    aria-controls={`faq-answer-${i}`}
                  >
                    <span className="text-gray-800 font-medium text-sm sm:text-base md:text-lg lg:text-xl pr-4 leading-tight">
                      {faq.question}
                    </span>
                    <div className="flex-shrink-0 text-pink-600 group-hover:text-pink-700 transition-colors duration-200">
                      {activeIndex === i ? (
                        <ChevronUp size={20} className="sm:w-6 sm:h-6" />
                      ) : (
                        <ChevronDown size={20} className="sm:w-6 sm:h-6" />
                      )}
                    </div>
                  </button>

                  <AnimatePresence>
                    {activeIndex === i && (
                      <motion.div
                        id={`faq-answer-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6">
                          <div className="border-t border-gray-200/50 pt-4 sm:pt-5">
                            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-transparent rounded-2xl sm:rounded-3xl blur-xl scale-110"></div>
              
              <img
                src={FertilityImg}
                alt="Company Logo"
                className="relative w-full object-contain max-h-[650px] 
                         hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16 md:mt-20"
        >
          <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-4 sm:mb-6">
            Still have questions? We're here to help.
          </p>
          <Link 
            to="/doctors"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-[#6b4fa0] text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm sm:text-base"
          >
            Contact Our Specialists
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;