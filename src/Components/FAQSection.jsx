import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
      "If you’ve been trying to conceive for over a year (or 6 months if over age 35), it’s a good idea to consult a fertility specialist for evaluation and options.",
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

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative bg-gradient-to-r via-[#876dad]/40 from-pink-900/50 to-transparent py-20 px-4 md:px-10 lg:px-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-pink-300/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* FAQ Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#6b4fa0] mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-5">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                className="bg-white/70 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all"
              >
                <button
                  onClick={() => toggleFAQ(i)}
                  className="w-full flex justify-between items-center p-5 text-left"
                >
                  <span className="text-gray-800 font-medium text-lg">
                    {faq.question}
                  </span>
                  <span className="text-pink-600 text-2xl font-bold">
                    {activeIndex === i ? "−" : "+"}
                  </span>
                </button>

                <AnimatePresence>
                  {activeIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-5 pb-4 text-gray-600 text-sm leading-relaxed"
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden md:block"
        >
          <img
            src={FertilityImg}
            alt="FAQ about fertility"
            className="rounded-2xl w-full object-cover max-h-[650px] "
          />
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
