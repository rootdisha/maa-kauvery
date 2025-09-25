import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { branches } from "../Data/doctorsData";
import { getLocations } from '../utils/doctorsData';
import { MapPin, ChevronDown } from 'lucide-react';
// import heroBackgroundVertical from '../Images/charlesdeluvio-nENtqUAiNm8-unsplash.jpg';
import heroBackgroundVertical from '../Images/alex-pasarelu-S8BW-Wx9G8I-unsplash.jpg';
import { branchImages } from '../utils/constants';

const getBranchImage = (branchName) => {
  const branch = branchImages.find(branch => branch.name === branchName);
  console.log(branchName,  " ", branch ? branch.img : null );
  return branch ? branch.img : null;
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
    <section className="bg-gradient-to-br from-[#fdfbff] via-[#f7f1ff] to-[#e9dcff] py-16 px-6">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-[#9781bc] mb-10">
        Our Locations
      </h1>


      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
        {locations.map((branch, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer"
          >
            <Link to={`/branch/${index}`}>
              <img
                src={getBranchImage(branch)}
                alt={branch || "Branch"}
                className="h-56 w-full object-cover"
              />
              <div className="p-5 text-center">
                <h2 className="text-lg font-semibold text-gray-800">
                  {branch}
                </h2>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
      

    </section>
  );
}
