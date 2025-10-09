import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, MapPin, Phone } from 'lucide-react';
import { navBarHeight, branchDetails, maakauveryPhone } from '../utils/constants';

export default function BranchesPage() {
  return (
    <div className= {`min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 ${navBarHeight}`}>
      {/* Header */}
      <section className="bg-[#9781bc] py-16 px-6 text-white">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Hospital Locations</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
            Providing world-class healthcare services across multiple locations
          </p>
        </motion.div>
      </section>

      {/* Branches Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {branchDetails.map((branch, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden"
            >
              {/* Branch Info */}
              <div className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-[#9781bc] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      {branch.name}
                    </h3>
                    <p className="text-gray-600">{branch.address}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 sm:mt-16 text-center">
          <div className="inline-block bg-white rounded-2xl shadow-lg px-6 sm:px-8 py-5 sm:py-6">
            <p className="text-sm sm:text-base text-gray-600 mb-2">Call Us For an Appointment</p>
            <a 
              href={`tel:${maakauveryPhone}`}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#B83A63] hover:text-[#9d2f52] transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <Phone className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
              {maakauveryPhone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}