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

      {/* Floating Heart Button - Custom SVG */}
      <button
        onClick={() => setShowAppointmentForm(true)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 lg:bottom-12 lg:right-12 z-50 
          p-2 sm:p-3 md:p-4
          hover:scale-110 sm:hover:scale-125 
          active:scale-95
          transition-all duration-300 
          animate-pulse
          cursor-pointer
          group"
        aria-label="Book an appointment"
      >
        <svg 
          className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 group-hover:animate-pulse" 
          viewBox="0 0 100 100" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Gradient Definitions */}
          <defs>
            <radialGradient id="outerGradient" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#E879F9" stopOpacity="0.3" />
              <stop offset="70%" stopColor="#C084FC" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#A855F7" stopOpacity="0.1" />
            </radialGradient>
            <radialGradient id="middleGradient" cx="50%" cy="40%" r="50%">
              <stop offset="0%" stopColor="#F472B6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#EC4899" stopOpacity="0.4" />
            </radialGradient>
            <linearGradient id="innerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF8A50" />
              <stop offset="30%" stopColor="#FF6B35" />
              <stop offset="70%" stopColor="#FF4444" />
              <stop offset="100%" stopColor="#E53E3E" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Outer Heart Layer - Asymmetric & Stretched */}
          <path 
            d="M50,85 C28,63 12,45 12,28 C12,16 20,8 32,8 C38,8 44,11 50,18 C55,12 60,10 65,10 C75,10 85,18 85,30 C85,45 70,65 50,85 Z" 
            fill="url(#outerGradient)"
            className="group-hover:scale-105 transition-transform duration-300"
            transform="scale(1.1, 1) translate(-2, -3)"
          />
          
          {/* Middle Heart Layer - Stretched */}
          <path 
            d="M50,75 C31,56 20,42 20,28 C20,19 26,13 35,13 C40,13 45,16 50,22 C56,17 60,15 64,15 C72,15 78,21 78,30 C78,42 67,58 50,75 Z" 
            fill="url(#middleGradient)"
            className="group-hover:scale-110 transition-transform duration-300"
            transform="scale(1.08, 1) translate(-1, -2)"
          />
          
          {/* Inner Droplet Core */}
          <path 
            d="M50,60 C50,60 35,45 35,32 C35,24 41,18 50,18 C59,18 65,24 65,32 C65,45 50,60 50,60 Z" 
            fill="url(#innerGradient)"
            filter="url(#glow)"
            className="group-hover:scale-115 transition-transform duration-300"
          />
          
          {/* Subtle highlight on droplet */}
          <ellipse 
            cx="47" 
            cy="28" 
            rx="4" 
            ry="6" 
            fill="rgba(255,255,255,0.4)"
            className="group-hover:opacity-60 transition-opacity duration-300"
          />
        </svg>
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