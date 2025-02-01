import React, { useState, useEffect } from "react";
import jalahalli from "../assets/NPS-logo.jpg";
import Marquee from "react-fast-marquee";
import FormAdmission from "./Form/Form";
import school from "../assets/jalahalli-school.avif";
import Tagline from "./Tagline";
import { Link } from "react-router-dom";

function MobileView() {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url(${school})`,
      }}
      className=" bg-cover bg-center bg-no-repeat xl:h-screen"
    >
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
            <Tagline />
            <Tagline />
          </Marquee>
        </div>
      </div>
      {/* <div className="bg-[rgba(255,255,255,0.4)] backdrop-blur-lg">
      <nav className=" text-blue font-semibold text-sm lg:text-base xl:text-lg px-4 py-2">
        <ul className=" flex gap-4 lg:justify-between xl:justify-evenly items-center">
          <li className=" cursor-pointer">
            <Link>Principal Message</Link>
          </li>
          <li className=" cursor-pointer">
            <Link>Director Message</Link>
          </li>
          <li className=" cursor-pointer">
            <Link>Library</Link>
          </li>
          <li className=" cursor-pointer">
            <Link>Student Activity</Link>
          </li>
          <li className=" cursor-pointer">
            <Link>Student Achievement</Link>
          </li>
          <li className=" cursor-pointer">
            <Link>Teacher Achievement</Link>
          </li>
        </ul>
      </nav>
    </div> */}
      <div className=" md:absolute lg:top-[170px] xl:top-[240px] 2xl:top-[250px] md:left-[120px] lg:left-[190px] xl:left-[170px] 2xl:left-[330px]">
        <h1 className=" text-2xl md:text-3xl lg:text-4xl text-white font-bold text-center">
          Welcome to <br className=" hidden lg:block xl:hidden" />{" "}
          <span className=" text-blue">NPS Jalahalli </span> Institute
        </h1>
      </div>
      <div className=" container mx-auto p-8 my-6 flex flex-col lg:flex-row justify-center items-center gap-8 lg:justify-end">
        <div className="  bg-white/10 order-1">
          <FormAdmission />
        </div>
      </div>
    </div>
  );
}

function LargeView() {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url(${school})`,
      }}
      className=" bg-cover bg-center bg-no-repeat xl:h-screen"
    >
      <div className=" w-full bg-blue-500 rounded-sm py-4 px-2">
        <Marquee className=" text-white font-semibold text-xl">
          <Tagline />
          <Tagline />
        </Marquee>
      </div>
      <div className=" bg-[rgba(255,255,255,0.4)] backdrop-blur-lg px-4 py-1 flex flex-col lg:flex-row lg:justify-evenly items-center gap-4">
        <div>
          <img
            src={jalahalli}
            alt="logo-school"
            className="h-[75px] lg:w-[300px] 2xl:w-[330px] rounded"
          />
        </div>
        <div className="">
          <nav className=" text-blue font-semibold text-sm lg:text-base xl:text-lg px-4 py-2">
            <ul className=" flex gap-4 lg:justify-between xl:justify-evenly items-center">
              <li className=" cursor-pointer">
                <Link>Grade-11 & 12</Link>
              </li>
              <li className=" cursor-pointer">
                <Link>About Us</Link>
              </li>
              <li className=" cursor-pointer">
                <Link>Library</Link>
              </li>
              <li className=" cursor-pointer">
                <Link>Student Activity</Link>
              </li>
              <li className=" cursor-pointer">
                <Link>Achievement</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className=" md:absolute lg:top-[170px] xl:top-[240px] 2xl:top-[250px] md:left-[120px] lg:left-[190px] xl:left-[170px] 2xl:left-[330px]">
        <h1 className=" text-2xl md:text-3xl lg:text-4xl text-white font-bold text-center">
          Welcome to <br className=" hidden lg:block xl:hidden" />{" "}
          <span className=" text-blue">NPS Jalahalli </span> Institute
        </h1>
      </div>
      <div className=" container mx-auto p-8 my-6 flex flex-col lg:flex-row justify-center items-center gap-8 lg:justify-end">
        <div className="  bg-white/10 order-1">
          <FormAdmission />
        </div>
      </div>
    </div>
  );
}

function HeroSection() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.addEventListener("resize", handleResize);
    };
  }, []);

  return <div>{windowWidth < 720 ? <MobileView /> : <LargeView />}</div>;
}

export default HeroSection;
