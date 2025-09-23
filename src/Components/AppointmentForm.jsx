import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AppointmentForm() {
  const [showForm, setShowForm] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    treatment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
    setShowForm(false);
  };

  return (
    <div className="flex flex-col items-center relative py-12 px-4 sm:px-6 lg:px-8 ">
      
      {/* Toggle Button */}
      <button
        onClick={() => setShowForm((prev) => !prev)}
        className="bg-white text-pink-500 border-2 border-pink-400 font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-pink-500 hover:text-white transition duration-300"
      >
        {showForm ? "Close Form" : "Book Appointment"}
      </button>

      {/* Appointment Form */}
      <AnimatePresence>
        {showForm && (
          <motion.form
            key="appointment-form"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            onSubmit={handleSubmit}
            className="mt-8 p-8 bg-white border border-pink-200 shadow-2xl rounded-2xl w-full max-w-lg space-y-5"
          >
            <h2 className="text-3xl font-bold text-center text-pink-500">
              Book Your Appointment
            </h2>

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-300 focus:border-pink-400 focus:ring focus:ring-pink-100 p-3 w-full rounded-lg outline-none transition"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 focus:border-pink-400 focus:ring focus:ring-pink-100 p-3 w-full rounded-lg outline-none transition"
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="border border-gray-300 focus:border-pink-400 focus:ring focus:ring-pink-100 p-3 w-full rounded-lg outline-none transition"
              required
            />

            <select
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="border border-gray-300 focus:border-pink-400 focus:ring focus:ring-pink-100 p-3 w-full rounded-lg outline-none transition"
              required
            >
              <option value="">Select Location</option>
              <option value="Chennai">Chennai - Vadapalani</option>
              <option value="Radial">Chennai - Radial Road</option>
              <option value="Alwarpet">Chennai – Alwarpet</option>
              <option value="Trichy-Cantonment">Trichy – Cantonment</option>
              <option value="Trichy-Heart">Trichy – Heart City</option>
              <option value="Trichy-Tennur">Trichy – Tennur</option>
              <option value="Tirunelveli">Tirunelveli</option>
              <option value="Salem">Salem</option>
              <option value="Hosur">Hosur</option>
              <option value="Bengaluru-EC">Bengaluru – Electronic City</option>
              <option value="Bengaluru-Mara">Bengaluru – Marathahalli</option>
              <option value="MAA">MAA Kauvery Trichy</option>
            </select>

            <select
              name="treatment"
              value={formData.treatment}
              onChange={handleChange}
              className="border border-gray-300 focus:border-pink-400 focus:ring focus:ring-pink-100 p-3 w-full rounded-lg outline-none transition"
              required
            >
              <option value="">Select Treatment</option>
              <option value="Fertility Consultation">Fertility Consultation</option>
              <option value="IVF">IVF</option>
              <option value="IUI">IUI</option>
              <option value="Embryology Services">Embryology Services</option>
            </select>

            <button
              type="submit"
              className="bg-pink-500 text-white px-6 py-3 rounded-xl w-full font-semibold hover:bg-pink-600 transition duration-300"
            >
              Submit
            </button>
          </motion.form>
        )}
      </AnimatePresence>

      {/* Confirmation Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setShowModal(false)}
            />

            <motion.div
              className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full text-center border-t-4 border-pink-500"
              initial={{ opacity: 0, scale: 0.8, y: -30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -30 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-pink-500">
                Appointment Confirmed!
              </h3>
              <p className="mb-6 text-gray-700">
                Thank you <b>{formData.name}</b>. Your appointment at <b>{formData.location}</b> has been booked successfully.
              </p>
              <button
                onClick={() => setShowModal(false)}
                className="bg-pink-500 text-white px-6 py-2 rounded-xl font-semibold hover:bg-pink-600 transition"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
