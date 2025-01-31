import React from 'react'
import FacilityCard from './FacilityCard';
import sport from "../assets/facility/sports.png";
import lab from "../assets/facility/lab.png";
import audio from "../assets/facility/audioroom.png";
import counseling from "../assets/facility/counseling.png";
import health from "../assets/facility/healthcare.png";
import library from "../assets/facility/library-icon.png";


function Facilities() {
  return (
    <div className=' container mx-auto p-8'>
        <div className=" px-4">
            <h2 className=" text-center text-3xl lg:text-4xl font-bold text-blue mb-2 lg:mb-4"> OUR FACILITIES</h2>
            <h5 className=" text-center text-xl lg:text-2xl font-semibold text-blue mb-2 lg:mb-4">Understanding the easy to use process</h5>
            <div className=' h-1 bg-[#0d6efd] mx-auto w-[100px] my-6'></div>
        </div>
        <div className=' grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6'>
            <FacilityCard icon={sport} title={"Sports"} description={"A variety of outdoor and indoor sports are offered at NPS Jalahalli."}/>
            <FacilityCard icon={lab} title={"Fully equipped Labs"} description={"These are fully equipped to meet the curriculum requirements for practicals."}/>
            <FacilityCard icon={audio} title={"Audio Visual Room"} description={"At NPS Jalahalli the Audio room are spacious in order to provide."}/>
            <FacilityCard icon={counseling} title={"Counseling Centre"} description={"School counselors provide crisis intervention services and individual."}/>
            <FacilityCard icon={health} title={"Health Care"} description={"The health care centre is the place students go to when they are in need."}/>
            <FacilityCard icon={library} title={"Library / Media care"} description={"The library which is the main resource centre for the students and the faculty."}/>
        </div>
    </div>
  )
}

export default Facilities