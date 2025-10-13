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
import BranchesPage from '../Pages/BranchesPage'
import WIPPage from '../Pages/WIPPage'
import Stories from '../Pages/Stories'
import MaaKAuveryHeartIcon from '../Components/MaaKauveryHeartIcon'
import IVFCompleteGuide from '../Pages/FertilityServices/IVFCompleteGuide'
import SurgicalProceduresHub from '../Pages/FertilityServices/SurgicalProceduresHub'
import LaparoscopicProcedures from '../Pages/FertilityServices/LaparoscopicProcedures'
import RejuvenativeTherapies from '../Pages/FertilityServices/RejuvenativeTherapies'
import ObstetricProcedures from '../Pages/FertilityServices/ObstetricProcedures'
import ARTProceduresDetailed from '../Pages/FertilityServices/ARTProceduresDetailed'
import ControlledOvarianStimulation from '../Pages/FertilityServices/ControlledOvarianStimulation'

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
          group
          drop-shadow-[0_0_20px_rgba(184,58,99,0.8)]
          hover:drop-shadow-[0_0_30px_rgba(251,191,36,1.0)]"
        aria-label="Book an appointment"
      >
        <MaaKAuveryHeartIcon 
          className="w-16 h-16 
                      sm:w-20 sm:h-20 
                      md:w-24 md:h-24 
                      lg:w-28 lg:h-28 
                      group-hover:animate-pulse" 
        />
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
        <Route path='/contact' element={<BranchesPage />} />
        <Route path='/wip' element={<WIPPage />} /> 
        <Route path='/stories' element={<Stories />} /> 
        <Route path='/fertility/ivf-complete-guide' element={<IVFCompleteGuide />} /> 
        <Route path='/fertility/controlled-ovarian-stimulation' element={<ControlledOvarianStimulation />} />
        
        <Route path='/fertility/surgical-procedures' element={<SurgicalProceduresHub />} />
        <Route path='/fertility/laparoscopic-procedures' element={<LaparoscopicProcedures />} />
        <Route path='/fertility/rejuvenative-therapies' element={<RejuvenativeTherapies />} />
        <Route path='/fertility/art-procedures' element={<ARTProceduresDetailed />} />
        <Route path='/fertility/obstetric-procedures' element={<ObstetricProcedures />} />
      </Routes>
    </div>
  )
}

export default AllRouters