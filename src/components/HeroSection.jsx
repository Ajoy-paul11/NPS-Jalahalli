import React from "react";
import jalahalli from "../assets/NPS-logo.jpg";
import Marquee from "react-fast-marquee";
import FormAdmission from "./Form/Form";
import school from "../assets/jalahalli-school.avif";
import Tagline from "./Tagline";

function HeroSection() {
  return (
    <div style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(${school})` }} className=" bg-cover bg-center bg-no-repeat xl:h-screen">
      <div className="  p-4 flex flex-col lg:flex-row lg:justify-evenly items-center gap-4">
        <div>
          <img
            src={jalahalli}
            alt="logo-school"
            className="h-[75px] lg:w-[300px] 2xl:w-[330px] rounded"
          />
        </div>
        <div className=" max-w-2xl">
          <Marquee className=" text-blue font-semibold text-xl">
           <Tagline />
            <Tagline />      
         </Marquee>
        </div>
      </div>
      <div className=" container mx-auto p-8 my-6 flex flex-col lg:flex-row justify-center items-center gap-8">
        <div className=" px-4 order-2 lg:order-1">
          <h1 className=" text-4xl text-white mb-6 font-bold">
            Best CBSE School in Jalahalli
          </h1>
          <p className=" text-lg text-white my-2 indent-8">
            NPS, Jalahalli has a sprawling 8 acres campus with state-of-the-art
            infrastructure comprising of facilities like fully equipped Labs,
            Audio Visual Room, art centre, Music room, Conference Room,
            Multipurpose Hall, Health centre, Counselling Centre, Athletic and
            Sports facilities like Indoor Badminton court, Basketball Court,
            Cricket and Football field and various indoor sports.
            </p>
            <p className=" text-lg text-white my-4 indent-8">
              National Public School, Jalahalli is a progressive child-centric
              School, driven by its core values, set in a warm and nurturing
              Environment, emphasizing personalized attention, upholding
              academic excellence and the holistic development of each child. We
              attribute it to our visionary Dr. K.P. Gopalkrishna, Founding
              Chairman of NPS Education Institutions, who has formulated and
              guided us to make NPS Jalahalli from every step of its
              implementation.
          </p>
        </div>
        <div className="  bg-white/10 order-1">
          <FormAdmission />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
