import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { branches } from "../Data/doctorsData";
import { getLocations } from '../utils/doctorsData';
import { MapPin, ChevronDown } from 'lucide-react';
// import heroBackgroundVertical from '../Images/charlesdeluvio-nENtqUAiNm8-unsplash.jpg';
import heroBackgroundVertical from '../Images/alex-pasarelu-S8BW-Wx9G8I-unsplash.jpg';
import { branchDetails } from '../utils/constants';

const getBranchImage = (branchName) => {
  const branch = branchDetails.find(branch => branch.name === branchName);
  console.log(branchName,  " ", branch ? branch.img : null );
  return branch ? branch.img : null;
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

export default function BranchList() {
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('');

  useEffect(() => {
    const loadLocations = async () => {
      const locs = await getLocations();
      setLocations(locs);
      console.log(locs);
    };
    loadLocations();
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setSelectedLocation(value);
  };

  return (
    <section className="bg-gradient-to-br from-[#fdfbff] via-[#f7f1ff] to-[#e9dcff] py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#9781bc] mb-8 sm:mb-10 md:mb-12 lg:mb-16"
        >
          Our Locations
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
          {locations.map((branch, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.03,
                y: -5,
                boxShadow: "0 20px 40px rgba(151, 129, 188, 0.2)"
              }}
              whileTap={{ scale: 0.98 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl group"
            >
              <Link to={`/branch/${index}`} className="block">
                <div className="relative overflow-hidden">
                  <img
                    src={getBranchImage(branch)}
                    alt={branch || "Branch"}
                    className="h-48 sm:h-52 md:h-56 lg:h-60 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Location icon overlay */}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <MapPin size={16} className="text-[#9781bc]" />
                  </div>
                </div>
                
                <div className="p-4 sm:p-5 md:p-6">
                  <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 text-center group-hover:text-[#9781bc] transition-colors duration-300">
                    {branch}
                  </h2>
                  
                  {/* Subtle call-to-action */}
                  <div className="mt-3 flex items-center justify-center text-[#9781bc] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-medium">View Details</span>
                    <ChevronDown size={16} className="ml-1 rotate-[-90deg]" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Empty state when no locations */}
        {locations.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#9781bc]/10 rounded-full mb-4">
              <MapPin size={32} className="text-[#9781bc]" />
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Loading Locations...</h3>
            <p className="text-gray-500">Please wait while we fetch our branch information.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}