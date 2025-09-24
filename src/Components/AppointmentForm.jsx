import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { maakauveryEmail } from "../utils/constants"
import { X, Calendar, Mail } from "lucide-react";

//export default 
function AppointmentForm() {
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
        className="hover:bg-white hover:text-pink-700 border-2  
          font-semibold px-6 py-3 rounded-full shadow-lg 
          bg-pink-700 text-white 
          transition duration-300"
      >
        {showForm ? "Close Form" : "BOOK NOW"}
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

function SimpleAppointmentForm0({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    comment: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create email content
    const subject = `Appointment Request from ${formData.name}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
${formData.comment ? `\nComments:\n${formData.comment}` : ''}
    `.trim();

    // Create mailto link
    const mailtoLink = `mailto:${maakauveryEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Close form
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Header */}
            <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-6 rounded-t-2xl">
              <div className="flex items-center gap-3">
                <Calendar className="w-8 h-8" />
                <h2 className="text-2xl font-bold">Book an Appointment</h2>
              </div>
            </div>

            {/* Form */}
            <div className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Comments (Optional)
                  </label>
                  <textarea
                    name="comment"
                    value={formData.comment}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Any specific requirements or questions..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-pink-600 text-white py-3 rounded-lg font-semibold hover:bg-pink-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Book Now
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function SimpleAppointmentForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    comment: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const subject = `Appointment Request from ${formData.name}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
${formData.comment ? `\nComments:\n${formData.comment}` : ''}
    `.trim();

    const mailtoLink = `mailto:${maakauveryEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/80 rounded-full p-1 text-gray-600 hover:text-gray-900 hover:bg-white transition-colors"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header */}
        <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-6">
          <div className="flex items-center gap-3">
            <Calendar className="w-8 h-8" />
            <h2 className="text-2xl font-bold">Book an Appointment</h2>
          </div>
          <p className="mt-2 text-pink-100">Fill out the form below and we'll get back to you</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your full name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="+91 98765 43210"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Comments (Optional)
            </label>
            <textarea
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              rows={3}
              placeholder="Any specific requirements or questions..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-3 rounded-lg font-semibold hover:bg-pink-700 transition-colors flex items-center justify-center gap-2 shadow-lg"
          >
            <Mail className="w-5 h-5" />
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
}