import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { maakauveryEmail } from "../utils/constants"
import { X, Calendar, Mail } from "lucide-react";
import { getLocations } from "../utils/doctorsData";

export default function SimpleAppointmentForm({ isOpen, onClose }) {
  const [locations, setLocations] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    comment: ""
  });

  useEffect(() => {
    const loadLocations = async () => {
      const locs = await getLocations();
      setLocations(locs);
      console.log(locs);
    };
    loadLocations();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleChangeLocation = (e) => {
  //   const value = e.target.value;
  //   setSelectedLocation(value);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const subject = `Appointment Request from ${formData.name}`;
    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
      `Location: ${formData.location}`,
      formData.comment ? `\r\nComments:\r\n${formData.comment}` : '',
      '\r\nSent from Maa Kauvery website.'
    ].filter(Boolean).join('\r\n');

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
        <div className="bg-gradient-to-r via-[#876dad]/40 from-pink-900/50 to-transparent text-[#B83A63] p-6">
          <div className="flex items-center gap-3">
            <Calendar className="w-8 h-8" />
            <h2 className="text-2xl font-bold">Book an Appointment</h2>
          </div>
          <p className="mt-2 text-[#B83A63]/60 ">Fill out the form below and we'll get back to you</p>
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
              Location <span className="text-red-500">*</span>
            </label>
            <select
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition bg-white"
            >
              <option value="">Select Location</option>
              {locations.map((location, index) => (
                <option key={index} value={location}>
                  {location}
                </option>
              ))}
            </select>
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
            className="w-full bg-[#B83A63] text-white py-3 rounded-lg font-semibold hover:bg-pink-700 transition-colors flex items-center justify-center gap-2 shadow-lg"
          >
            <Mail className="w-5 h-5" />
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
}

// working on mail feature