import React from 'react'
import Navbar from '@/components/ui/Navbar'
import { FooterSection } from '@/components/aboutPage/FooterSection'
import Registeration from '@/components/programBMC/Registeration'
import BmcDefinition from '@/components/programBMC/bmcDefinition'

const ProgramLayout = () => {
  return (
    <div className="min-h-screen text-white bg-gradient-to-r from-[#79CCEA] to-[#8257A9]">
      <div className="">
        <Navbar />
        <Registeration />
        <BmcDefinition />
      </div>
    </div>
  )
}

export default ProgramLayout
