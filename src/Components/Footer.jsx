import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import logo from "../Images/logo.png";
import { maakauveryInsta, maakauveryFB, maakauveryYT, maakauveryPhone } from "../utils/constants";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br font-[pop] from-purple-50 via-pink-50 to-purple-100 pt-12 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-10 text-gray-700">

        {/* Logo & Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center sm:text-left flex flex-col items-center sm:items-start"
        >
          <img src={logo} alt="Maa Kauvery Logo" className="w-32 mb-4" />
          <p className="text-gray-600">
            Care to Cradle, with you always.
          </p>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center sm:text-left"
        >
          <h4 className="text-lg font-semibold text-purple-800 mb-3">Contact Us</h4>
          <div className="flex flex-col gap-2">
            <a href="tel:+914465556666" className="flex items-center gap-2 hover:text-pink-600 transition">
              <Phone className="w-5 h-5 text-pink-600" /> {maakauveryPhone}
            </a>
          </div>
          <p className="mt-2 text-sm text-gray-500">
            Visit us at our fertility centers for consultations and treatments.
          </p>
        </motion.div>

        {/* Quick Links & Social Media */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center sm:text-left"
        >
          {/* <h4 className="text-lg font-semibold text-purple-800 mb-3">Quick Links</h4>
          <ul className="flex flex-col gap-2 mb-4">
            <li className="hover:text-pink-600 cursor-pointer transition">Home</li>
            <li className="hover:text-pink-600 cursor-pointer transition">About</li>
            <li className="hover:text-pink-600 cursor-pointer transition">Services</li>
            <li className="hover:text-pink-600 cursor-pointer transition">Contact</li>
          </ul> */}

          <h4 className="text-lg font-semibold text-purple-800 mb-2">Follow Us</h4>
          <div className="flex justify-center sm:justify-start gap-4">
            <a href={maakauveryFB} className="hover:text-pink-600 transition">
              <Facebook className="w-5 h-5" />
            </a>
            <a href={maakauveryInsta} className="hover:text-pink-600 transition">
              <Instagram className="w-5 h-5" />
            </a>
            <a href={maakauveryYT} className="hover:text-pink-600 transition">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Copyright */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
        className="mt-10 border-t border-gray-300 pt-4 text-center text-gray-600 text-sm"
      >
        © {new Date().getFullYear()} Maa Kauvery Fertility Clinic. All rights reserved.
      </motion.div>
    </footer>
  );
}
