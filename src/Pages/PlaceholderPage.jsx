import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, MapPin } from 'lucide-react';

// Import your images here
// import radialImg from '../Images/building-chennai-radial.png';
// import vadapalaniImg from '../Images/building-chennai-vadapalani.png';
// import hosurImg from '../Images/building-hosur.jpg';
// import trichyImg from '../Images/building-trichy.png';
// import salemImg from '../Images/building-salem.jpg';

// For demo purposes, using placeholder images
const branchImages = [
  {
    name: "Chennai - Radial Road",
    img: "https://via.placeholder.com/400x300/9781bc/white?text=Chennai+Radial",
    url: "https://www.kauveryhospital.com/our-locations/chennai-radial-road/",
  },
  {
    name: "Chennai - Vadapalani",
    img: "https://via.placeholder.com/400x300/B83A63/white?text=Chennai+Vadapalani",
    url: "https://www.kauveryhospital.com/our-locations/chennai-vadapalani/",
  },
  {
    name: "Hosur",
    img: "https://via.placeholder.com/400x300/D2A855/white?text=Hosur",
    url: "https://www.kauveryhospital.com/our-locations/hosur/",
  },
  {
    name: "Maa Kauvery Trichy",
    img: "https://via.placeholder.com/400x300/70308A/white?text=Maa+Kauvery+Trichy",
    url: "https://www.kauveryhospital.com/maa-kauvery-trichy/women-children-hospital/",
  },
  {
    name: "Salem",
    img: "https://via.placeholder.com/400x300/876dad/white?text=Salem",
    url: "https://www.kauveryhospital.com/our-locations/salem/",
  },
];

export default function BranchesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100">
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
          {branchImages.map((branch, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden"
            >
              {/* Branch Image */}
              {/* <div className="h-64 overflow-hidden">
                <img
                  src={branch.img}
                  alt={branch.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div> */}

              {/* Branch Info */}
              <div className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-[#9781bc] mt-1 flex-shrink-0" />
                  <h3 className="text-xl font-bold text-gray-800">
                    {branch.name}
                  </h3>
                </div>

                {/* Visit Link */}
                <a
                  href={branch.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#9781bc] to-[#B83A63] text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  Visit Location Page
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      {/* <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#9781bc]/10 to-[#B83A63]/10 rounded-2xl p-8"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Find the Location Nearest You
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              Experience exceptional healthcare at any of our strategically located facilities
            </p>
            <button className="bg-gradient-to-r from-[#9781bc] to-[#B83A63] text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all">
              Book an Appointment
            </button>
          </motion.div>
        </div>
      </section> */}
    </div>
  );
}