import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { maakauveryEmails } from "../utils/constants"
import { X, Calendar, Mail, Loader } from "lucide-react";
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  useEffect(() => {
    const loadLocations = async () => {
      const locs = await getLocations();
      setLocations(locs);
    };
    loadLocations();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitToWeb3Forms = async (accessKey, toEmail) => {
    const formPayload = new FormData();
    formPayload.append('access_key', accessKey);
    formPayload.append('subject', `Maa Kauvery Appointment Request from ${formData.name}`);
    formPayload.append('from_name', formData.name);
    formPayload.append('email', formData.email);
    formPayload.append('phone', formData.phone);
    formPayload.append('location', formData.location);
    formPayload.append('message', formData.comment + ' - Sent from Maa Kauvery website.' || 'No additional comments');
    formPayload.append('to_email', toEmail);

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formPayload
    });

    return response.json();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Submit to all email addresses with their respective keys
      const submissions = maakauveryEmails.map(config => 
        submitToWeb3Forms(config.accessKey, config.email)
      );
      
      const results = await Promise.all(submissions);

      // Check if all submissions were successful
      const allSuccessful = results.every(result => result.success);

      if (allSuccessful) {
        setSubmitStatus('success');
        // Reset form
        setFormData({ name: "", email: "", phone: "", location: "", comment: "" });
        // Auto-close after 2 seconds
        setTimeout(() => {
          onClose();
          setSubmitStatus(null);
        }, 2000);
      } else {
        setSubmitStatus('error');
        const failedResults = results.filter(r => !r.success);
        console.error('Web3Forms error:', failedResults.map(r => r.message).join(', '));
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
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
          <p className="mt-2 text-[#B83A63]/60">Fill out the form below and we'll get back to you</p>
        </div>

        {/* Success/Error Messages */}
        {submitStatus === 'success' && (
          <div className="mx-6 mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-800 font-medium">
              ✅ Appointment request sent successfully! We'll contact you soon.
            </p>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="mx-6 mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-800 font-medium">
              ❌ Sorry, there was an error. Please try again or call us directly.
            </p>
          </div>
        )}

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
              disabled={isSubmitting}
              placeholder="Your full name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition disabled:opacity-50"
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
              disabled={isSubmitting}
              placeholder="your.email@example.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition disabled:opacity-50"
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
              disabled={isSubmitting}
              placeholder="+91 98765 43210"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition disabled:opacity-50"
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
              disabled={isSubmitting}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition bg-white disabled:opacity-50"
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
              disabled={isSubmitting}
              placeholder="Any specific requirements or questions..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition resize-none disabled:opacity-50"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting || !formData.name || !formData.email || !formData.phone || !formData.location}
            className="w-full bg-[#B83A63] text-white py-3 rounded-lg font-semibold hover:bg-pink-700 transition-colors flex items-center justify-center gap-2 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                Sending...
              </>
            ) : (
              <>
                <Mail className="w-5 h-5" />
                Book Now
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}