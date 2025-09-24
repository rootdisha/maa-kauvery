import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Calendar } from "lucide-react";
import IVFImage from "../Images/charlesdeluvio-nENtqUAiNm8-unsplash.jpg"; 
import AppointmentForm from "../Components/AppointmentForm";
import { maakauveryPhone } from "../utils/constants";

// Full width background image
export default function IVFSectionBackgroundImage() {
  const [showAppointmentForm, setShowAppointmentForm] = useState(false);

  return (
    <section className="relative w-full overflow-hidden">
  {/* Full-width background container */}
  <div className="relative w-full">
    {/* Background Image with Overlay */}
    <div className="absolute inset-0">
      <img
        src={IVFImage}
        alt="Mother and Baby"
        className="w-full h-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-r via-[#D2A855]/60 from-[#9781bc]/70 to-[#B83A63]/60 "></div>
    </div>

    {/* Content Over Background */}
    <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-16 md:py-24 text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-2xl"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
          Why opt for In-Vitro Fertilization (IVF)?
        </h2>
        
        <p className="text-lg md:text-xl mb-8 leading-relaxed text-white/90">
          In-Vitro fertilization (IVF) is the most effective fertility treatment available today.
          IVF treatments offer the highest success rates and quickest time-to-pregnancy.
        </p>

        <ul className="space-y-3 mb-10">
          {[
            "Low sperm count",
            "Poor egg quality",
            "Uterus or Fallopian tube issues",
            "Ovulation problems",
            "Unidentified infertility issues",
          ].map((item, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 text-lg"
            >
              <div className="w-2 h-2 bg-[#876dad] rounded-full flex-shrink-0"></div>
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="tel:+914465556666"
            className="inline-flex items-center justify-center gap-2 bg-white text-pink-600 
            hover:bg-pink-50 px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all font-semibold"
          >
            <Phone className="w-5 h-5" /> {maakauveryPhone}
          </a>
          <button 
            className="inline-flex items-center justify-center gap-2 
              bg-[#B83A63] text-white px-8 py-4 rounded-full 
              shadow-lg hover:shadow-xl hover:bg-pink-700 transition-all font-semibold"
            onClick={() => setShowAppointmentForm(true)} 
          >
            <Calendar className="w-5 h-5" /> Book An Appointment
          </button>
        </div>
      </motion.div>
    </div>
  </div>

  <AppointmentForm 
    isOpen={showAppointmentForm} 
    onClose={() => setShowAppointmentForm(false)} 
  />
</section>
  );
}

// image on left, text on right
function IVFSectionImageOnSide() {
  const [showAppointmentForm, setShowAppointmentForm] = useState(false);

  return (
    <section className="relative bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 py-16 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Full-width background container with overlay */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img
              src={IVFImage}
              alt="Mother and Baby"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 via-pink-900/70 to-transparent"></div>
          </div>

          {/* Content Over Background */}
          <div className="relative z-10 px-8 md:px-16 py-12 md:py-20 text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Why opt for In-Vitro Fertilization (IVF)?
              </h2>
              
              <p className="text-lg md:text-xl mb-8 leading-relaxed text-white/90">
                In-Vitro fertilization (IVF) is the most effective fertility treatment available today.
                IVF treatments offer the highest success rates and quickest time-to-pregnancy.
              </p>

              <ul className="space-y-3 mb-10">
                {[
                  "Low sperm count",
                  "Poor egg quality",
                  "Uterus or Fallopian tube issues",
                  "Ovulation problems",
                  "Unidentified infertility issues",
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 text-lg"
                  >
                    <div className="w-2 h-2 bg-pink-400 rounded-full flex-shrink-0"></div>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+914465556666"
                  className="inline-flex items-center justify-center gap-2 bg-white text-pink-600 
                  hover:bg-pink-50 px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all font-semibold"
                >
                  <Phone className="w-5 h-5" /> {maakauveryPhone}
                </a>
                <button 
                  className="inline-flex items-center justify-center gap-2 
                    bg-[#B83A63] text-white px-8 py-4 rounded-full 
                    shadow-lg hover:shadow-xl hover:bg-pink-700 transition-all font-semibold"
                  onClick={() => setShowAppointmentForm(true)} 
                >
                  <Calendar className="w-5 h-5" /> Book An Appointment
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <AppointmentForm 
        isOpen={showAppointmentForm} 
        onClose={() => setShowAppointmentForm(false)} 
      />
    </section>
  );
}
