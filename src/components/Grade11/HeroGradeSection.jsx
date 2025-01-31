import React from "react";
import jalahalli from "../../assets/NPS-logo.jpg";
import Marquee from "react-fast-marquee";
import FormGradeSecondary from "../Form/FormGradeSecondary";
import school from "../../assets/jalahalli-school.avif";
// import Tagline from "../Tagline";
import TaglineSecondary from "./TaglineSecondary";

function HeroGradeSection() {
  return (
    <div style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url(${school})` }} className=" bg-cover bg-center bg-no-repeat xl:h-screen">
      <div className="  p-4 flex flex-col lg:flex-row lg:justify-evenly items-center gap-4">
        <div>
          <img
            src={jalahalli}
            alt="logo-school"
            className="h-[75px] lg:w-[300px] 2xl:w-[330px] rounded"
          />
        </div>
        <div className=" max-w-2xl bg-blue-500 rounded-sm py-4 px-2">
          <Marquee className=" text-white font-semibold text-xl">
           <TaglineSecondary />
            <TaglineSecondary />  
         </Marquee>
        </div>
      </div>
      <div className=" md:absolute lg:top-[170px] xl:top-[240px] 2xl:top-[250px] md:left-[120px] lg:left-[190px] xl:left-[170px] 2xl:left-[330px]">
        <h1 className=" text-2xl md:text-3xl lg:text-4xl text-white font-bold text-center">
          Welcome to <br className=" hidden lg:block xl:hidden"/> <span className=" text-blue">NPS Jalahalli  </span> Institute
        </h1>
      </div>
      <div className=" container mx-auto p-8 my-6 flex flex-col lg:flex-row justify-center items-center gap-8 lg:justify-end">
        <div className="  bg-white/10 order-1">
         <FormGradeSecondary />
        </div>
      </div>
    </div>
  )
}

export default HeroGradeSection