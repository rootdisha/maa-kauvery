import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { branches } from "../Data/doctorsData";

export default function BranchList() {
  return (
    <section className="bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 py-16 px-6">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-[#9781bc] mb-10">
        Our Hospital Locations
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {branches.map(branch => (
          <motion.div
            key={branch.id}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer"
          >
            <Link to={`/branch/${branch.id}`}>
              <img src={branch.image} alt={branch.name} className="h-56 w-full object-cover"/>
              <div className="p-5 text-center">
                <h2 className="text-lg font-semibold text-gray-800">{branch.name}</h2>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
