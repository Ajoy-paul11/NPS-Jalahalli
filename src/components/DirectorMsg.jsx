import React, { useState, useEffect } from "react";
import jalahalli from "../assets/NPS-logo.jpg";
import Marquee from "react-fast-marquee";
import FormAdmission from "./Form/Form";
import school from "../assets/jalahalli-school.avif";
import Tagline from "./Tagline";
import { Link } from "react-router-dom";
import { HiOutlineBars3 } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";
import Footer from "./Footer";
import director from "../assets/nps-director.jpg";
import { IoIosArrowDown } from "react-icons/io";
import Aos from "aos";
import "aos/dist/aos.css";


function MobileView() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  })
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url(${school})`,
      }}
      className=" bg-cover bg-center bg-no-repeat xl:h-screen"
    >
      <div className="  p-4 flex flex-col lg:flex-row lg:justify-evenly items-center gap-4">
        <Link to={"/"}>
          <img
            src={jalahalli}
            alt="logo-school"
            className="h-[75px] lg:w-[300px] 2xl:w-[330px] rounded"
          />
        </Link>
        <div className=" max-w-[95%] bg-blue-500 rounded-sm py-2 ml-[-45px]">
          <Marquee className=" text-white text-sm">
            <Tagline />
            <Tagline />
          </Marquee>
        </div>
        <div className=" p-1 cursor-pointer text-black absolute top-[105px] right-[1px]">
          {open ? (
            <RxCross1 className=" w-8 h-8" onClick={() => setOpen(!open)} />
          ) : (
            <HiOutlineBars3
              className=" w-8 h-8"
              onClick={() => setOpen(!open)}
            />
          )}
        </div>
        {open && (
          <div className="w-full h-fit bg-[rgba(255,255,255,0.4)] backdrop-blur-lg">
            <nav className=" text-black text-xs px-4 py-2 flex w-full">
              <ul className=" h-full flex flex-col gap-0.5 w-full">
                <li className=" cursor-pointer group py-1 rounded px-2">
                  <Link>
                    About Us <IoIosArrowDown className=" inline-block" />
                  </Link>
                  <div className=" hidden group-hover:block">
                    <ul className=" top-[33px] p-0.5 rounded-lg">
                      <li className=" cursor-pointer pb-1.5 text-xs hover:text-blue-600 px-2">
                        <Link to={"/director-message"}>Director Message</Link>
                      </li>
                      <li className=" cursor-pointer pb-1.5 text-xs hover:text-blue-600 px-2">
                        <Link to={"/principal-message"}>Principal Message</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <hr className=" border-black"/>
                <li className=" cursor-pointer hover:text-blue-600 py-1 rounded px-2">
                  <Link to={"/library"}>Library</Link>
                </li>
                <hr className=" border-black"/>
                <li className=" cursor-pointer hover:text-blue-600 py-1 rounded px-2">
                  <Link to={"/student-activity"}>Student Activity</Link>
                </li>
                <hr className=" border-black"/>
                <li className=" cursor-pointer hover:text-blue-600 py-1 rounded px-2">
                  <Link to={"/grade-11"}>Grade-11</Link>
                </li>
                <hr className=" border-black"/>
                <li className=" cursor-pointer group py-1 rounded px-2">
                  <Link>
                    Achievement <IoIosArrowDown className=" inline-block" />
                  </Link>
                  <div className=" hidden group-hover:block">
                    <ul className="  top-[321px] p-0.5 rounded-lg">
                      <li className=" cursor-pointer pb-1.5 text-xs hover:text-blue-600 px-2">
                        <Link to={"/student-achievement"}>Student Achievement</Link>
                      </li>
                      <li className=" cursor-pointer pb-1.5 text-xs hover:text-blue-600 px-2">
                        <Link to={"/teacher-achievement"}>Teacher Achievement</Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>

      <div className=" md:absolute lg:top-[170px] xl:top-[240px] 2xl:top-[250px] md:left-[120px] lg:left-[190px] xl:left-[170px] 2xl:left-[330px]">
        <h1 data-aos="slide-right" className=" text-2xl md:text-3xl lg:text-4xl text-white font-bold text-center">
          Academic <span className=" text-blue"> Director's </span> Message
        </h1>
      </div>
      <div className=" container mx-auto p-8 my-6 flex flex-col lg:flex-row justify-center items-center gap-8 lg:justify-end">
        <div data-aos="slide-up" className="  bg-white/10 order-1">
          <FormAdmission />
        </div>
      </div>
    </div>
  );
}

function LargeView() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  })
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url(${school})`,
      }}
      className=" bg-cover bg-center bg-no-repeat xl:h-screen"
    >
      <div className=" w-full bg-blue-500 rounded-sm py-2 px-2">
        <Marquee className=" text-white lg:text-sm xl:text-base">
          <Tagline />
          <Tagline />
        </Marquee>
      </div>
      <div className=" bg-[#f4f5ff] backdrop-blur-lg px-4 py-1 flex flex-col lg:flex-row lg:justify-evenly items-center gap-4 shadow-xl shadow-black/70">
        <Link to={"/"}>
          <img
            src={jalahalli}
            alt="logo-school"
            className="h-[75px] lg:w-[300px] 2xl:w-[330px] rounded"
          />
        </Link>
        <div className="">
          <nav className=" text-black text-base px-4 py-2">
            <ul className=" flex gap-8 lg:justify-between xl:justify-evenly items-center">
              <li className=" cursor-pointer group">
                <Link>
                  About Us <IoIosArrowDown className=" inline-block" />
                </Link>
                <div className=" hidden group-hover:block">
                  <ul className=" shadow-[0px_0px_10px_0px_rgba(0,0,0,0.5)] bg-[#f4f5ff] backdrop-blur-lg absolute top-[54px] p-1 rounded-lg">
                    <li className=" cursor-pointer p-1 text-base hover:text-blue-600">
                      <Link to={"/director-message"}>Director Message</Link>
                    </li>
                    <li className=" cursor-pointer p-1 text-base hover:text-blue-600">
                      <Link to={"/principal-message"}>Principal Message</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className=" cursor-pointer hover:text-blue-600">
                <Link to={"/library"}>Library</Link>
              </li>
              <li className=" cursor-pointer hover:text-blue-600">
                <Link to={"/student-activity"}>Student Activity</Link>
              </li>
              <li className=" cursor-pointer hover:text-blue-600">
                <Link to={"/grade-11"}>Grade-11</Link>
              </li>
              <li className=" cursor-pointer group">
                <Link>
                  Achievement <IoIosArrowDown className=" inline-block" />
                </Link>
                <div className=" hidden group-hover:block">
                  <ul className=" shadow-[0px_0px_10px_0px_rgba(0,0,0,0.5)] bg-[#f4f5ff] backdrop-blur-lg absolute top-[54px] p-1 rounded-lg">
                    <li className=" cursor-pointer p-1 text-base hover:text-blue-600">
                      <Link to={"/student-achievement"}>Student Achievement</Link>
                    </li>
                    <li className=" cursor-pointer p-1 text-base hover:text-blue-600">
                      <Link to={"/teacher-achievement"}>Teacher Achievement</Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className=" md:absolute lg:top-[215px] xl:top-[170px] 2xl:top-[250px] md:left-[120px] lg:left-[140px] xl:left-[215px] 2xl:left-[330px]">
        <h1 data-aos="slide-right" className=" text-2xl md:text-3xl xl:text-4xl text-white font-bold text-center">
          Academic <span className=" text-blue">Director's </span> Message
        </h1>
      </div>
      <div className=" container mx-auto p-8 my-6 flex flex-col lg:flex-row justify-center items-center gap-8 lg:justify-end">
        <div data-aos="slide-up" className="  bg-white/10 order-1">
          <FormAdmission />
        </div>
      </div>
    </div>
  );
}

