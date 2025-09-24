import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ----------------------------------------------------
   Leadership Data
---------------------------------------------------- */
const leaders = [
  {
    name: "Dr. S. Chandra Kumar M.D.",
    title: "Founder & Executive Chairman",
    img: "/DocterImg/Chandra-Kumar-M.D.png",
    short:
      "Founder and Executive Chairman with extensive expertise in anaesthesiology and critical care.",
    long:
      "Dr. S. Chandra Kumar established Kauvery Hospitals to provide world-class yet affordable care for the semi-urban and rural parts of Tamil Nadu. He continues to guide clinical excellence and strategic growth across the group.",
  },
  {
    name: "Dr. Manivannan Selvaraj , MD, DNB",
    title: "Founder & Managing Director",
    img: "/DocterImg/Manivannan-Selvaraj.jpg",
    short:
      "Visionary leader who co-founded Kauvery Hospitals in the late 1990s.",
    long:
      "Dr. Manivannan Selvaraj oversees the overall strategy and day-to-day management of the hospital group, ensuring patient-centric innovation and high-quality healthcare delivery.",
  },
  {
    name: "Dr. Senguttuvan Duraimurthy",
    title: "Co-Founder & Executive Director",
    img: "/DocterImg/Senguttuvan-Duraisamy.jpg",
    short:
      "Specialist in Paediatric Cardiology with vast clinical and leadership experience.",
    long:
      "Dr. Senguttuvan plays a key role in clinical governance and expansion of Kauvery’s specialty services, mentoring young doctors and promoting research initiatives.",
  },
  {
    name: "Dr. Aravindhan Selvaraj",
    title: "Co-Founder & Executive Director",
    img: "/DocterImg/Aravindan-Selvaraj.jpg",
    short:
      "Orthopaedic surgeon and strategic leader of multiple hospital projects.",
    long:
      "Dr. Aravindhan combines surgical expertise with business acumen, spearheading technological adoption and patient-friendly infrastructure across Kauvery locations.",
  },
  {
    name: "Dr. T Senithi Kumar",
    title: "Executive Director, Trichy",
    img: "/DocterImg/05_TSenthilKumar.png",
    short: "Renowned cardiac surgeon practicing for over 20 years.",
    long:
      "Dr. Senithi Kumar is acclaimed for advanced cardiac surgeries and minimally invasive techniques, and guides cardiology programs across the group.",
  },
  {
    name: "P. Selvaraju",
    title: "Executive Director",
    img: "/DocterImg/P.-Selvaraju.png",
    short:
      "Procurement and supply-chain expert with 30+ years of experience.",
    long:
      "Selvaraju manages group-wide procurement strategies, ensuring cost-effective and high-quality medical supplies and infrastructure development.",
  },
  {
    name: "Dr. S. Vijayabaskaran",
    title: "Executive Director, Kauvery Hospitals (Bangalore and Hosur)",
    img: "/DocterImg/07_Vijayabaskaran.png",
    short:
      "An accomplished healthcare leader recognized for excellence in management and research.",
    long:
      "Dr. S. Vijayabaskaran serves as the Executive Director of the Bangalore and Hosur units within the Kauvery Group of Hospitals. His extensive qualifications and accomplishments underscore his role in this esteemed healthcare organisation. Dr. Vijayabaskaran excels in various areas, like Project Management, Turnaround Specialist/Mergers & Acquisitions, Business Development, and Stakeholder Management.\
      <ul> <li> Best Integrated Farming System Research Scientist for the year 2013 at the National Level (ICAR)\
      <li> Best Extension Scientist for the year 2008 at the state level\
      <li> University rank holder in postgraduate studies</ul>\
      ASPEE fellowship holder for postgraduate studies",
  },
];

/* ----------------------------------------------------
   Component
---------------------------------------------------- */
export default function LeadershipSection() {
  const [active, setActive] = useState(null);

  return (
    <section className="relative">
      {/* Banner */}
     <div className="relative w-full h-72 sm:h-80 md:h-96 lg:h-[28rem] xl:h-[32rem]">
  {/* Background Banner */}
  <img
    src="/Img/hys_6.jpg"
    alt="Leadership Banner"
    className="w-full h-full object-cover"
  />

  {/* Overlay Content */}
  <div className="absolute inset-0 bg-gradient-to-r/40 from-slate-50 to-gray-300 flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-16">
    {/* Heading Text */}
    <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center md:text-left mb-4 md:mb-0 drop-shadow-lg">
      Our Leadership
    </h1>

    {/* Side Image */}
    <img
      src="/Img/management-mob.jpg"
      alt="Management"
      className="w-60 sm:w-64 md:w-92 lg:w-104 xl:w-200 h-auto object-cover rounded-xl shadow-lg"
    />
  </div>
</div>


      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto py-16 px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {leaders.map((leader, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActive(leader)}
              className="group relative bg-white/30 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition cursor-pointer"
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src={leader.img}
                  alt={leader.name}
                  className="w-48 lg:w-60 h-48 lg:h-60 rounded-xl object-cover ring-4 ring-purple-200 group-hover:ring-purple-400 transition"
                  loading="lazy"
                />
                <h3 className="mt-4 text-xl font-semibold text-gray-800">
                  {leader.name}
                </h3>
                <p className="text-purple-600 font-medium text-sm mt-1">
                  {leader.title}
                </p>
                <p className="text-gray-700 mt-3 text-sm">{leader.short}</p>
                <span className="mt-4 inline-block text-purple-700 font-medium underline decoration-purple-300 decoration-2">
                  Read More
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {active && (
            <motion.div
              key="modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
              onClick={() => setActive(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-3xl max-w-lg w-full p-8 shadow-2xl relative"
              >
                <button
                  onClick={() => setActive(null)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold"
                >
                  &times;
                </button>
                <div className="flex flex-col items-center text-center">
                  <img
                    src={active.img}
                    alt={active.name}
                    className="w-32 h-32 rounded-full object-cover ring-4 ring-purple-300 mb-4"
                  />
                  <h3 className="text-2xl font-semibold text-gray-800">
                    {active.name}
                  </h3>
                  <p className="text-purple-700 font-medium mt-1">
                    {active.title}
                  </p>
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    {active.long}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
