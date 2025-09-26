import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Home from "../Pages/Home"
import AppointmentForm from '../Components/AppointmentForm'
import AboutOverview from '../Pages/Overview'
import LeadershipSection from "../Pages/LeadershipSection"
import ARTServices from '../Pages/FertilityServices/ARTServices'
import AdvancedProcedures from '../Pages/FertilityServices/AdvancedProcedures'
import DiagnosticServices from '../Pages/FertilityServices/DiagnosticServices'
import AdditionalTreatments from '../Pages/FertilityServices/AdditionalTreatments'
import Infrastructure from '../Pages/FertilityServices/Infrastructure'
import AboutFertility from '../Pages/FertilityServices/AboutFertility'
import DoctorsPage from "../Pages/DoctorsPage" 
import { Calendar } from 'lucide-react'
import PlaceholderPage from '../Pages/PlaceholderPage'
import Stories from '../Pages/Stories'

const AllRouters = () => {
  const [showAppointmentForm, setShowAppointmentForm] = useState(false);

  return (
    <div className='font-[pop]'>
      {/* Pass the function to Navbar */}
      <Navbar onContactClick={() => setShowAppointmentForm(true)} />

      {/* Floating Book Now Button - Responsive */}
      <button
        onClick={() => setShowAppointmentForm(true)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 lg:bottom-12 lg:right-12 z-50 
          bg-gradient-to-br from-[#FF8A50] to-[#B83A63] 
          text-white
          px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4 
          rounded-full shadow-xl sm:shadow-2xl 
          hover:scale-105 sm:hover:scale-110 
          active:scale-95
          transition-all duration-300 
          flex items-center gap-1 sm:gap-2 
          font-semibold text-xs sm:text-sm md:text-base
          animate-pulse
          border border-white/20
          backdrop-blur-sm
          group"
        aria-label="Book an appointment"
      >
        <Calendar className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:rotate-12 transition-transform duration-300" />
        <span className="hidden sm:inline">BOOK NOW</span>
      </button>

      {/* Appointment Form Modal */}
      <AppointmentForm 
        isOpen={showAppointmentForm} 
        onClose={() => setShowAppointmentForm(false)} 
      />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/branch/:id" element={<DoctorsPage />} />
        <Route path='/Overview' element={<AboutOverview />} />
        <Route path='/LeadershipSection' element={<LeadershipSection />} />
        <Route path='/fertility/about' element={<AboutFertility />} />
        <Route path='/fertility/art-services' element={<ARTServices />} />
        <Route path='/fertility/advanced-procedures' element={<AdvancedProcedures />} />
        <Route path='/fertility/diagnostic-services' element={<DiagnosticServices />} />
        <Route path='/fertility/additional-treatments' element={<AdditionalTreatments />} />
        <Route path='/fertility/infrastructure' element={<Infrastructure />} />
        <Route path='/doctors' element={<DoctorsPage />} />
        <Route path='/contact' element={<PlaceholderPage />} />
        <Route path='/wip' element={<PlaceholderPage />} /> 
        <Route path='/stories' element={<Stories />} /> 
      </Routes>
    </div>
  )
}

export default AllRouters