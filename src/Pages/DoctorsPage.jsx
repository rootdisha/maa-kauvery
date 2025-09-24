import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Award, BookOpen, Users, X, Calendar, Phone } from "lucide-react";
import Papa from "papaparse";

export default function DoctorsPage() {
  const [doctors, setDoctors] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Load CSV data
    const loadDoctors = async () => {
      try {
        // Try loading from public folder
        const response = await fetch('/doctors_data.csv');
        
        if (!response.ok) {
          throw new Error('CSV file not found');
        }
        
        const csvText = await response.text();
        
        const parsed = Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          dynamicTyping: false,
          transformHeader: (header) => header.trim() // Clean whitespace from headers
        });

        console.log("Parsed headers:", parsed.meta.fields);
        console.log("Parsed data count:", parsed.data.length);
        console.log("First doctor:", parsed.data[0]);

        if (parsed.data.length === 0) {
          throw new Error('No doctors found in CSV');
        }

        setDoctors(parsed.data);
        setLoading(false);
      } catch (error) {
        console.error("Error loading doctors:", error);
        setError(error.message);
        setLoading(false);
      }
    };

    loadDoctors();
  }, []);

  // Get unique locations
  const locations = ["all", ...new Set(
    doctors
      .map(d => d.Location?.trim())
      .filter(Boolean)
  )];

  // Filter doctors by location
  const filteredDoctors = selectedLocation === "all" 
    ? doctors 
    : doctors.filter(d => d.Location?.trim() === selectedLocation);

  // Group doctors by location for display
  const groupedDoctors = {};
  filteredDoctors.forEach(doc => {
    const loc = doc.Location?.trim();
    if (loc && doc["Doctor name"]) { // Only include if has name and location
      if (!groupedDoctors[loc]) groupedDoctors[loc] = [];
      groupedDoctors[loc].push(doc);
    }
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 flex items-center justify-center">
        <div className="text-center">
          <div className="text-2xl text-[#9781bc] mb-4">Loading doctors...</div>
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#9781bc] mx-auto"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 flex items-center justify-center">
        <div className="bg-white rounded-2xl p-8 shadow-lg max-w-md text-center">
          <div className="text-red-500 text-xl font-bold mb-4">Error Loading Doctors</div>
          <p className="text-gray-700 mb-4">{error}</p>
          <p className="text-sm text-gray-600">
            Please make sure <code className="bg-gray-100 px-2 py-1 rounded">doctors_data.csv</code> is in the <code className="bg-gray-100 px-2 py-1 rounded">public</code> folder.
          </p>
        </div>
      </div>
    );
  }

  if (doctors.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 flex items-center justify-center">
        <div className="bg-white rounded-2xl p-8 shadow-lg max-w-md text-center">
          <div className="text-gray-700 text-xl font-bold mb-4">No Doctors Found</div>
          <p className="text-gray-600">The CSV file appears to be empty or incorrectly formatted.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#9781bc] py-16 px-6 text-white">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Fertility Specialists</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Meet our expert team of reproductive medicine specialists dedicated to helping you achieve your dream of parenthood
          </p>
          <p className="text-sm mt-2 opacity-75">({doctors.length} doctors across {locations.length - 1} locations)</p>
        </motion.div>
      </section>

      {/* Location Filter */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {locations.map((loc) => (
            <button
              key={loc}
              onClick={() => setSelectedLocation(loc)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                selectedLocation === loc
                  ? "bg-[#9781bc] text-white shadow-lg scale-105"
                  : "bg-white text-[#9781bc] hover:bg-purple-100"
              }`}
            >
              {loc === "all" ? `All Locations (${doctors.length})` : `${loc} (${doctors.filter(d => d.Location?.trim() === loc).length})`}
            </button>
          ))}
        </div>
      </section>

      {/* Doctors Grid - Grouped by Location */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        {Object.keys(groupedDoctors).length === 0 ? (
          <div className="text-center text-gray-600 py-12">
            No doctors found for this location.
          </div>
        ) : (
          Object.keys(groupedDoctors).map((location) => (
            <div key={location} className="mb-12">
              {/* Location Header */}
              {selectedLocation === "all" && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 mb-6"
                >
                  <MapPin className="w-6 h-6 text-[#9781bc]" />
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800">{location}</h2>
                  <div className="h-0.5 flex-1 bg-gradient-to-r from-[#9781bc] to-transparent"></div>
                </motion.div>
              )}

              {/* Doctor Cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {groupedDoctors[location].map((doctor, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8 }}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden cursor-pointer"
                    onClick={() => setSelectedDoctor(doctor)}
                  >
                    {/* Doctor Image */}
                    <div className="h-64 overflow-hidden bg-purple-100 relative group">
                      {doctor["Doctor photo"] ? (
                        <img 
                          src={doctor["Doctor photo"]} 
                          alt={doctor["Doctor name"]}
                          // className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          // className="w-full overflow-hidden bg-purple-100 transition-transform duration-300 group-hover:scale-110"
                          className="w-full h-full object-cover object-top scale-90 transition-transform duration-300 group-hover:scale-110"
                          // className="w-full h-full object-contain bg-purple-100 transition-transform duration-300 group-hover:scale-110"
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                        />
                      ) : null}
                      {/* Doctor Image Placeholder */}
                      {!doctor["Doctor photo"] && (
                        <div className="h-full bg-gradient-to-br from-purple-200 to-pink-200 flex items-center justify-center">
                          <Users className="w-20 h-20 text-white opacity-50" />
                        </div>
                      )} 
                    </div>

                    {/* Doctor Info */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-1">
                        {doctor["Doctor name"]}
                      </h3>
                      <p className="text-sm text-[#9781bc] font-semibold mb-3">
                        {doctor.Title}
                      </p>
                      <p className="text-sm text-gray-600 mb-4">
                        {doctor.Speciality}
                      </p>
                      
                      {/* Quick Info */}
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-start gap-2">
                          <Award className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                          <span className="line-clamp-2">{doctor["Qualification"]}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-purple-500 flex-shrink-0" />
                          <span>{doctor.Location}</span>
                        </div>
                      </div>

                      <button className="mt-6 w-full bg-[#9781bc] text-white py-2 rounded-lg font-semibold hover:bg-[#876dad] transition-colors">
                        View Full Profile
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))
        )}
      </section>

      {/* Doctor Detail Modal */}
      <AnimatePresence>
        {selectedDoctor && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
            onClick={() => setSelectedDoctor(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-gradient-to-r from-[#9781bc] to-purple-600 text-white p-6 rounded-t-3xl z-10">
                <button
                  onClick={() => setSelectedDoctor(null)}
                  className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                
                <div className="flex items-start gap-6">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-12 h-12" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold mb-2">
                      {selectedDoctor["Doctor name"]}
                    </h2>
                    <p className="text-lg opacity-90 mb-2">{selectedDoctor.Title}</p>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4" />
                      <span>{selectedDoctor.Location}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 space-y-6">
                {/* Speciality & Qualifications */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-purple-50 rounded-xl p-4">
                    <h3 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                      <Award className="w-5 h-5 text-[#9781bc]" />
                      Speciality
                    </h3>
                    <p className="text-gray-700">{selectedDoctor.Speciality}</p>
                  </div>
                  <div className="bg-purple-50 rounded-xl p-4">
                    <h3 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-[#9781bc]" />
                      Qualifications
                    </h3>
                    <p className="text-gray-700">{selectedDoctor["Qualification"]}</p>
                  </div>
                </div>

                {/* Basic Profile */}
                {selectedDoctor["Basic Profile"] && (
                  <div>
                    <h3 className="font-bold text-xl text-gray-800 mb-3">About</h3>
                    <div className="text-gray-700 leading-relaxed space-y-2">
                      {selectedDoctor["Basic Profile"].split('\n').map((line, i) => {
                        const trimmed = line.trim();
                        if (!trimmed) return null;
                        
                        // Check if line is a bullet point (starts with \t or •)
                        if (line.startsWith('\t') || trimmed.startsWith('•')) {
                          return (
                            <li key={i} className="flex items-start gap-2 ml-4">
                              <span className="text-purple-500 mt-1.5">•</span>
                              <span>{trimmed.replace(/^•\s*/, '')}</span>
                            </li>
                          );
                        }
                        
                        // Regular paragraph
                        return <p key={i} className="mb-2">{trimmed}</p>;
                      })}
                    </div>
                  </div>
                )}

                {/* Area of Expertise */}
                {selectedDoctor["Area of Expertise"] && (
                  <div>
                    <h3 className="font-bold text-xl text-gray-800 mb-3">Area of Expertise</h3>
                    <div className="bg-blue-50 rounded-xl p-4">
                      <ul className="text-gray-700 space-y-2">
                        {selectedDoctor["Area of Expertise"].split('\n').map((line, i) => {
                          const trimmed = line.trim();
                          if (!trimmed) return null;
                          
                          if (line.startsWith('\t') || trimmed.startsWith('•')) {
                            return (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-blue-500 mt-1.5">•</span>
                                <span>{trimmed.replace(/^•\s*/, '')}</span>
                              </li>
                            );
                          }
                          return <div key={i} className="mb-2">{trimmed}</div>;
                        })}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Professional Memberships */}
                {selectedDoctor["Professional Memberships"] && (
                  <div>
                    <h3 className="font-bold text-xl text-gray-800 mb-3">Professional Memberships</h3>
                    <div className="bg-green-50 rounded-xl p-4">
                      <ul className="text-gray-700 space-y-2">
                        {selectedDoctor["Professional Memberships"].split('\n').map((line, i) => {
                          const trimmed = line.trim();
                          if (!trimmed) return null;
                          
                          if (line.startsWith('\t') || trimmed.startsWith('•')) {
                            return (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-green-600 mt-1.5">•</span>
                                <span>{trimmed.replace(/^•\s*/, '')}</span>
                              </li>
                            );
                          }
                          return <div key={i} className="mb-2">{trimmed}</div>;
                        })}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Latest Videos and Articles */}
                {selectedDoctor["Latest videos and articles"] && (
                  <div>
                    <h3 className="font-bold text-xl text-gray-800 mb-3">Latest Videos & Articles</h3>
                    <div className="bg-pink-50 rounded-xl p-4">
                      <ul className="text-gray-700 space-y-2">
                        {selectedDoctor["Latest videos and articles"].split('\n').map((line, i) => {
                          const trimmed = line.trim();
                          if (!trimmed) return null;
                          
                          if (line.startsWith('\t') || trimmed.startsWith('•')) {
                            return (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-pink-500 mt-1.5">•</span>
                                <span>{trimmed.replace(/^•\s*/, '')}</span>
                              </li>
                            );
                          }
                          return <div key={i} className="mb-2">{trimmed}</div>;
                        })}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button className="flex-1 bg-[#9781bc] text-white py-3 rounded-lg font-semibold hover:bg-[#876dad] transition-colors flex items-center justify-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Book Appointment
                  </button>
                  <button className="flex-1 bg-white border-2 border-[#9781bc] text-[#9781bc] py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors flex items-center justify-center gap-2">
                    <Phone className="w-5 h-5" />
                    Contact Doctor
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}