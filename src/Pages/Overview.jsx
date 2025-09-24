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
import { Link } from "react-router-dom";
import patient1Img from "../Images/Patient_Stories_1.jpg";
import patient2Img from "../Images/Patient_Stories_2.jpg";
import patient3Img from "../Images/Patient_Stories_3.jpg";

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

  const stories2 = [
    {
      id: 1,
      name: "Kumararaji Muthukumaraswamy",
      image: patient1Img,
      testimonial:
      "Surgeon Dr Gopal Murugan & Cardiologist Dr. Shivakadasham clearly explained \
       the importance of Angioplasty before surgery. I was very comfortable with \
      services they provide that includes surgery. All the staff nurses took good \
      care of me and my attendants. All medical and non-medical staffs monitored me \
      during my stay here. The hospital is cleanly maintained and the environment \
      is also good. I thank all the staff for the co-operation extended to me.",
    },
    {
      id: 2,
      name: "Venkataraman Narayana",
      image: patient2Img,
      testimonial:
        "Competent doctors and caring staff. My father, aged 89 was cared for \
        so well by the nurses who ran the extra mile in motivating my father \
        and helping him heal faster. Room facilities and services were timely \
        and responsive.",
    },
    {
      id: 3,
      name: "Sita Krishnamoorthy",
      image: patient3Img,
      testimonial:
        "From Ventilator to Treadmill in 9 Weeks: My heartfelt gratitude \
        for the wonderful medical care Dr. Aravindan and his team of doctors \
        rendered me at Kauvery hospital…",
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
      <section className="relative bg-gradient-to-br from-[#876dad] via-[#9781bc] to-purple-100 py-24 px-6 text-center text-white">
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

     

      <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 py-16 px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#9781bc] mb-16">
          Patient Stories
        </h1>

        <div className="space-y-20 max-w-6xl mx-auto">
          {stories2.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-center gap-10 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <img
                src={story.image}
                alt={story.name}
                className="w-full md:w-1/2 h-72 object-cover rounded-2xl shadow-lg"
              />

              {/* Text */}
              <div className="md:w-1/2 text-center md:text-left">
                <p className="text-gray-600 mb-4">{story.testimonial}</p>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  — {story.name}
                </h3>
                <Link
                  to="/patient-stories"
                  className="inline-block px-6 py-3 bg-[#9781bc] text-white rounded-full shadow hover:bg-[#7a63a5] transition"
                >
                  Read More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

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
