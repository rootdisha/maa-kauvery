import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { branches } from "../Data/doctorsData";

export default function DoctorsPage() {
  const { id } = useParams();
  const branch = branches.find(b => b.id === id);

  const [selectedDoctor, setSelectedDoctor] = useState(null);

  if (!branch) {
    return (
      <div className="text-center p-10">
        <p className="text-xl">Branch not found</p>
        <Link to="/" className="text-purple-600 underline">
          Back to Locations
        </Link>
      </div>
    );
  }

  const closeModal = () => setSelectedDoctor(null);

  return (
    <section className="bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 py-16 px-6 relative">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-[#9781bc] mb-10">
        Doctors at {branch.name}
      </h1>

      {/* ---- Doctor Cards ---- */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {branch.doctors.map((doc, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col"
          >
            <img
              src={doc.image}
              alt={doc.name}
              className="w-full h-60 object-cover"
            />
            <div className="p-6 text-center flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{doc.name}</h3>
                <p className="text-sm text-gray-600">{doc.specialty}</p>
              </div>
              <button
                onClick={() => setSelectedDoctor(doc)}
                className="mt-4 bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-lg transition-colors"
              >
                Book Appointment
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ---- Appointment Modal ---- */}
      <AnimatePresence>
        {selectedDoctor && (
          <>
            {/* Overlay */}
            <motion.div
              key="overlay"
              className="fixed inset-0 bg-black/40 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            />

            {/* Modal Box */}
            <motion.div
              key="modal"
              className="fixed inset-0 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6 relative">
                <button
                  onClick={closeModal}
                  className="absolute top-3 right-4 text-gray-400 hover:text-gray-600 text-xl"
                >
                  &times;
                </button>

                <h2 className="text-2xl font-bold text-[#9781bc] mb-4 text-center">
                  Appointment with {selectedDoctor.name}
                </h2>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Appointment submitted!");
                    closeModal();
                  }}
                  className="space-y-4"
                >
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-purple-300"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-purple-300"
                  />
                  <input
                    type="date"
                    required
                    className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-purple-300"
                  />
                  <button
                    type="submit"
                    className="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-lg transition-colors"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