function DirectorMsg() {
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

  return (
    <>
      <div>{windowWidth < 720 ? <MobileView /> : <LargeView />}</div>
      <div className=" container mx-auto lg:p-8 my-6 flex flex-col lg:flex-row justify-center items-center gap-16 lg:gap-8 bg-[#f4f5ff]">
        <div className=" w-full lg:w-1/3 xl:mx-8">
          <img
            src={director}
            alt="chairman-image"
            className=" rounded-2xl mx-auto mt-8 lg:mt-0"
          />
        </div>
        <div className=" w-full lg:w-2/3 px-4">
          <h3 className=" text-2xl xl:text-4xl font-bold text-blue mb-4 text-center xl:mb-8">
            DIRECTOR'S MESSAGE
          </h3>
          <div className=" text-lg text-blue my-4 px-4 md:px-4 lg:px-0">
            <h4 className=" text-2xl font-semibold text-black md:text-start md:text-[25px]">
              Ms. Grace. C D,
            </h4>
            <p className=" text-base xl:text-lg ">Academic Director,</p>
            <p className=" text-base xl:text-lg">
              National Public School Jalahalli
            </p>
          </div>
          <div className=" text-sm xl:text-lg text-black my-2 md:px-4 lg:px-0">
            <p>
              "If we want butterflies in the future, we must care for the
              caterpillars today."
              <br />
              For every student, the school is a Chrysalis.
            </p>
            <p className=" my-3">
              Children enter the school as small caterpillars, groping their way
              through the corridors of school life.
            </p>
            <p>
              At National Public School, Jalahalli, students learn life skills,
              critical thinking, and the art of living. Like caterpillars in a
              chrysalis, they undergo gradual transformation, nurtured by the
              school’s protective environment and dedicated teachers who act as
              catalysts for growth. Our mission is to shape future
              leaders—surgeons, engineers, scientists, and more—by fostering
              resilience and inner strength. We prioritize caring for every
              child, knowing that today’s nurturing will lead to tomorrow’s
              confident, capable individuals, ready to face life’s challenges.
              These students, like precious butterflies, are our greatest
              legacy.
            </p>
            <p className=" my-6">
              My best wishes to the students of NPS Jalahalli and their parents.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DirectorMsg;
