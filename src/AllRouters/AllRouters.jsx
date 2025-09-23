import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "../Pages/Home"
import AppointmentForm from '../Components/AppointmentForm'
import AboutOverview from '../Pages/Overview'
import DoctorsPage from "../Components/DoctorsPage" 
import LeadershipSection from "../Pages/LeadershipSection"

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
        </Routes>
    </div>
  )
}

export default AllRouters