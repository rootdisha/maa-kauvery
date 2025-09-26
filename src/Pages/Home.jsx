import React from 'react'
import HeroSection from '../Components/HeroSection'
import FertilityTreatments from '../Components/FertilityTreatments'
import StatsSection from '../Components/StatsSection'
import FAQSection from '../Components/FAQSection'
import IVFSection from '../Components/IVFSection'
import BranchList from '../Components/BranchList'

const Home = () => {
  return (
    <div className="min-h-screen">
        <HeroSection />
        <FertilityTreatments />
        <BranchList />
        <StatsSection />
        <IVFSection />
        <FAQSection />
    </div>
  )
}

export default Home