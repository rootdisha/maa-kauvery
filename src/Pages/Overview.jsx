import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  AcademicCapIcon,
  HeartIcon,
  TrophyIcon,
  UsersIcon,
  StarIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";

export default function OverviewPage() {
  // ---------- Data ----------
  const stories = [
    {
      name: "Kumararaj Muthukumaraswamy",
      quote:
        "Surgeon Dr Gopal Murugan & Cardiologist Dr. Shivakadasham clearly explained the importance of Angioplasty before surgery. I was very comfortable with services they provide...",
      icon: <UsersIcon className="w-6 h-6 text-purple-500 mr-2" />,
    },
    {
      name: "Sita Krishnamoorthy",
      quote:
        "My heartfelt gratitude for the wonderful medical care Dr. Aravindan and his team of doctors rendered me at Kauvery hospital…",
      icon: <UsersIcon className="w-6 h-6 text-purple-500 mr-2" />,
    },
    {
      name: "Venkatraman Narayana",
      quote:
        "Competent doctors and caring staff. My father, aged 89 was cared for so well by the nurses who ran the extra mile in motivating my father…",
      icon: <UsersIcon className="w-6 h-6 text-purple-500 mr-2" />,
    },
  ];

  const values = [
    {
      title: "Continual Improvement",
      desc: "Always improving our services, processes, and patient care.",
      icon: <StarIcon className="w-8 h-8 text-yellow-400 mx-auto mb-2" />,
    },
    {
      title: "Heartfelt Personal Touch",
      desc: "Personalized care with a human touch.",
      icon: <HeartIcon className="w-8 h-8 text-pink-400 mx-auto mb-2" />,
    },
    {
      title: "Ethical",
      desc: "Maintain high ethical standards in all interactions.",
      icon: <AcademicCapIcon className="w-8 h-8 text-purple-400 mx-auto mb-2" />,
    },
    {
      title: "Empathetic Care",
      desc: "Empathetic care to understand patient needs.",
      icon: <HeartIcon className="w-8 h-8 text-red-400 mx-auto mb-2" />,
    },
    {
      title: "Real Accountability",
      desc: "Taking responsibility and being accountable.",
      icon: <StarIcon className="w-8 h-8 text-yellow-400 mx-auto mb-2" />,
    },
    {
      title: "Service Excellence",
      desc: "Delivering excellence in service quality and care.",
      icon: <TrophyIcon className="w-8 h-8 text-yellow-500 mx-auto mb-2" />,
    },
  ];

  const locations = [
    { name: "Trichy – Tennur", img: "/Img/HosImg/kh-trichy-tennur.png", icon: <MapPinIcon className="w-5 h-5 text-red-500 mr-2" /> },
    { name: "Trichy – Cantonment", img: "/Img/HosImg/kh-trichy-contonment.png", icon: <MapPinIcon className="w-5 h-5 text-red-500 mr-2" /> },
    { name: "Chennai – Alwarpet", img: "/Img/HosImg/Chennai-alwarpet-thumb.jpg", icon: <MapPinIcon className="w-5 h-5 text-red-500 mr-2" /> },
    { name: "Bengaluru – Electronic City", img: "/Img/HosImg/kh-bangalore.png", icon: <MapPinIcon className="w-5 h-5 text-red-500 mr-2" /> },
    // Add remaining locations here...
  ];

  // ---------- Helpers ----------
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6 },
    }),
  };

  return (
    <div className="bg-white text-gray-800 overflow-x-hidden">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-purple-500 via-pink-400 to-purple-300 py-24 px-6 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold tracking-wide drop-shadow-lg"
        >
          Overview
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-4 text-lg md:text-2xl max-w-2xl mx-auto"
        >
          Experience world-class care at Kauvery Hospital
        </motion.p>
      </section>

      {/* Patient Stories */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Patient Stories
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {stories.map((s, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i}
                whileHover={{ scale: 1.03 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl flex flex-col"
              >
                <div className="flex items-center mb-2">{s.icon}<span className="font-semibold text-gray-800">{s.name}</span></div>
                <blockquote className="italic text-gray-700">“{s.quote}”</blockquote>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Our Values
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => {
              const [open, setOpen] = useState(false);
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  custom={i}
                  onClick={() => setOpen(!open)}
                  whileHover={{ scale: 1.03 }}
                  className="cursor-pointer bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl text-center"
                >
                  {v.icon}
                  <p className="text-xl font-medium text-purple-700">{v.title}</p>
                  {open && (
                    <motion.p
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-3 text-gray-600"
                    >
                      {v.desc}
                    </motion.p>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Our Locations
          </motion.h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {locations.map((loc, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden"
              >
                <img src={loc.img} alt={loc.name} className="w-full h-40 object-cover" />
                <p className="p-4 text-center text-gray-700 font-semibold flex items-center justify-center">{loc.icon}{loc.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
