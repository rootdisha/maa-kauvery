import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import logo from "../Images/logo.png";
import { maakauveryInsta, maakauveryFB, maakauveryYT, maakauveryPhone } from "../utils/constants";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br font-[pop] from-purple-50 via-pink-50 to-purple-100">
      <div className="pt-12 sm:pt-16 md:pt-20 pb-6 sm:pb-8 px-4 sm:px-6 md:px-8 lg:px-12">
        <motion.div 
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 text-gray-700">

            {/* Logo & Description */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center sm:items-start text-center sm:text-left lg:col-span-1"
            >
              <img 
                src={logo} 
                alt="Maa Kauvery Logo" 
                className="w-24 sm:w-28 md:w-32 lg:w-36 mb-3 sm:mb-4 object-contain hover:scale-105 transition-transform duration-300" 
              />
              <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-xs">
                Care to Cradle, with you always.
              </p>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              variants={itemVariants}
              className="text-center sm:text-left"
            >
              <h4 className="text-base sm:text-lg md:text-xl font-semibold text-purple-800 mb-3 sm:mb-4">
                Contact Us
              </h4>
              <div className="flex flex-col gap-3 sm:gap-4">
                <a 
                  href={`tel:${maakauveryPhone}`} 
                  className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3 hover:text-pink-600 transition-colors duration-200 group"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-pink-600 group-hover:scale-110 transition-transform duration-200 flex-shrink-0" /> 
                  <span className="text-sm sm:text-base md:text-lg font-medium">{maakauveryPhone}</span>
                </a>
              </div>
              <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-gray-500 leading-relaxed max-w-xs mx-auto sm:mx-0">
                Visit us at our fertility centers for consultations and treatments.
              </p>
            </motion.div>

            {/* Social Media */}
            <motion.div
              variants={itemVariants}
              className="text-center sm:text-left sm:col-span-2 lg:col-span-1"
            >
              <h4 className="text-base sm:text-lg md:text-xl font-semibold text-purple-800 mb-3 sm:mb-4">
                Follow Us
              </h4>
              <div className="flex justify-center sm:justify-start gap-4 sm:gap-5 md:gap-6">
                <a 
                  href={maakauveryFB} 
                  className="p-2 sm:p-3 bg-white/50 rounded-full hover:bg-white hover:text-pink-600 hover:scale-110 transition-all duration-300 shadow-sm hover:shadow-md group"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                </a>
                <a 
                  href={maakauveryInsta} 
                  className="p-2 sm:p-3 bg-white/50 rounded-full hover:bg-white hover:text-pink-600 hover:scale-110 transition-all duration-300 shadow-sm hover:shadow-md group"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                </a>
                <a 
                  href={maakauveryYT} 
                  className="p-2 sm:p-3 bg-white/50 rounded-full hover:bg-white hover:text-pink-600 hover:scale-110 transition-all duration-300 shadow-sm hover:shadow-md group"
                  aria-label="Follow us on YouTube"
                >
                  <Youtube className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                </a>
              </div>
              
              {/* Additional info for larger screens */}
              <p className="mt-4 sm:mt-6 text-xs sm:text-sm text-gray-500 leading-relaxed hidden sm:block max-w-xs">
                Stay connected with us for the latest updates, success stories, and fertility care tips.
              </p>
            </motion.div>
          </div>

          {/* Bottom Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-8 sm:mt-10 md:mt-12 border-t border-gray-300/60 pt-4 sm:pt-6 text-center"
          >
            <p className="text-gray-600 text-xs sm:text-sm md:text-base">
              © {new Date().getFullYear()} Maa Kauvery Fertility Centre. All rights reserved.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}