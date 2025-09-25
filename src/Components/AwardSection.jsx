import React from "react";
import { motion } from "framer-motion";

// Replace these with your own award images
import award1 from "../Images/images.jpeg";
import award2 from "../Images/images.jpeg";
import award3 from "../Images/images.jpeg";

export default function AwardSection() {
  const awards = [
    {
      img: award1,
      title: "Cardiology & Cardiothoracic Surgery – Stalwart",
      desc: "Times Healthcare Achievers Tamilnadu 2018 – Dr. T Senthilkumar, Stalwart in Cardiology and Cardiothoracic Surgery",
      link: "#",
    },
    {
      img: award2,
      title: "Excellence in Medical Innovation",
      desc: "Awarded for pioneering reproductive treatments and research.",
      link: "#",
    },
    {
      img: award3,
      title: "Top Healthcare Provider",
      desc: "Honored for maintaining exceptional standards in fertility services.",
      link: "#",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-[#fdfbff] via-[#f7f1ff] to-[#e9dcff] py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-[#9781bc] mb-12"
        >
          Our Awards & Achievements
        </motion.h2>

        {/* Award Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col"
            >
              {/* Award Image */}
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={award.img}
                  alt={award.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text + Button */}
              <div className="p-6 text-left flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-[#9781bc] mb-2">
                  {award.title}
                </h3>
                <p className="text-purple-800/80 text-sm mb-4 flex-1">
                  {award.desc}
                </p>
                <motion.a
                  href={award.link}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block px-5 py-2 mt-auto rounded-lg bg-[#9781bc] text-white font-medium shadow-md hover:bg-pink-300 transition-colors duration-200"
                >
                  Know More
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
