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


const AllRouters = () => {
  const [showAppointmentForm, setShowAppointmentForm] = useState(false);

  return (
    <div className='font-[pop]'>
      {/* Pass the function to Navbar */}
      <Navbar onContactClick={() => setShowAppointmentForm(true)} />

      {/* Floating Book Now Button */}
      <button
        onClick={() => setShowAppointmentForm(true)}
        className="fixed bottom-6 right-6 z-50 bg-[#B83A63] text-white px-6 py-4 rounded-full shadow-2xl hover:bg-pink-700 hover:scale-110 transition-all duration-300 flex items-center gap-2 font-semibold"
      >
        <Calendar className="w-5 h-5" />
        BOOK NOW
      </button>

      {/* Appointment Form Modal */}
      <AppointmentForm 
      isOpen={showAppointmentForm} 
      onClose={() => setShowAppointmentForm(false)} 
      />
      {/* Add padding-top to account for fixed navbar */}
       {/* adjust based on navbar height - do this in each page as needed*/}
      {/* <div className="pt-[140px]"> */}
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
        </Routes>
      {/* </div> */}
    </div>
  )
}

export default AllRouters