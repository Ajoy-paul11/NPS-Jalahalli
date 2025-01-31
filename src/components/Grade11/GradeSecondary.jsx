import React from 'react'
import HeroGradeSection from './HeroGradeSection';
import About from '../About';
import Footer from '../Footer';
import School from '../School';
import Facilities from '../Facilities';

function GradeSecondary() {
  return (
    <div className=" bg-[#f4f5ff] min-h-screen overflow-hidden font-poppins">
        <HeroGradeSection />
        <School />
        <hr className=" border-blue-100"/>
        <About />
        <hr className=" border-blue-100"/>
        <Facilities />
        <Footer />
      </div>
  )
}

export default GradeSecondary