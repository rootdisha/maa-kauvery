import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "../Pages/Home"
import AppointmentForm from '../Components/AppointmentForm'
import AboutOverview from '../Pages/Overview'
// import DoctorsPage from "../Components/DoctorsPage" 
import LeadershipSection from "../Pages/LeadershipSection"
import ARTServices from '../Pages/FertilityServices/ARTServices'
import AdvancedProcedures from '../Pages/FertilityServices/AdvancedProcedures'
import DiagnosticServices from '../Pages/FertilityServices/DiagnosticServices'
import AdditionalTreatments from '../Pages/FertilityServices/AdditionalTreatments'
import Infrastructure from '../Pages/FertilityServices/Infrastructure'
import AboutFertility from '../Pages/FertilityServices/AboutFertility'
import DoctorsPage from "../Pages/DoctorsPage" 

const AllRouters = () => {
  return (
    <div className='font-[pop]'>
      <div className="fixed bottom-4 right-4 z-50">
        <AppointmentForm />
      </div>
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
    </div>
  )
}

export default AllRouters