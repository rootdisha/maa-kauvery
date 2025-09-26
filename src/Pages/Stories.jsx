import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import patient1Img from "../Images/Patient_Stories_1.jpg";
import patient2Img from "../Images/Patient_Stories_2.jpg";
import patient3Img from "../Images/Patient_Stories_3.jpg";
import { navBarHeight } from "../utils/constants";

export default function Stories() {
  const stories = [
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
      {/* Hero */}
      <section className="relative bg-[#9781bc] py-24 px-6 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold tracking-wide drop-shadow-lg"
        >
          Patient Stories
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-4 text-lg md:text-2xl max-w-2xl mx-auto"
        >
          {/* sub heading, if any */}
        </motion.p>
      </section>

     
      {/* Patient Stories */}
      <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 py-16 px-6">
        <div className="space-y-20 max-w-6xl mx-auto">
          {stories.map((story, index) => (
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
    </div>
  );
}
