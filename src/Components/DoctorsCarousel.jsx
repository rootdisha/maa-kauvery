import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const doctors = [
  { name: "Dr. Emily Carter", specialty: "Fertility Specialist", image: "/doctors/doctor1.jpg" },
  { name: "Dr. Michael Smith", specialty: "IVF Consultant", image: "/doctors/doctor2.jpg" },
  { name: "Dr. Sophia Johnson", specialty: "Gynecologist", image: "/doctors/doctor3.jpg" },
  { name: "Dr. Daniel Lee", specialty: "Embryologist", image: "/doctors/doctor4.jpg" },
  { name: "Dr. Olivia Brown", specialty: "Reproductive Endocrinologist", image: "/doctors/doctor5.jpg" },
  { name: "Dr. Ethan Wilson", specialty: "Andrologist", image: "/doctors/doctor6.jpg" },
];

export default function DoctorsCarousel() {
  const outerRef = useRef(null);
  const innerRef = useRef(null);
  const [maxDrag, setMaxDrag] = useState(0);

  useEffect(() => {
    if (outerRef.current && innerRef.current) {
      const total = innerRef.current.scrollWidth - outerRef.current.offsetWidth;
      setMaxDrag(total > 0 ? total : 0);
    }
  }, []);

  return (
    <section className="bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 py-16 px-4 md:px-12">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-[#9781bc] text-center mb-10"
      >
        Meet Our Fertility Experts
      </motion.h2>

      {/* ✅ Carousel visible on all screens */}
      <motion.div
        ref={outerRef}
        className="cursor-grab overflow-hidden w-full"
      >
        <motion.div
          ref={innerRef}
          drag="x"
          dragConstraints={{ left: -maxDrag, right: 0 }}
          className="flex gap-6"
        >
          {doctors.map((doctor, i) => (
            <motion.div
              key={i}
              whileTap={{ cursor: "grabbing" }}
              whileHover={{ scale: 1.05 }}
              className="min-w-[260px] bg-white rounded-2xl shadow-lg overflow-hidden flex-shrink-0"
            >
              <img
                src={doctor.image}
                alt={doctor.name}
                className="h-60 w-full object-cover"
              />
              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  {doctor.name}
                </h3>
                <p className="text-sm text-gray-600">{doctor.specialty}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
