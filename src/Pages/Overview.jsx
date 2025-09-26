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
import { 
  TrendingUp, 
  Heart, 
  Shield, 
  Users, 
  UserCheck, 
  Award 
} from "lucide-react";
import { Link } from "react-router-dom";
import { navBarHeight } from "../utils/constants";

export default function OverviewPage() {
  // ---------- Data ----------
  const values = [
    {
      title: "Continual Improvement",
      desc: "Always improving our services, processes, and patient care.",
      icon: <TrendingUp className="w-8 h-8 text-blue-500 mx-auto mb-2" />,
      description: "Always looking to make our operations more efficient\
      Exploring innovative and smart ways of reducing costs, without compromising on quality\
      Knowing what is happening in the outside world, so that we can implement practices that will make us more efficient\
      Driving efforts to make small improvements in our daily work\
      Focusing on self-improvement to deliver better outcomes in everything we do\
      Encouraging people to share ideas that can improve our service quality",
    },
    {
      title: "Heartfelt Personal Touch",
      desc: "Personalized care with a human touch.",
      icon: <Heart className="w-8 h-8 text-pink-500 mx-auto mb-2" />,
      description: "Greeting each patient with a smile and in a friendly manner\
      Doing our best to make every patient feel at home\
      Understanding that each individual has unique needs and has to be helped accordingly\
      Striving to satisfy all the needs, big or small of our patients",
    },
    {
      title: "Ethical",
      desc: "Maintain high ethical standards in all interactions.",
      icon: <Shield className="w-8 h-8 text-green-500 mx-auto mb-2" />,
      description: "Being honest and trustworthy all the time\
      Maintaining confidentiality and protecting patient information\
      Prescribing only what is required for the patient in terms of treatment and medication\
      Being fully transparent in dealings with all",
    },
    {
      title: "Empathetic Care",
      desc: "Empathetic care to understand patient needs.",
      icon: <Users className="w-8 h-8 text-purple-500 mx-auto mb-2" />,
      description: "Listening to each patient to understand their situation and feelings\
      Making sure the families of patients are comfortable and have sufficient information\
      Treating everyone equally, not giving preference to anyone\
      Being friendly and approachable with patients and their families",
    },
    {
      title: "Real Accountability",
      desc: "Taking responsibility and being accountable.",
      icon: <UserCheck className="w-8 h-8 text-orange-500 mx-auto mb-2" />,
      description: "Taking ownership for our success\
      Meeting all commitments made to patients, doctors, our colleagues and all other stakeholders\
      Learning from mistakes and not blaming others when things go wrong\
      Delivering safe patient care in a timely and efficient manner\
      Doing whatever it takes whether it is a part of the job or not\
      Questioning colleagues when they do not deliver on what they are supposed to",
    },
    {
      title: "Service Excellence",
      desc: "Delivering excellence in service quality and care.",
      icon: <Award className="w-8 h-8 text-yellow-500 mx-auto mb-2" />,
      description: "Going the extra mile to offer a great patient experience\
      Constantly looking for ways to improve service levels at our hospitals\
      Looking at every customer touch point and making things better\
      Being responsive to customer feedback",
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
    <div className={`bg-white text-gray-800 overflow-x-hidden ${navBarHeight}`}>
      <section className="relative bg-[#9781bc] py-24 px-6 text-center text-white">
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

      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          Kauvery Group of Hospitals launched its first hospital more than two decades ago. 
          The founders of Kauvery Hospital were determined on creating world-class healthcare 
          facilities that shall be affordable. The founding doctors set off on this dream in 
          1999 with a 30-bedded hospital in Trichy, with a single-minded focus on offering the 
          best-in-class healthcare, with a personal touch. This was a very new concept in a 
          tier 2 city like Trichy which lacked a tertiary care hospital at the time. Today, Kauvery 
          is a multi-specialty hospital chain with 2250+ beds in six locations including Trichy, 
          Chennai, Salem, Hosur, Tirunelveli and Bengaluru. With twelve hospitals and a workforce 
          of over 8000+, Kauvery’s mission is to provide exemplary secondary and tertiary care.
        </div>
      </section>

      {/* Our Values Section */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800"
          >
            Our Core Values
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto"
          >
            These values guide everything we do at Kauvery Hospital, ensuring exceptional care for every patient
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                {/* Icon */}
                <div className="text-center mb-4">
                  {value.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-center mb-3 text-gray-800">
                  {value.title}
                </h3>

                {/* Short Description */}
                <p className="text-gray-600 text-center mb-4 text-sm">
                  {value.desc}
                </p>

                {/* Detailed Description */}
                <ul className="text-gray-700 text-sm leading-relaxed list-none space-y-2">
                  {value.description.split('\\').map((line, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-[#9781bc] mr-2 text-xs mt-1 font-bold">•</span>
                      <span>{line.trim()}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
